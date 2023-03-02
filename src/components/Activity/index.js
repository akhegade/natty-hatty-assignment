import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
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
                <TimelineDot>
                  <Avatar
                    alt="Profile Pic"
                    src={el.timeLineDotContent}
                    className="w-4 h-4"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  className="
                font-sans text-sm"
                >
                  {el.title}
                </Typography>
                <Typography className="font-sans text-sm">
                  {el.subTitle}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))
        : "No Data"}
    </Timeline>
  );
}

export default Activity;
