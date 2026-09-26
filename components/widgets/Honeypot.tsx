import { HONEYPOT_FIELD } from "@/lib/validation";

type HoneypotProps = {
  value: string;
  onChange: (value: string) => void;
};

/** Hidden from people and assistive tech; bots that fill every field get filtered server-side. */
export default function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
