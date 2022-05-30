import * as React from "react";
import Layout from "../components/Layout";
import { format } from "date-fns";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import { makeStyles, TextField } from "@material-ui/core/";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 10,
    display: "block",
  },
  Typography: {
    marginTop: 25,
  },
  btn: {
    backgroundColor: "#018934",
    "&:hover": {
      backgroundColor: "#db8a90",
    },
    margin: 15,
    
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Container size="sm">
        <Typography
          variant="h5"
          color="textPrimary"
          component="h2"
          gutterBottom
        >
          Visits
        </Typography>
        <br />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Register player" {...a11yProps(0)} />
            <Tab label="Class 8 Visit" {...a11yProps(1)} />
            <Tab label="Case Management" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <br />
        <Typography>{format(new Date(), "do MMMM Y")}</Typography>
        <br />
        <TabPanel value={value} index={0}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <Card>
            <Typography>
              <CardMedia
                component="img"
                image={require("../assets/manResized.png")}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle1">
                  Name: James Juma
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Id: 120022A
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Age: 12
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Clinic: Tatu City
                </Typography>
              </CardContent>
            </Typography>
          </Card>
        </Stack>
        <br />
        <form
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >

          <Divider />
          <br />
          {/* Household Details */}
          <Typography
            variant="h5"
            color="textPrimary"
            component="h2"
            gutterBottom
          >
            Household demography
          </Typography>
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              What is the relationship of the care giver to the beneficiary?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              What is the marital status of the caregiver?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Single</option>
              <option>Married</option>
              <option>Separated</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              Deceased relationship of the deceased to the family
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </NativeSelect>
            <br />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Year of Death"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
            <TextField
              variant="outlined"
              className={classes.textField}
              id="outlined-multiline-static"
              label="Main cause of death"
              multiline
              rows={2}
            />
            <br />
            <FormLabel id="radio-buttons-group-label">
              Documentation of Death
            </FormLabel>
            <RadioGroup
              // onChange={(e) => setGender(e.target.value)}
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              // error={genderError}
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
            <br />
            <TextField
              variant="outlined"
              className={classes.textField}
              id="outlined-multiline-static"
              label="If No, explain why"
              multiline
              rows={1}
            />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel
                variant="outlined"
                htmlFor="uncontrolled-native"
                required
              >
                Other marital status - select one
              </InputLabel>
              <br />
              <NativeSelect
                // onChange={(e) => setRelationship(e.target.value)}
                // error={relationshipError}
                inputProps={{
                  name: "status",
                  id: "uncontrolled-native",
                }}
              >
                {/* onChange={(e) => setRelationship(e.target.value)}
                  error={relationshipError} */}
                <option>Separation</option>
                <option>Divorce</option>
              </NativeSelect>
            </FormControl>
            <br />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Year of separation"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Cause of separation"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={2}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Decribe the house hold and total number of members residing in the household"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
          </FormControl>
          <Divider />
          <br />
          <FormControl fullWidth>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Household and Commmunity Relations
            </Typography>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="County of Residence"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Area of Residence"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Number of years living at current residence"
              variant="outlined"
              fullWidth
              required
              // error={dateOfBirthError}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              Type and condition of family home <br /> no. of rooms 
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "household",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Temporary</option>
              <option>Permanent</option>
              <option>Semi-permanent</option>
            </NativeSelect>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "household",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Single room</option>
              <option>Double room</option>
              <option>One bedroom and above</option>
            </NativeSelect>
            <br />
            <br />
            <FormGroup>
              <label for="exampleFormControlTextarea14">
                Does this family possess the following  or {" "} access the the following services <br />
                Check all that apply
              </label>
              <br />
              <FormControlLabel control={<Checkbox />} label="Bed & Mattress" />
              <FormControlLabel control={<Checkbox />} label="Beddings" />
              <FormControlLabel control={<Checkbox />} label="Furniture" />
              <FormControlLabel control={<Checkbox />} label="Electricity" />
              <FormControlLabel control={<Checkbox />} label="Solar Lamps" />
              <FormControlLabel control={<Checkbox />} label="Television" />
              <FormControlLabel control={<Checkbox />} label="Radio" />
              <FormControlLabel control={<Checkbox />} label="Stove" />
              <FormControlLabel control={<Checkbox />} label="Gas Cooker" />
              <FormControlLabel control={<Checkbox />} label="Fridge" />
            </FormGroup>
            <br/>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Where do the children sleep please explain in details?"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              // error={dateOfBirthError}
            />
          </FormControl>
          <br/>
          <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            How do you access water
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Tapped</option>
              <option>Well/Dam/Borehole</option>
              <option>Rainwater</option>
              <option>River</option>
            </NativeSelect>
          </FormControl>
          <br/>
          <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            Does have access to any of these?
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>In house toilet</option>
              <option>Communal toilet</option>
              <option>External paid toilet</option>
            </NativeSelect>
          </FormControl>
          <br/>
          <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            What is the condition of the environment around the house.
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Well maintained</option>
              <option>Presence of garbage</option>
              <option>Presence of open sewage and drains</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <br />
          <Divider />
          <br />
          <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Family Earners & Financial Expenditure
            </Typography>
          <FormControl fullWidth>
            <label for="exampleFormControlTextarea14">
            How much does the family spend on the following needs<br />{" "}
                  Amount in Ksh
            </label>
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Daily Food"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Rent"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Electricity"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Water"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Toilet"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Medical Treatment"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <br/>
            <label for="exampleFormControlTextarea14">
            List of contributors responsible of providing for the family needs
            </label>
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Role in the family"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Type of Work"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <div>
            <label for="exampleFormControlTextarea14">
              Nature of Employment
            </label>
            <br />
              <FormControlLabel control={<Checkbox />} label="Casual" />
              <FormControlLabel control={<Checkbox />} label="Salaried" />
              <FormControlLabel control={<Checkbox />} label="Contracted" />
              <FormControlLabel control={<Checkbox />} label="Self employed" />
          </div>
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Income per day/week/month"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          </FormControl>
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            + Add Contributor
          </Button>
          <br/>
          <br />
          <FormControl fullWidth>
            <TextField
                // onChange={(e) => setDateOfBirth(e.target.value)}
                className={classes.field}
                label="Note any other additional skills of the family earners"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                // error={dateOfBirthError}
              />
            </FormControl>
            <FormGroup>
              <label for="exampleFormControlTextarea14">
                When the family is in need, where do they go for help <br />{" "}
                Check all that apply
              </label>
              <br />
              <FormControlLabel control={<Checkbox />} label="Family Members" />
              <FormControlLabel control={<Checkbox />} label="Mosque/Church" />
              <FormControlLabel control={<Checkbox />} label="Sacco" />
              <FormControlLabel control={<Checkbox />} label="Chamas" />
              <FormControlLabel control={<Checkbox />} label="Bank" />
              <FormControlLabel control={<Checkbox />} label="Chiefs Camp" />
              <FormControlLabel control={<Checkbox />} label="None" />
          </FormGroup>
          <br />
          <Divider />
          <br />
          <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Physical Health
          </Typography>
          <FormControl fullWidth>
          <br/>
            <label for="exampleFormControlTextarea14">
            List the family members with medical conditions including allergies and disabilities
            </label>
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Name of the family member"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Relationship to the household"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Medical Concerns"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Treatment Status"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          </FormControl>
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            + Add Family Member
          </Button>
          <br/>
          <br/>
          <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            Does the family have a medical cover? (NHIF) If No kindly advise on the importance of it
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
            <br/>
            <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="NHIF No."
            variant="outlined"
            fullWidth
            // error={nameError}
          />
          </FormControl>
          <br />
          <br />
          <br />
          <Divider />
          <br />
          <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Child Safety within the Family setup
          </Typography>
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            Do you or anyone in your household use alcohol or abuse any drug substance?
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If YES, Which member of the family abuses these substance?"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Which substance/s do they commonly use?"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="For how long have he/she been using the substance/s?"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              // error={dateOfBirthError}
            />
            <FormGroup>
              <label for="exampleFormControlTextarea14">
              As a concerned parent which actions do you take concerning the above behavior/reactions/traits?
              </label>
              <br />
              <FormControlLabel control={<Checkbox />} label="I keep silent and assume nothing happens" />
              <FormControlLabel control={<Checkbox />} label=" I react and fight back most of the time (quarrel)" />
              <FormControlLabel control={<Checkbox />} label="I report him/her to the police" />
              <FormControlLabel control={<Checkbox />} label=" I report him/her to the church/ village leaders" />
            </FormGroup>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="In general how is the family relationship?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          </FormControl>
          <br />
          <Divider />
          <br />
          <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Child Safety within the Community
            </Typography>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="List some of the behaviors/concerns that you have observed in your community that would affect the well-being /welfare of your child/children?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <FormGroup>
              <label for="exampleFormControlTextarea14">
                What type/form of child abuse is most common within your community?<br />{" "}
                Check all that apply
              </label>
              <br />
              <FormControlLabel control={<Checkbox />} label="Physical" />
              <FormControlLabel control={<Checkbox />} label="Sexual" />
              <FormControlLabel control={<Checkbox />} label="Emotional" />
              <FormControlLabel control={<Checkbox />} label="Negiligence" />
              <FormControlLabel control={<Checkbox />} label="Others" />
            </FormGroup>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If reponse to the question above is others - Please define."
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <br/>
            <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            Does any of your child/family members have a history of any of the above child abuse cases?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Who in your family members was affected?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Relationship to the household"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Give a history on the case; (type of abuse/when it happened/who was involved/ was the concerned person assisted?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="How can SRF assist in this matter?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <Divider />
          <br />
          <Typography
            variant="h5"
            color="textPrimary"
            component="h2"
            gutterBottom
          >
            Beneficiaries who are SRF members
          </Typography>
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="Name"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          <TextField
            // onChange={(e) => setDateOfBirth(e.target.value)}
            className={classes.field}
            label="Date of Birth"
            variant="outlined"
            fullWidth
            required
            // error={dateOfBirthError}
          />
          <TextField
            // onChange={(e) => setDateOfBirth(e.target.value)}
            className={classes.field}
            label="School"
            variant="outlined"
            fullWidth
            required
            // error={dateOfBirthError}
          />
          <TextField
            // onChange={(e) => setDateOfBirth(e.target.value)}
            className={classes.field}
            label="Class"
            variant="outlined"
            fullWidth
            required
            // error={dateOfBirthError}
          />
          <TextField
            // onChange={(e) => setDateOfBirth(e.target.value)}
            className={classes.field}
            label="Year of Entry to SRF"
            variant="outlined"
            fullWidth
            required
            // error={dateOfBirthError}
          />
          <FormControl fullWidth className={classes.field}>
            <FormLabel id="radio-buttons-group-label">
              Membership Status
            </FormLabel>
            <RadioGroup
              // onChange={(e) => setGender(e.target.value)}
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              // error={genderError}
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
            <br />
            <Button
              className={classes.btn}
              type="submit"
              color="secondary"
              variant="contained"
              // endIcon={<KeyboardArrowRightIcon />}
            >
              Add Beneficiary
            </Button>
          </FormControl>
          <Divider />
          <br/>
          <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Care Giver Consent
            </Typography>
            <br/>
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              As the concerned caregiver, do you prefer your child/children being involved in SRF programs?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If YES, kindly give us your consent to continue working with your child/children"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If NO, kindly give us a reason why."
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setName(e.target.value)}
              className={classes.field}
              label="Caregiver's Name"
              variant="outlined"
              fullWidth
              required
              // error={nameError}
            />
            <TextField
              // onChange={(e) => setName(e.target.value)}
              className={classes.field}
              label="Date"
              variant="outlined"
              fullWidth
              required
              // error={nameError}
            />
          </FormControl>
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            Caregiver's Signature
          </Button>
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            Archive
          </Button>
          <br />
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Which other organizations are your children involved with?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Any other additional comment on SRF program/s?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <Divider />
          <br />
          <FormControl fullWidth>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Social Worker Summary
            </Typography>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Brief summary on the family including any other additional observations"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Observations on the family burden of care including various needs/conditions"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <FormControl fullWidth>
            <TextField
                // onChange={(e) => setDateOfBirth(e.target.value)}
                className={classes.field}
                label="Note any other additional skills of the family earners"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                // error={dateOfBirthError}
              />
            </FormControl>
            <div>
              <label for="exampleFormControlTextarea14">
              Scale the family and to give the necessary recommendations: 
              </label>
              <br/>
              <FormControlLabel control={<Checkbox />} label="Least Vulnerable" />
              <FormControlLabel control={<Checkbox />} label="Vulnerable" />
              <FormControlLabel control={<Checkbox />} label="Highly Vulnerable" />
          </div>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="Give the necessary recommendations"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          </FormControl>
          <br />
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
        <br />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <Card>
            <Typography>
              <CardMedia
                component="img"
                image={require("../assets/manResized.png")}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle1">
                  Name: Timothy Juma
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Id: 120022A
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Age: 15
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Clinic: Tatu City
                </Typography>
              </CardContent>
            </Typography>
          </Card>
        </Stack>
        <br />
        <form
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              Respondent
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              How many dependents are in Class 8?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>0</option>
              <option>1</option>
              <option>3</option>
              <option>4</option>
            </NativeSelect>
          </FormControl>
          <br />
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              What is the current academic performance of the class 8 dependents?
            </InputLabel>
            <br />
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "relationship",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>High (above 350)</option>
              <option>Average (250 - 300)</option>
              <option>Below Average ( 250 & below)</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth>  
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="What do you expect your child/children to score in the final exam and why?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <FormControl fullWidth>
          <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              Do you expect your child/children to join High School
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
          </FormControl>
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If YES, how well have you prepared for your child/children secondary school?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If NO why?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <TextField
            // onChange={(e) => setName(e.target.value)}
            className={classes.field}
            label="How many of your children are SRF beneficiaries?"
            variant="outlined"
            fullWidth
            required
            // error={nameError}
          />
          </FormControl>
          <br/>
          <br/>
          <FormControl fullWidth>
          <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
              Are all of them still active members?
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
          </FormControl>
          <br />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If NO, do you know the reason that has made them to be inactive?"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          <br />
          <FormControl fullWidth>
            <InputLabel
              variant="outlined"
              htmlFor="uncontrolled-native"
              required
            >
            Has SRF made any impact on your child/ren since they joined the program?
            </InputLabel>
            <br />
            <NativeSelect
              // onChange={(e) => setRelationship(e.target.value)}
              // error={relationshipError}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              {/* onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError} */}
              <option>No</option>
              <option>Yes</option>
            </NativeSelect>
            <br/>
            <br/>
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="If YES what is some of the impact"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
            <TextField
              // onChange={(e) => setDateOfBirth(e.target.value)}
              className={classes.field}
              label="What recommendations can you give to SRF for their programs?"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={6}
              // error={dateOfBirthError}
            />
          </FormControl>
          <br />
          <Button
            className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            // endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
        <br />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={8}
        >
          <Card>
            <Typography>
              <CardMedia
                component="img"
                image={require("../assets/manResized.png")}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle1">
                  Name: James Juma
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Id: 120022A
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Age: 12
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Clinic: Tatu City
                </Typography>
              </CardContent>
            </Typography>
          </Card>
        </Stack>
        <br />
        <form
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
                                  <br/>
                        <FormControl fullWidth>
                        <InputLabel 
                            variant='outlined'
                            htmlFor="uncontrolled-native"
                            required
                            >
                            Client Type
                        </InputLabel>
                            <NativeSelect
                                label="Clinic"
                                // onChange={(e) => setClinic(e.target.value)}
                                // error={clinicError}
                                inputProps={{
                                name: 'clinic',
                                id: 'uncontrolled-native',
                                }}
                            >
                                <option>Community champion</option>
                                <option>Refered by coach</option>
                                <option>Counselor Intiated</option>
                                <option>Peer Intiated</option>
                                <option>Reffered after Home Visit</option>
                            </NativeSelect>
                        </FormControl>
                    <br/>
                    <br/>
                    <br/>
                    <FormControl fullWidth>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={10}
                            defaultValue="Case management issues addressed"
                        />
                        <br/>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={10}
                            defaultValue="Challenges"
                        />
                        <br/>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={10}
                            defaultValue="Next Steps"
                        />
                        <br/><TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={10}
                            defaultValue="Additional Comments"
                        />
                        <br/>
                    </FormControl>
                <Button
                    className={classes.btn}
                    type="submit" 
                    color="secondary" 
                    variant="contained">
                    Submit
                </Button>
        </form>
        <br />
        </TabPanel>
      </Container>
    </Layout>
  );
}
