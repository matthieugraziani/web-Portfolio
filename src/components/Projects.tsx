import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const projects = [
  {
    title: "DeFi Analytics Platform",
    description: "Plateforme d'analyse de protocoles DeFi avec machine learning pour la prédiction des rendements et l'évaluation des risques. Intégration avec Ethereum et visualisation en temps réel.",
    image: project1,
    tags: ["Python", "Web3.py", "Scikit-learn", "React", "Solidity"],
    github: "#",
    demo: "#",
  },
  {
    title: "NFT Marketplace Intelligence",
    description: "Application d'analyse de marché NFT utilisant le traitement du langage naturel et l'analyse de sentiment pour identifier les tendances et les opportunités d'investissement.",
    image: project2,
    tags: ["TensorFlow", "NLP", "IPFS", "Next.js", "Smart Contracts"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Alyra</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Projets de soutenance - Formation développeur Blockchain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
