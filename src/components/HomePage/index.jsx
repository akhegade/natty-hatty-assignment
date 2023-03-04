import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  Avatar,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import InputField from "../shared/FormFileld/InputField";

import Label from "../shared/FormFileld/Label";
import ProfliePic from "../../assets/images/MaskGroup2@2x.jpg";

import CardImage from "../../assets/images/mastercard-26161.png";
import Profile from "../Profile";
import Activity from "../Activity";
import BillingSection from "../Billing";

import UserSettingIcon from "../../assets/images/awesome-users-cog.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";

let activites = [
  {
    timeLineDotContent: UserSettingIcon,
    name: "Leslie Alexander",
    note: "Leslie Alexander updated her ",
    date: "5 October 11:46 AM",
    action: "Account Type",
  },
  {
    timeLineDotContent: UserSettingIcon,
    name: "Leslie Alexander",
    note: "John Smith removed Mark Fleix from ",
    date: "5 October 11:46 AM",
    action: "Family member",
  },
  {
    timeLineDotContent: UserSettingIcon,
    name: "Leslie Alexander",
    note: "Leslie Alexander updated her ",
    date: "5 October 11:46 AM",
    action: "Account Type",
  },
  {
    timeLineDotContent: UserSettingIcon,
    name: "Leslie Alexander",
    note: "John Smith removed Mark Fleix from ",
    date: "5 October 11:46 AM",
    action: "Family member",
  },
  {
    timeLineDotContent: UserSettingIcon,
    name: "Leslie Alexander",
    note: "Leslie Alexander updated her ",
    date: "5 October 11:46 AM",
    action: "Account Type",
  },
];

let memberList = [
  {
    image: ProfliePic,
    name: "John Smith",
    isActive: true,
    isAdmin: true,
    sentMessage: "have invited johnsmith@gmail.com to become family member.",
    recivedMessage: "have invited you to become his family member.",
  },
  {
    image: ProfliePic,
    name: "John Smith",
    isActive: false,
    isAdmin: false,
    sentMessage: "have invited johnsmith@gmail.com to become family member.",
    recivedMessage: "have invited you to become his family member.",
  },
  {
    image: ProfliePic,
    name: "Dianne Russell",
    isActive: false,
    isAdmin: false,
    sentMessage: "have invited johnsmith@gmail.com to become family member.",
    recivedMessage: "have invited you to become his family member.",
  },
  {
    image: ProfliePic,
    name: "Lisa Smith",
    isActive: false,
    isAdmin: false,
    sentMessage: "have invited johnsmith@gmail.com to become family member.",
    recivedMessage: "have invited you to become his family member.",
  },
  {
    image: ProfliePic,
    name: "Sean Michaletz",
    isActive: false,
    isAdmin: false,
    sentMessage: "have invited johnsmith@gmail.com to become family member.",
    recivedMessage: "have invited you to become his family member.",
  },
];

let bankCardDetails = [
  {
    cardType: "",
    cardNumer: "**** **** **** 5967",
    expireDate: "09/27",
  },
  {
    cardType: "",
    cardNumer: "**** **** **** 5967",
    expireDate: "09/27",
  },
];

function HomePage(props) {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  const [isSent, setSent] = useState(true);

  return (
    <Grid container className="m-8">
      <Grid
        container
        item
        sm={12}
        justifyContent="space-between"
        alignContent={"center"}
        className="mb-5 "
      >
        <Box className="workSans font-bold text-2xl leading-none">
          My Account
        </Box>
        <Box className="bg-[#CEF2DA]  text-[#0C611A] text-center px-4 py-3 rounded w-1/4 font-sans font-bold text-xl leading-none">
          Success Message Here
        </Box>
        <Box>
          <Button
            variant="contained"
            className="bg-[#232E3E] w-auto h-8 shadow-none font-sans text-xs capitalize"
          >
            View Button
          </Button>
        </Box>
      </Grid>
      <Grid container item sm={8} className=" bg-white ">
        <Grid container sm={12} className="bg-[#F5F6F8]  m-2 p-2 rounded-md ">
          <Grid container sm={3} className="">
            <Profile />
          </Grid>
          <Grid container item sm={7} className="w-full">
            <Grid item sm={6}>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="First Name"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="firstName" />
              </Box>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="Last Name"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="lastName" />
              </Box>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="Email"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="email" className={""} />
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="Phone"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="phone" className={""} />
              </Box>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="Graduation Year"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="graduationYear" className={""} />
              </Box>
              <Box className="flex justify-center w-full p-2">
                <Label
                  label="Date of Birth"
                  className="w-32 mt-1 font-sans font-normal tracking-normal text-xs"
                />
                <InputField name="dateofBirth" className={""} />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={2}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              className="bg-[#0C611A] w-36 h-8 shadow-none border-0 font-sans font-normal capitalize tracking-normal text-xs"
            >
              Save Changes
            </Button>
            <Button
              variant="contained"
              className="bg-[#232E3E] w-36 h-8 shadow-none font-sans font-normal tracking-normal capitalize text-xs leading-none"
            >
              Change Password
            </Button>
            <Button
              variant="contained"
              className="bg-[#FF3A3A] w-36 h-8 shadow-none font-sans font-normal tracking-normal capitalize text-xs"
            >
              Leave Family
            </Button>
          </Grid>
        </Grid>
        <Grid container sm={12} className="">
          <Grid container sm={8} className="">
            <Grid
              container
              sm={12}
              className="bg-[#F5F6F8] rounded-md max-h-48 m-2 p-2"
            >
              <Grid container item sm={12}>
                <span className="font-sans font-bold leading-none">
                  Bank Account
                </span>
              </Grid>

              {bankCardDetails.map((el) => (
                <Grid container item sm={6} className="w-full">
                  <Box className="flex items-center bg-white m-2 pl-2 w-full">
                    <img src={CardImage} alt="card" />
                    <div className="flex flex-col">
                      <span className="font-sans  font-bold tracking-normal text-xs leading-none">
                        {el.cardNumer}
                      </span>
                      <span className="font-sans font-normal tracking-normal text-xs text-[#C7C7C7] leading-none">
                        {`Expires ${el.expireDate}`}
                      </span>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              sm={12}
              className=" bg-[#F5F6F8] rounded-md m-2 p-2 "
            >
              <BillingSection />
            </Grid>
          </Grid>
          <Grid container item sm={4} className="bg-[#F5F6F8] rounded-md">
            <Box className="flex justify-between w-full h-12 p-2  ">
              <p className="font-sans font-bold leading-none">Activites</p>
              <Button
                variant="contained"
                className="bg-[#0C611A] w-26 h-7 shadow-none font-sans font-normal capitalize tracking-normal text-xs leading-none"
              >
                view all
              </Button>
            </Box>
            <Grid item sm={12} className="h-96 overflow-auto">
              <Activity data={activites} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item sm={4} className="">
        <Grid item sm={12} className="m-2 bg-[#F5F6F8] rounded-md p-2">
          <Box className="flex justify-between ">
            <h2 className="font-sans font-bold">Family</h2>
            <Box className="">
              <SearchSharpIcon />
              <Button
                variant="contained"
                className="bg-[#0C611A] w-26 h-7 shadow-none font-sans font-normal capitalize tracking-normal text-xs leading-none"
              >
                view
              </Button>
            </Box>
          </Box>
          <Box className="h-56 mt-4">
            <Box className="h-full overflow-auto">
              {memberList.map((el) => (
                <Box
                  className={`flex justify-between m-1 ${
                    el.isActive ? "bg-[#F8991F]" : "bg-[#DEE8FF]"
                  } border-2 rounded-sm p-2`}
                >
                  <Box className="flex items-center w-56">
                    <Avatar alt="Profile Pic" src={el.image} className="mr-2" />
                    <p className="font-sans font-bold text-base leading-none">
                      {el.name}
                    </p>
                  </Box>
                  <Box className="flex justify-around items-center">
                    <Button
                      variant="contained"
                      className={` w-20 h-7 mx-2 font-sans capitalize text-xs shadow-none border-spacing-1 rounded ${
                        el.isAdmin ? "bg-white" : "bg-[#CAD7F5] "
                      } text-black`}
                    >
                      {el.isAdmin ? "Admin" : "Member"}
                    </Button>

                    {el.isAdmin && (
                      <svg
                        className="bg-white w-8 h-7 p-1 rounded"
                        id="Component_54_1"
                        data-name="Component 54 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.125"
                        height="10.5"
                        viewBox="0 0 13.125 10.5"
                      >
                        <path
                          id="Path_17"
                          data-name="Path 17"
                          d="M4.594,5.25A2.625,2.625,0,1,0,1.969,2.625,2.624,2.624,0,0,0,4.594,5.25Zm1.039.984H3.555A3.555,3.555,0,0,0,0,9.789a.711.711,0,0,0,.711.711H8.477a.71.71,0,0,0,.711-.711A3.556,3.556,0,0,0,5.633,6.234Zm4.193.328H8.31A4.151,4.151,0,0,1,9.844,9.789a1.357,1.357,0,0,1-.206.711h2.831a.661.661,0,0,0,.656-.674A3.28,3.28,0,0,0,9.826,6.563ZM8.859,5.25A2.3,2.3,0,1,0,7.49,1.118a3.226,3.226,0,0,1,.385,1.507,3.258,3.258,0,0,1-.648,1.942A2.29,2.29,0,0,0,8.859,5.25Z"
                          fill="#202020"
                        />
                        <path
                          id="Path_18"
                          data-name="Path 18"
                          d="M0,0H10.5V10.5H0Z"
                          fill="none"
                        />
                      </svg>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} className="bg-[#F5F6F8] rounded-md m-2 p-2 ">
          <Box className="flex justify-between ">
            <h2 className="font-sans font-bold">Invitations</h2>
            <Box className="">
              <ButtonGroup>
                <Button
                  variant="contained"
                  className={`${
                    isSent ? "bg-[#F8991F]" : "bg-[#DBDBDB]"
                  } w-26 h-7 shadow-none font-sans font-normal capitalize tracking-normal text-xs leading-none m-0 border-2 rounded-full rounded-r-none`}
                  onClick={() => setSent(!isSent)}
                >
                  sent(5)
                </Button>
                <Button
                  variant="contained"
                  className={`${
                    !isSent ? "bg-[#F8991F]" : "bg-[#DBDBDB]"
                  } w-26 h-7 shadow-none font-sans font-normal  capitalize tracking-normal text-xs leading-none m-0 border-2 rounded-full rounded-l-none`}
                  onClick={() => setSent(!isSent)}
                >
                  Recived(15)
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box className="h-60 mt-4">
            <Box className="h-full overflow-auto">
              {!isSent
                ? memberList.map((el) => (
                    <Box
                      className={`flex justify-between m-1 bg-[#DEE8FF]  p-2 rounded-md`}
                    >
                      <Box className="flex items-center w-60">
                        <Avatar
                          alt="Profile Pic"
                          src={el.image}
                          className="mr-2"
                        />
                        <p>
                          <span className="text-[#F8991F]">{`${el.name} `}</span>
                          <span className="font-sans font-bold text-xs leading-none">
                            {el.recivedMessage}
                          </span>
                        </p>
                      </Box>
                      <Box className="flex justify-around items-center">
                        <IconButton
                          color="success"
                          aria-label="upload picture"
                          component="label"
                        >
                          <CheckBoxSharpIcon className="w-8 h-8" />
                        </IconButton>
                        <IconButton
                          color="error"
                          aria-label="upload picture"
                          component="label"
                        >
                          <DisabledByDefaultRoundedIcon className="w-8 h-8 text-orange-700" />
                        </IconButton>
                      </Box>
                    </Box>
                  ))
                : memberList.map((el) => (
                    <Box
                      className={`flex justify-between m-1 bg-[#DEE8FF]  p-2 rounded-md`}
                    >
                      <Box className="flex items-center w-full">
                        <Avatar
                          alt="Profile Pic"
                          src={el.image}
                          className="mr-2"
                        />
                        <p>
                          <span className="text-[#F8991F]">{"You "}</span>
                          <span className="font-sans font-bold text-xs leading-none">
                            {el.sentMessage}
                          </span>
                        </p>
                      </Box>
                    </Box>
                  ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
