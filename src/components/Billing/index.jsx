import React from "react";
import {
  Grid,
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
} from "@mui/material";
import InputField from "../shared/FormFileld/InputField";

import Label from "../shared/FormFileld/Label";
function BillingSection(props) {
  return (
    <>
      <Box className="w-full">
        <div className="font-sans font-bold leading-none">Billing Address</div>
        <FormGroup className="font-sans font-normal tracking-normal text-xs leading-none">
          <FormControlLabel
            className=""
            control={<Checkbox defaultChecked className="text-[#F8991F] " />}
            label="Same as Home Address"
          />
        </FormGroup>
      </Box>
      <Grid item sm={6}>
        <Box className="w-full p-2">
          <div>
            <Label
              label="First Name"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="firstName" className={""} />
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box className="p-2">
          <div>
            <Label
              label="Last Name"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="lastName" className={""} />
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box className="w-full p-2">
          <div>
            <Label
              label="Address Line 1"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="firstName" className={""} />
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box className="p-2">
          <div>
            <Label
              label="Address Line 2"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="firstName" className={""} />
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box className="p-2">
          <div>
            <Label
              label="Country"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <div>US</div>
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box className="p-2">
          <div>
            <Label
              label="State/Province/Region"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label=""
            className="w-full h-7 rounded-sm bg-white"
          ></Select>
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box className="p-2">
          <div>
            <Label
              label="City"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="city" className={""} />
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Box className="p-2">
          <div>
            <Label
              label="Zip Code"
              className="font-sans font-semibold tracking-normal text-xs leading-none"
            />
          </div>
          <InputField name="zipcode" className={""} />
        </Box>
      </Grid>
      <Grid container item sm={12} justifyContent="flex-end">
        <Button
          variant="contained"
          className="bg-[#232E3E] w-28 h-8 shadow-none font-sans font-normal tracking-normal capitalize text-xs leading-none mr-2"
        >
          Edit Details
        </Button>
      </Grid>
    </>
  );
}

export default BillingSection;
