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
    <Box className="w-52 flex justify-center items-center  border-r-2 border-dashed">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src={CameraPic} />}
        className="w-22 h-22 "
      >
        <Avatar
          alt="Travis Howard"
          src={ProfliePic}
          className="w-full h-fit "
        />
      </Badge>
      <div className="ml-1 w-full">
        <p className="font-sans font-bold text-base leading-none">
          Jonson Smith
        </p>
        <p className="font-sans text-xs">Main St. Farmington, CA 123</p>
      </div>
    </Box>
  );
}

export default Profile;
