import { TimelineItemRaw } from "../types/TimelineItem";

/**
 *
 * Returns the earliest start date and the latest end date from the timeline items.
 *
 */
export default function getMinMaxDates(items: TimelineItemRaw[]): {
  minDate: Date;
  maxDate: Date;
} {
  const minDate = new Date();
  const maxDate = new Date();

  for (const item of items) {
    const startDate = new Date(item.start);
    const endDate = new Date(item.end);

    if (startDate < minDate) {
      minDate.setTime(startDate.getTime());
    }

    if (endDate > maxDate) {
      maxDate.setTime(endDate.getTime());
    }
  }

  return {
    minDate,
    maxDate,
  };
}
