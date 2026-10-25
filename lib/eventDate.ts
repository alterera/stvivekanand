export type EventDateFields = {
  eventDate?: string | null;
  _createdAt?: string;
};

/** Staff-set event datetime, falling back to document creation for older entries. */
export function getEventDateIso(event: EventDateFields): string {
  return event.eventDate || event._createdAt || new Date(0).toISOString();
}

export function parseEventDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.getDate(),
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    time: d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true }),
    year: d.getFullYear(),
  };
}

export function getEventYear(iso: string): number {
  return new Date(iso).getFullYear();
}
