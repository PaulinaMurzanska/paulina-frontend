import data from "@/data/data.json";
import type { ProjectItem } from "@/types";
import { formatDateRange, getYearsOfExperience, sortByRecency } from "@/utils";

export const dynamic = "force-static";

function buildProfileText(): string {
  const { profile, services, aiWorkflow, skills, about } = data;
  const experiences = sortByRecency(data.experienceTimeline as ProjectItem[]);
  const years = getYearsOfExperience(profile.careerStart);

  const lines: string[] = [
    `# ${profile.name} (${profile.nativeName})`,
    "",
    `> ${profile.role}. ${profile.headline}.`,
    "",
    profile.summary,
    "",
    "## Quick facts",
    `- Building with React: ${profile.buildingExperience} years (since ${profile.buildingSince}, freelance and training before commercial roles)`,
    `- Commercial experience: ${years}+ years (since ${profile.careerStart})`,
    `- Location: ${profile.location} (${profile.workModes})`,
    `- Availability: ${profile.availability}; ${profile.employment}`,
    `- Languages: ${profile.languages.join(", ")}`,
    `- Target roles: ${profile.targetRoles.join(", ")}`,
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phone}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    `- CV (PDF): ${profile.website}${profile.cv}`,
    "",
    "## Why work with me",
    ...profile.whyMe.map((item) => `- ${item.claim}: ${item.proof}`),
    "",
    "## Where I fit best",
    ...profile.bestFit.map((fit) => `- ${fit}`),
    "",
    "## What I can do for a team",
    ...services.map((service) => `- ${service.title}: ${service.description}`),
    "",
    "## Impact: gaps I found and filled",
    ...[...experiences]
      .filter((item) => item.impactStory)
      .sort((a, b) => a.showcaseOrder - b.showcaseOrder)
      .flatMap((item) => [
        "",
        `### ${item.company}: ${item.impactStory!.headline}`,
        `- The gap: ${item.impactStory!.gap}`,
        `- What I did: ${item.impactStory!.action}`,
        `- The result: ${item.impactStory!.result}`,
      ]),
    "",
    `## ${aiWorkflow.title}`,
    `${aiWorkflow.standard.headline} ${aiWorkflow.standard.text}`,
    "",
    aiWorkflow.intro,
    "",
    ...aiWorkflow.steps.map((step, index) => `${index + 1}. ${step.title}: Me: ${step.me} Agent: ${step.agent}`),
    "",
    ...aiWorkflow.principles.map((principle) => `- ${principle.title}: ${principle.description}`),
    `- Tools: ${aiWorkflow.tools.join(", ")}`,
    "",
    "## Experience",
  ];

  for (const item of experiences) {
    lines.push(
      "",
      `### ${item.role} at ${item.company} (${formatDateRange(item.startDate, item.endDate)})${item.isPersonal ? " [freelance]" : ""}${item.parallelNote ? ` [${item.parallelNote}]` : ""}`,
      `${item.project}. ${item.shortDescription}`,
      ...(item.highlights ?? []).map((highlight) => `- ${highlight}`),
      `- Technologies: ${item.technologies.join(", ")}`,
      `- Case study: ${profile.website}/projects/${item.id}`
    );
  }

  lines.push("", "## Skills", ...skills.map((category) => `- ${category.name}: ${category.skills.join(", ")}`));

  lines.push(
    "",
    "## Education",
    ...about.education.map((edu) => `- ${edu.title}, ${edu.institution} (${edu.year}). ${edu.description}`),
    "",
    "## Background",
    about.journey.description,
    about.previousCareer.description
  );

  return lines.join("\n") + "\n";
}

export function GET() {
  return new Response(buildProfileText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
