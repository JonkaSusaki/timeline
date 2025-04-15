export type TimelineItemRaw = {
  id: number;
  start: string;
  end: string;
  name: string;
};

export type TimelineItemRendered = TimelineItemRaw & {
  startOffset: number;
};
