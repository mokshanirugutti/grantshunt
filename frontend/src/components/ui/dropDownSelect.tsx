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
}

export default function DropDownSelect({title}: DropDownSelectProps) {
  const id = useId();
  return (
    <div className="space-y-2 w-56">
      <Label htmlFor={id}>
        {title} <span className="text-destructive">*</span>
      </Label>
      <Select defaultValue="Non-Profit" required>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Non-Profit">Non-Profit</SelectItem>
          <SelectItem value="For-Profit">For-Profit</SelectItem>
          <SelectItem value="Government">Government</SelectItem>
          <SelectItem value="Educational">Educational</SelectItem>
          <SelectItem value="Healthcare">Healthcare</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
