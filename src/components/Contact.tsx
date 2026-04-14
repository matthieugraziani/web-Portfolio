import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travaillons <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ensemble</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Intéressé par mes compétences ? Discutons de votre projet !
          </p>
        </div>
        
        <Card className="p-8 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:matthieu.graziani007@gmail.com"
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">matthieu.graziani007@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/matthieu-graziani-4190b526b" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-muted-foreground">Mon profil</div>
              </div>
            </a>
            
            
            <a 
              href="#"
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Discord</div>
                <div className="text-sm text-muted-foreground">Alyra Community</div>
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="hero" size="lg" className="w-full md:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un message
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
