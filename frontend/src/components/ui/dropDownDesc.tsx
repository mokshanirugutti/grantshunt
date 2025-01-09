import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useId } from "react";

interface MultiSelectInputProps {
  title: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DropDownDescInput({ title, value, name, onChange }: MultiSelectInputProps) {
  const id = useId();
  return (
    <div className="space-y-2 w-56">
      <Label htmlFor={id}>{title} <span className="text-destructive">*</span> </Label>
      <Select defaultValue="2" required>
        <SelectTrigger id={id} className="[&_[data-desc]]:hidden" >
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
        <SelectItem value="1">
            Small
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              &lt; 50 emp &amp; &lt; $10M
            </span>
          </SelectItem>
          <SelectItem value="2">
            Medium
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
            0&ndash;250 emp &amp; $10M&ndash;$50M
            </span>
          </SelectItem>
          <SelectItem value="3">
            Large
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
            &gt; 250 emp &amp; &gt; $50M
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
