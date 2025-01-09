import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

interface RequiredInputProps {
  title: string;
  placeholder: string;
  type: string;
  value: string | number; 
  name: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const RequiredInput: React.FC<RequiredInputProps> = ({
  title,
  placeholder,
  type,
  value,
  name,
  onChange,
}) => {
  const id = `${name}-${useId()}`;
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {title} <span className="text-destructive">*</span>
      </Label>
      <Input
        id={id}
        name={name} 
        placeholder={placeholder}
        type={type}
        value={value} 
        onChange={onChange} 
        required
      />
    </div>
  );
};

export default RequiredInput;
