import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox, FormGroup, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Booking = ({ click, carName }) => {
  const { t } = useTranslation();
  const [pickUpDate, setPickUpDate] = React.useState();
  const [returnDate, setReturnDate] = React.useState();
  const [pickUpLocation, setPickUpLocation] = React.useState();
  const [returnLocation, setReturnLocation] = React.useState();
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [returnDateError, setReturnDateError] = React.useState();
  const [returnLocationError, setReturnLocationError] = React.useState();
  const [pickUpDateError, setPickUpDateError] = React.useState();
  const [pickUpLocationError, setPickUpLocationError] = React.useState();
  const [nameError, setNameError] = React.useState("");
  const [surnameError, setSurnameError] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  useEffect(() => emailjs.init(process.env.EMAILJS_PUBLIC_KEY), []);

  useEffect(() => {}, [pickUpDate, returnDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;

    !email ? setEmailError("please insert email") : setEmailError("");
    !pickUpDate
      ? setPickUpDateError("please insert pick-up date")
      : setPickUpDateError("");
    !returnDate
      ? setReturnDateError("please insert return date")
      : setReturnDateError("");
    !pickUpLocation
      ? setPickUpLocationError("please select pick up location")
      : setPickUpLocationError("");
    !returnLocation
      ? setReturnLocationError("please select return location")
      : setReturnLocationError("");
    !name ? setNameError("please insert name") : setNameError("");
    !surname ? setSurnameError("please insert surname") : setSurnameError("");
    !phoneNumber
      ? setPhoneNumberError("please insert Whatsapp Number")
      : setPhoneNumberError("");

    try {
      await emailjs.send(serviceId, templateId, {
        car: carName,
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        email: email,
        pickUpDate: pickUpDate,
        pickUpLocation: pickUpLocation,
        returnDate: returnDate,
        returnLocation: returnLocation,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.closeBtnContainer}`}>
          <div className={`${styles.closeBtn}`} onClick={click}>
            X
          </div>
        </div>

        <div className={`${styles.carName}`}>{carName}</div>

        <FormGroup>
          <div className={`${styles.pickupSection}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={t("pickUpDate")}
                onChange={(newValue) => {
                  setPickUpDate(newValue.$d.toString().slice(4, 15));
                }}
                sx={{ width: 170 }}
                required
                error={!!pickUpDateError}
                helperText={pickUpDateError}
              />
            </LocalizationProvider>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
                error={!!pickUpLocationError}
                helperText={pickUpLocationError}
              >
                <FormControlLabel
                  label={t("airport")}
                  control={<Radio />}
                  value="Airport"
                  onChange={() => setPickUpLocation("Airport")}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
                <FormControlLabel
                  value={t("hotel")}
                  onChange={() => setPickUpLocation("Hotel")}
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
                label={t("returnDate")}
                sx={{ width: 170 }}
                variant="standart"
                onChange={(newValue) => {
                  setReturnDate(newValue.$d.toString().slice(4, 15));
                }}
                required
              />
            </LocalizationProvider>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
              >
                <FormControlLabel
                  value="Airport"
                  onChange={() => setReturnLocation("Airport")}
                  control={<Radio />}
                  label={t("airport")}
                  sx={{
                    "& svg": {
                      width: "18px",
                      height: "18px",
                    },
                  }}
                />
                <FormControlLabel
                  value="Hotel"
                  onChange={() => setReturnLocation("Hotel")}
                  control={<Radio />}
                  label={t("hotel")}
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

          <div>{t("contactInfo")}</div>

          <div className={`${styles.dFlex}`}>
            <TextField
              id="standard-basic"
              label={t("name")}
              variant="standard"
              className={`${styles.mRight} ${styles.mWidth}`}
              value={name}
              onChange={(newValue) => {
                setName(newValue.target.value);
              }}
              required
              error={!!nameError}
              helperText={nameError}
            />
            <TextField
              id="standard-basic"
              label={t("surname")}
              variant="standard"
              className={`${styles.mWidth}`}
              value={surname}
              onChange={(newValue) => setSurname(newValue.target.value)}
              required
              error={!!surnameError}
              helperText={surnameError}
            />
          </div>

          <div className={`${styles.dFlex}`}>
            <TextField
              id="standard-basic"
              label={t("whatNumber")}
              variant="standard"
              className={`${styles.mRight} ${styles.mWidth}`}
              value={phoneNumber}
              onChange={(newValue) => setPhoneNumber(newValue.target.value)}
              required
              error={!!phoneNumberError}
              helperText={phoneNumberError}
            />
            <TextField
              id="standard-basic"
              label={t("email")}
              variant="standard"
              className={`${styles.mWidth}`}
              value={email}
              onChange={(value) => {
                console.log(email);
                setEmail(value.target.value);
              }}
              autoComplete="email"
              error={!!emailError}
              helperText={emailError}
              required
            />
          </div>
          <div className={`${styles.dFlex}`}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label={t("iAmOver")}
            />
          </div>
          <div className={`${styles.bookNow}`} onClick={handleSubmit}>
            {t("bookNow")}
          </div>
        </FormGroup>
      </div>
    </div>
  );
};

export default Booking;
