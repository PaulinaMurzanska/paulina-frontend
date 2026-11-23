import type { ProjectItem } from "@/types";

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  if (endDate === "present") {
    return `${startStr} — Present`;
  }

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${startStr} — ${endStr}`;
}

export function getYearsOfExperience(careerStart: string, now: Date = new Date()): number {
  const start = new Date(careerStart);
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return Math.floor(months / 12);
}

export function sortByRecency(items: ProjectItem[]): ProjectItem[] {
  return [...items].sort((a, b) => {
    const aIsCurrent = a.endDate === "present";
    const bIsCurrent = b.endDate === "present";
    if (aIsCurrent && !bIsCurrent) return -1;
    if (!aIsCurrent && bIsCurrent) return 1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}
