import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerInputProps {
  title: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DatePickerInput({ title, name, onChange }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined)

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    
    const event = {
      target: {
        name: name,
        value: date ? format(date, "yyyy-MM-dd") : "", 
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium my-1">{title} <span className="text-destructive">*</span></label>
        </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {selectedDate ? format(selectedDate, "PPP") : <span>{title}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateChange} // Use the new handleDateChange function
                initialFocus
                />
            </PopoverContent>
          </Popover>
          </div>
  )
}