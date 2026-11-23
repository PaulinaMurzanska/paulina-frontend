import {
  Navigation,
  Hero,
  Services,
  ImpactStories,
  AIWorkflow,
  Experience,
  Skills,
  About,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ImpactStories />
        <AIWorkflow />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
