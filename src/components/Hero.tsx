import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src={avatar}
              alt="Photo de profil"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-lg shadow-primary/20"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-background" />
          </div>
          
          <div className="inline-block">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
              Développeur IA & Data Scientist
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Transformez vos données en intelligence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionné par le Machine Learning et le Deep Learning appliqués à la santé
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:matthieu.graziani007@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Voir mes projets
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/matthieugraziani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/matthieu-graziani-4190b526b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;
