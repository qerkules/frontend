import React from "react";
import styles from "./styles.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const Booking = ({ click }) => {
  const [value, setValue] = React.useState();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.closeBtnContainer}`}>
          <div className={`${styles.closeBtn}`} onClick={click}>
            X
          </div>
        </div>

        <div className={`${styles.carName}`}>Toyota Camry 2020</div>

        <div className={`${styles.pickupSection}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick up Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{ width: 170 }}
            />
          </LocalizationProvider>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Airport"
                control={<Radio />}
                label="Airport"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />
              <FormControlLabel
                value="Hotel"
                control={<Radio />}
                label="Hotel"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className={`${styles.pickupSection}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick up Date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              sx={{ width: 170 }}
              variant="standart"
            />
          </LocalizationProvider>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Airport"
                control={<Radio />}
                label="Airport"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />
              <FormControlLabel
                value="Hotel"
                control={<Radio />}
                label="Hotel"
                sx={{
                  "& svg": {
                    width: "18px",
                    height: "18px",
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>Contact Information</div>

        <div className={`${styles.dFlex}`}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            className={`${styles.mRight} ${styles.mWidth}`}
          />
          <TextField
            id="standard-basic"
            label="Surname"
            variant="standard"
            className={`${styles.mWidth}`}
          />
        </div>

        <div className={`${styles.dFlex}`}>
          <TextField
            id="standard-basic"
            label="Whatsapp Number"
            variant="standard"
            className={`${styles.mRight} ${styles.mWidth}`}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className={`${styles.mWidth}`}
          />
        </div>

        <div className={`${styles.dFlex}`}>
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            className={`${styles.ageSelect}`}
          />
        </div>

        <div className={`${styles.bookNow}`}>Book Now</div>
      </div>
    </div>
  );
};

export default Booking;
