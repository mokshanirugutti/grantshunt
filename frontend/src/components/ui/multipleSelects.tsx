import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";

const frameworks: Option[] = [
  {
    value: "Arts",
    label: "Arts",
  },
  {
    value: "Business",
    label: "Business",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Energy",
    label: "Energy",
  },
  {
    value: "Farming",
    label: "Farming",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Literacy",
    label: "Literacy",
  },
  {
    value: "Military",
    label: "Military",
  },
  {
    value: "Nutrition and Food",
    label: "Nutrition and Food",
  },
  {
    value: "Pets and Animal",
    label: "Pets and Animal",
  },
  {
    value: "Research",
    label: "Research",
  },
  {
    value: "Science",
    label: "Science",
  },
  {
    value: "Sports",
    label: "Sports",
  },
  {
    value: "Technology",
    label: "Technology",
  },
  {
    value: "Transporation",
    label: "Transporation",
  },
  {
    value: "Travel",
    label: "Travel",
  },
];

interface MultipleSelectsProps {
  title :string
}

export default function MultipleSelects({ title  }: MultipleSelectsProps) {
  return (
    <div className="space-y-2 w-full">
      <Label>{title} <span className="text-destructive">*</span> </Label>
      <MultipleSelector
        commandProps={{
          label: `Select ${title}`,
        }}
        defaultOptions={frameworks}
        placeholder={`Select ${title} (5 max)`}
        maxSelected={5}
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
      
    </div>
  );
}
