import React, { useId } from "react";
import { Label } from "@/components/ui/label";
import {Select, SelectItem} from "@nextui-org/react";

export const Sectors = [
    { key: "Arts", label: "Arts" },
    { key: "Business", label: "Business" },
    { key: "Educational", label: "Educational" },
    { key: "Healthcare", label: "Healthcare" },
    { key: "Technology", label: "Technology" },
    { key: "Finance", label: "Finance" },
    { key: "Marketing", label: "Marketing" },
    { key: "Manufacturing", label: "Manufacturing" },
    { key: "Retail", label: "Retail" },
    { key: "Construction", label: "Construction" },
    { key: "Energy", label: "Energy" },
    { key: "Hospitality", label: "Hospitality" },
    { key: "Transportation", label: "Transportation" },
  ];
  
interface NextUIMultiSelectsProps {
    title :string
    name :string
    onChange : React.Dispatch<React.SetStateAction<Set<string>>>;
}
export default function NextUIMultiSelects({ title, name, onChange }: NextUIMultiSelectsProps ) {
    const id = `${name}-${useId()}`;


  const handleSelectionChange = (e:any) => {
    onChange(new Set(e.target.value.split(",")));
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
        <Label htmlFor={id}>
        {title} <span className="text-destructive">*</span>
      </Label>
      <Select
        className="max-w-xs "
        placeholder={`Select ${title}`}
        variant="bordered"
        selectionMode="multiple"
        aria-label="Sector"
        onChange={handleSelectionChange}
        name={name}
        id={id}
        
      >
        {Sectors.map((sector) => (
          <SelectItem key={sector.key}>{sector.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}

