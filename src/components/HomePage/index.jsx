import React from "react";
import {
  Grid,
  Box,
  Button,

  //   SmallAvatar,
  Avatar,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import NavBar from "../NavBar/index";
import InputField from "../shared/FormFileld/InputField";
// import Button from "../shared/FormFileld/Button";
import Label from "../shared/FormFileld/Label";
import ProfliePic from "../../assets/images/MaskGroup2@2x.jpg";

import CardImage from "../../assets/images/mastercard-26161.png";
import Profile from "../Profile";
import Activity from "../Activity";

import UserSettingIcon from "../../assets/images/awesome-users-cog.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";

let activites = [
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
  {
    timeLineDotContent: UserSettingIcon,
    title: "Leslie Alexander updated her Account Type",
    subTitle: "5 October 11:46 AM",
  },
];

let memberList = [
  {
    image: ProfliePic,
    name: "John Smith",
    isActive: true,
    isAdmin: true,
  },
  {
    image: ProfliePic,
    name: "John Smith",
    isActive: false,
    isAdmin: false,
  },
  {
    image: ProfliePic,
    name: "Dianne Russell",
    isActive: false,
    isAdmin: false,
  },
  {
    image: ProfliePic,
    name: "Lisa Smith",
    isActive: false,
    isAdmin: false,
  },
  {
    image: ProfliePic,
    name: "Sean Michaletz",
    isActive: false,
    isAdmin: false,
  },
];
function HomePage(props) {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Grid container sm={12} className="m-12">
      {/* Main container 1 */}
      <Grid
        container
        item
        sm={12}
        justifyContent="space-between"
        alignContent={"center"}
        className="mb-5"
      >
        <Box className="font-sans font-bold">My Account</Box>
        <Box className="bg-[#CEF2DA]  text-[#0C611A] text-center px-4 py-3 rounded w-1/4 font-sans font-bold">
          Success Message Here
        </Box>
        <Box>
          <Button
            variant="contained"
            className="bg-[#232E3E] w-40 h-8 shadow-none"
          >
            View
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        item
        sm={8}
        className=" bg-[#F5F6F8] "
        // justifyContent={"center"}
      >
        <Grid container sm={3} className=" w-full">
          <Profile />
        </Grid>
        <Grid container item sm={6} spacing={2}>
          <Grid item sm={6}>
            <Box className="flex w-full p-2">
              <Label label="First Name" className="flex-auto w-5/12" />
              <InputField name="firstName" className={"flex-auto w-2/3"} />
            </Box>
            <Box className="flex w-full p-2">
              <Label label="Last Name" className="flex-auto w-5/12" />
              <InputField name="lastName" className={"flex-auto w-2/3"} />
            </Box>
            <Box className="flex w-full p-2">
              <Label label="Email" className="flex-auto w-5/12" />
              <InputField name="email" className={"flex-auto w-2/3"} />
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box className="flex w-full p-2">
              <Label label="Phone" className="flex-auto w-5/12" />
              <InputField name="phone" className={"flex-auto w-2/3"} />
            </Box>
            <Box className="flex w-full p-2">
              <Label label="Graduation Year" className="flex-auto w-5/12" />
              <InputField name="graduationYear" className={"flex-auto w-2/3"} />
            </Box>
            <Box className="flex w-full p-2">
              <Label label="Date of Birth" className="flex-auto w-5/12" />
              <InputField name="dateofBirth" className={"flex-auto w-2/3"} />
            </Box>

            {/* <InputField lable={"phone"} /> */}
            {/* <InputField lable={"graduationYear"} /> */}
            {/* <InputField lable={"dateofBirth"} /> */}
          </Grid>
        </Grid>
        <Grid container item md={3} justifyContent="center" alignItems="center">
          {/* <button className="bg-green-600">Rend</button> */}
          <Button
            variant="contained"
            className="bg-green-600 w-4/5 h-8 shadow-none font-sans text-sm"
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            className="bg-slate-800 w-4/5 h-8 shadow-none font-sans text-sm"
          >
            Change Password
          </Button>
          <Button
            variant="contained"
            className="bg-orange-600 w-4/5 h-8 shadow-none font-sans text-sm"
          >
            Leave Family
          </Button>
        </Grid>
        <Grid container sm={8} className="w-full">
          <span className="font-sans font-bold">Bank Account</span>
          <Grid
            container
            sm={12}
            // spacing={1}
            justifyContent="center"
            className="w-full  p-1"
          >
            <Grid item sm={6} className=" ">
              <Box className="flex justify-center items-center bg-slate-300 w-64">
                <img src={CardImage} alt="card" />
                <div className="">
                  <p className="font-sans text-sm">**** **** **** 5967</p>
                  <span className="p-0 m-0 font-sans text-sm">
                    Expires 09/27
                  </span>
                </div>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className="flex justify-center items-center bg-slate-300 w-64">
                <img src={CardImage} alt="card" />
                <div className="font-sans text-sm">
                  <p>**** **** **** 5967</p>

                  <span>Expires 09/27</span>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid container sm={12} className="w-full">
            <Box className="w-full">
              <div className="font-sans font-bold">Billing Address</div>
              <FormGroup>
                <FormControlLabel
                  //   className="text-[#F8991F]"
                  control={
                    <Checkbox defaultChecked className="text-[#F8991F]" />
                  }
                  label="Same as Home Address"
                />
                {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
              </FormGroup>
            </Box>
            <Grid item sm={6}>
              <Box className="w-full p-2">
                <div>
                  <Label label="First Name" className="" />
                </div>
                <InputField name="firstName" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className="p-2">
                <div>
                  <Label label="Last Name" className="" />
                </div>
                <InputField name="lastName" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className="w-full p-2">
                <div>
                  <Label label="Address Line 1" className="" />
                </div>
                <InputField name="firstName" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className="p-2">
                <div>
                  <Label label="Address Line 2" className="" />
                </div>
                <InputField name="firstName" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid item sm={3}>
              <div>
                <Label label="Country" className="" />
              </div>
              <div>US</div>
            </Grid>
            <Grid item sm={3}>
              <div>
                <Label label="State/Province/Region" className="" />
              </div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label=""
                className="w-3/5 h-7"
                // onChange={handleChange}
              >
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                {/* <MenuItem value={20}>Twenty</MenuItem> */}
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Grid>
            <Grid item sm={3}>
              <Box className="p-2">
                <div>
                  <Label label="City" className="" />
                </div>
                <InputField name="city" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid item sm={3}>
              <Box className="p-2">
                <div>
                  <Label label="Zip Code" className="" />
                </div>
                <InputField name="zipcode" className={""} />
                {/* <div>co</div> */}
              </Box>
            </Grid>
            <Grid container item sm={12} justifyContent="flex-end">
              <Button
                variant="contained"
                className="bg-[#232E3E] w-40 h-8 shadow-none"
              >
                Edit Details
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sm={4} className="w-full   shadow shadow-orange-50">
          {/* <Grid
            container
            item
            sm={12}
            // justifyContent="space-evenly"
            // flexDirection={"row"}
          > */}
          {/* <Box>Activites</Box> */}
          <Box className="flex justify-between w-full h-12 p-2  ">
            <p className="font-sans font-bold">Activites</p>
            <Button
              variant="contained"
              className="bg-green-600 w-40 h-8 shadow-none"
            >
              view
            </Button>
          </Box>
          <Grid item sm={12} className="h-96 overflow-auto">
            <Activity data={activites} />
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
      <Grid container item sm={4} className="p-2">
        <Grid item sm={12} className="m-2 h-3/6">
          <Box className="flex justify-between ">
            <h2 className="font-sans font-bold">Family</h2>
            <Box className="">
              {/* <Avatar alt="Profile Pic" src={ProfilePic} /> */}
              <SearchSharpIcon />
              <Button
                variant="contained"
                className="bg-green-600 w-32 h-8 shadow-none"
              >
                view
              </Button>
            </Box>
          </Box>
          <Box className="w-full h-4/5  overflow-auto  ">
            {memberList.map((el) => (
              <Box
                className={`flex justify-between m-1 ${
                  el.isActive ? "bg-[#F8991F]" : "bg-[#DEE8FF]"
                } border-2 rounded-xl p-2`}
              >
                <Box className="flex items-center w-56">
                  <Avatar alt="Profile Pic" src={el.image} className="mr-2" />
                  <p>{el.name}</p>
                </Box>
                <Box className="flex justify-around items-center">
                  <Button
                    variant="contained"
                    className={` w-20 h-8 mx-2 shadow-none border-spacing-1 rounded ${
                      el.isAdmin ? "bg-white" : "bg-[#CAD7F5] "
                    } text-black`}
                  >
                    {el.isAdmin ? "Admin" : "Member"}
                  </Button>
                  {/* <div className="w-8 h-8  align-middle bg-white"> */}
                  {el.isAdmin && (
                    <svg
                      className="bg-white w-8 h-8 p-1 rounded"
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
                  {/* </div> */}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item sm={12} className="h-3/6">
          <Box className="flex justify-between ">
            <h2 className="font-sans font-bold">Invitations</h2>
            <Box className="">
              {/* <Avatar alt="Profile Pic" src={ProfilePic} /> */}

              <Button
                variant="contained"
                className="bg-[#DBDBDB] w-32 h-8 shadow-none m-0 border-0 rounded-full"
              >
                sent(5)
              </Button>
              <Button
                variant="contained"
                className="bg-[#F8991F] w-32 h-8 shadow-none rounded-full"
              >
                Recived(15)
              </Button>
            </Box>
          </Box>
          <Box className="w-full h-44 overflow-auto  ">
            {memberList.map((el) => (
              <Box className={`flex justify-between m-1 bg-[#DEE8FF]  p-2`}>
                <Box className="flex items-center w-56">
                  <Avatar alt="Profile Pic" src={el.image} className="mr-2" />
                  <p>{el.name}</p>
                </Box>
                <Box className="flex justify-around items-center">
                  <IconButton
                    color="success"
                    aria-label="upload picture"
                    component="label"
                  >
                    {/* <input hidden accept="image/*" type="file" /> */}
                    <CheckBoxSharpIcon className="w-8 h-8" />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="upload picture"
                    component="label"
                  >
                    {/* <input hidden accept="image/*" type="file" /> */}
                    <DisabledByDefaultRoundedIcon className="w-8 h-8 text-orange-700" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
