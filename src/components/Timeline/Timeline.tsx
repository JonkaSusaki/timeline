import React, { useMemo } from "react";
import "./style.css";
import TimelineMode from "../../enums/TimelineMode";
import {
  TimelineItemRaw,
  TimelineItemRendered,
} from "../../types/TimelineItem";
import getMinMaxDates from "../../utils/getMinMaxDates";
import assignLanes from "../../utils/assignLanes";
import getDatesArray from "../../utils/getDatesArray";
import calculateDiffDays from "../../utils/calculateDiffDays";
import Lane from "../Lane/Lane";
import groupDatesByMonth from "../../utils/groupByMonth";

type Props = {
  items: TimelineItemRaw[];
};

export default function TimeLine({ items }: Props) {
  const [timelineMode, setTimelineMode] = React.useState<TimelineMode>(
    TimelineMode.DAY
  );

  const cellWidth = 200;

  const minDate = useMemo(() => {
    return getMinMaxDates(items).minDate;
  }, [items]);

  const maxDate = useMemo(() => {
    return getMinMaxDates(items).maxDate;
  }, [items]);

  const diffDays = useMemo(() => {
    return calculateDiffDays(minDate, maxDate);
  }, [minDate, maxDate]);

  const lanes = useMemo(() => {
    return assignLanes(items) as TimelineItemRendered[][];
  }, [items]);

  const datesArray = useMemo(() => {
    return getDatesArray(minDate, maxDate);
  }, [minDate, maxDate]);

  const timelineHeaderItems = useMemo(() => {
    if (timelineMode === TimelineMode.DAY) {
      return datesArray.map((date, i) => (
        <div key={date.getTime()} className="timelineItem timelineHeaderItem">
          <strong>
            {date.toLocaleDateString("en-GB", {
              day: "2-digit",
            })}
          </strong>
          <span>{date.toLocaleDateString("en-GB", { month: "short" })}</span>
        </div>
      ));
    }
  }, [datesArray]);

  return (
    <div className="timelineContainer">
      <div className="timelineHeader">{timelineHeaderItems}</div>

      <div className="timelineBody">
        {lanes.map((lane, i) => (
          <Lane
            key={`lane-${i}`}
            laneIndex={i}
            cellWidth={cellWidth}
            lane={lane}
            sizeOfTimeline={diffDays}
            minDate={minDate}
          />
        ))}
      </div>
    </div>
  );
}
