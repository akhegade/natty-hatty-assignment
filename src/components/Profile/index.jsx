import React from "react";
import { Box, Badge, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfliePic from "../../assets/images/MaskGroup2@2x.jpg";
import CameraPic from "../../assets/images/camera.svg";

function Profile(props) {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Box className="flex justify-evenly items-center">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src={CameraPic} />}
        className="w-1/2 h-3/4"
      >
        <Avatar
          alt="Travis Howard"
          src={ProfliePic}
          className="w-full h-fit "
        />
        {/* <div className={"divide - x"}></div> */}
      </Badge>
      <div className="ml-1">
        <h2 className="text-sm">jonson smith</h2>
        <h6 className="text-base">Main St. Farmington, CA 123</h6>
      </div>
    </Box>
  );
}

export default Profile;
