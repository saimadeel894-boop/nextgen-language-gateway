import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COURSES } from "./site-data";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [interest, setInterest] = useState("");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        (e.currentTarget as HTMLFormElement).reset();
        setInterest("");
        toast.success("Enquiry received", {
          description: "An admissions advisor will reply within one working day.",
        });
      }}
    >
      <div className={compact ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Amina Rahman" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" required placeholder="+44 7700 900123" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest">Programme of interest</Label>
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger id="interest">
              <SelectValue placeholder="Select a programme" />
            </SelectTrigger>
            <SelectContent>
              {COURSES.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.title}
                </SelectItem>
              ))}
              <SelectItem value="recruitment">University admission support</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your current level, target score and preferred start date."
        />
      </div>

      <Button type="submit" variant="gold" size="xl" className="w-full">
        Submit Enquiry
      </Button>
      <p className="text-xs text-muted-foreground">
        We reply within one working day. Your details are never shared with third parties.
      </p>
    </form>
  );
}
