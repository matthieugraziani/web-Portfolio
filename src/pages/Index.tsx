import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p><p>© 2002 Portfolio Data Scientist & Développeur IA. Tous droits réservés.</p> Portfolio Data Scientist & Développeur IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
