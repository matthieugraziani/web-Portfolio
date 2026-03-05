import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const projects = [
  {
    title: "Survival Analytics",
    description: "Système de Machine Learning pour l'analyse et la prédiction du taux de survie de patients atteints de cancer du cerveau. Utilisation d'algorithmes de régression et de classification pour identifier les facteurs de risque et estimer les probabilités de survie.",
    image: project1,
    tags: ["Python", "Scikit-learn", "Pandas", "Survival Analysis", "XGBoost"],
    github: "https://github.com/matthieugraziani/ML-Survival-Analysis",
    demo: "#",
  },
  {
    title: "DiagMind.AI",
    description: "Application de Deep Learning pour l'aide au diagnostic en imagerie médicale. Détection et classification automatique des tumeurs cérébrales à partir d'IRM avec réseau de neurones convolutionnels (CNN) et visualisation des zones d'intérêt.",
    image: project2,
    tags: ["PyTorch", "CNN", "Medical Imaging", "OpenCV", "TensorFlow"],
    github: "https://github.com/matthieugraziani/Streamlit-DiagMind.AI",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Phares</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Machine Learning & Deep Learning en santé
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
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
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
