import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useId } from "react";

interface DropDownSelectProps {
  title: string;
  name:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DropDownSelect({title, name, onChange}: DropDownSelectProps) {
  const id = `${name}-${useId()}`;
  const handleValueChange = (selectedValue: string) => {
    // Simulate an event to match the expected signature of handleOrgChange
    const event = {
      target: {
        name,
        value: selectedValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div className="space-y-2 w-56">
      <Label htmlFor={id}>
        {title} <span className="text-destructive">*</span>
      </Label>
      <Select defaultValue="select" required onValueChange={handleValueChange}>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Non-Profit">Non-Profit</SelectItem>
          <SelectItem value="For-Profit">For-Profit</SelectItem>
          <SelectItem value="Government">Government</SelectItem>
          <SelectItem value="Educational">Educational</SelectItem>
          <SelectItem value="Healthcare">Healthcare</SelectItem>
          <SelectItem value="select" disabled className="hidden">---Select---</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
