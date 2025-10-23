import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const FeatureCard = ({ icon: Icon, title, items }: FeatureCardProps) => {
  return (
    <div className="h-full hover:shadow-lg transition-shadow duration-300 border-2 border-secondary/30 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4"> {/* Ajuste o tamanho do círculo aqui: w-16 h-16 */}
          <Icon className="w-10 h-10 text-primary" /> {/* Ajuste o tamanho/cor do ícone aqui: w-10 h-10 text-primary */}
        </div>
        
        <h3 className="font-bold text-lg mb-4">{title}</h3>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
