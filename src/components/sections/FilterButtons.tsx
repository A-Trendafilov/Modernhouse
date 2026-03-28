import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterButtonsProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterButtons = ({ categories, selectedCategory, setSelectedCategory }: FilterButtonsProps) => {
  return (
    <div className="flex justify-center flex-wrap mb-10 mt-5 gap-3">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={isSelected ? "default" : "outline"}
            aria-pressed={isSelected}
            className={cn(
              "min-w-[180px] text-sm font-medium tracking-wide uppercase transition-all duration-300",
              isSelected
                ? "bg-[#B8860B] text-white border-[#B8860B] hover:bg-[#9A7209] shadow-lg shadow-[#B8860B]/20"
                : "border-white/10 text-neutral-300 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-[#B8860B]/50 hover:text-[#B8860B]"
            )}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
