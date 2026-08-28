import { format, parseISO } from "date-fns";

export function formatDate(iso: string): string {
  if (!iso) return "";
  return format(parseISO(iso), "MMMM d, yyyy");
}
