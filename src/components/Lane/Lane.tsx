import React, { useMemo } from "react";
import { TimelineItemRendered } from "../../types/TimelineItem";
import Item from "../Item";
import calculateDiffDays from "../../utils/calculateDiffDays";
type Props = {
  lane: TimelineItemRendered[];
  sizeOfTimeline: number;
  cellWidth: number;
  minDate: Date;
  laneIndex: number;
};

export default function Lane({
  lane,
  sizeOfTimeline,
  cellWidth,
  minDate,
  laneIndex,
}: Props) {
  const verticalLines = useMemo(
    () =>
      Array.from({ length: sizeOfTimeline }, (_, i) => (
        <div key={`v-${i}`} className="timelineItem timelineGridVertical" />
      )),
    [sizeOfTimeline]
  );

  const horizontalLines = useMemo(
    () =>
      Array.from({ length: sizeOfTimeline }, (_, i) => (
        <div key={`h-${i}`} className="timelineItem timelineGridHorizontal" />
      )),
    [sizeOfTimeline]
  );

  return (
    <div className="timelineRow">
      <div className="timelineGrid">{horizontalLines}</div>
      <div className="timelineGrid">{verticalLines}</div>

      {lane.map((item, index) => {
        return (
          <Item
            key={item.id}
            item={item}
            cellWidth={cellWidth}
            itemIndex={index}
            minDate={minDate}
            laneIndex={laneIndex}
          />
        );
      })}
    </div>
  );
}
