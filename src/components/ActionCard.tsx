
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
}

export function ActionCard({ icon: Icon, title, description, active = false }: ActionCardProps) {
  return (
    <div className={cn(
      "border border-green-500/30 rounded-lg p-6 bg-black/20 backdrop-blur-sm transition-all duration-200 hover:border-green-500/60 hover:bg-green-500/5",
      active && "border-green-500 bg-green-500/10"
    )}>
      <div className="flex flex-col items-center text-center space-y-3">
        <Icon className="w-8 h-8 text-green-400" />
        <h3 className="text-green-400 font-semibold text-sm tracking-wider uppercase">
          {title}
        </h3>
        <p className="text-green-600/80 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
