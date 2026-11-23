import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import data from "@/data/data.json";
import "./globals.css";

const { profile, skills, about } = data;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const title = `${profile.name} | React Front-end Developer (Next.js, TypeScript, Vue) · AI-augmented development`;
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [...profile.targetRoles, ...skills.flatMap((category) => category.skills), "Kraków", "Remote"],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: profile.website,
    title,
    description,
    siteName: profile.name,
    firstName: "Paulina",
    lastName: "Murzanska",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nativeName,
  jobTitle: profile.role,
  description: profile.summary,
  url: profile.website,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kraków",
    addressCountry: "PL",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: skills.flatMap((category) => category.skills),
  knowsLanguage: ["English", "Polish"],
  alumniOf: about.education
    .filter((edu) => edu.type === "degree" || edu.type === "bootcamp")
    .map((edu) => ({ "@type": "EducationalOrganization", name: edu.institution })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
