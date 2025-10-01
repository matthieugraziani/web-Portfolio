import { Card } from "@/components/ui/card";
import { Brain, Code, Database, LineChart, Network, Cpu } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
  },
  {
    icon: Network,
    title: "Deep Learning",
    items: ["Neural Networks", "CNN", "RNN/LSTM", "Transformers"],
  },
  {
    icon: Code,
    title: "Programmation",
    items: ["Python", "R", "SQL", "JavaScript/TypeScript"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: ["Pandas", "NumPy", "Apache Spark", "ETL Pipelines"],
  },
  {
    icon: LineChart,
    title: "Visualisation",
    items: ["Matplotlib", "Plotly", "Seaborn", "Power BI"],
  },
  {
    icon: Cpu,
    title: "NLP & Computer Vision",
    items: ["NLTK", "spaCy", "OpenCV", "Hugging Face"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Techniques</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise en Data Science et Intelligence Artificielle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
