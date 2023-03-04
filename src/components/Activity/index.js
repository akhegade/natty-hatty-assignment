import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Avatar from "@mui/material/Avatar";

function Activity(props) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {props?.data
        ? props?.data?.map((el) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-[#DEE8FF]">
                  <Avatar
                    alt="Profile Pic"
                    src={el.timeLineDotContent}
                    className="w-4 h-4 "
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <p className="font-sans font-semibold leading-none text-xs">
                  {el.note} <span className="text-[#F8991F]">{el.action}</span>
                </p>
                <span className="font-sans tracking-normal text-xs text-[#C7C7C7] leading-none">
                  {el.date}
                </span>
              </TimelineContent>
            </TimelineItem>
          ))
        : "No Data"}
    </Timeline>
  );
}

export default Activity;
