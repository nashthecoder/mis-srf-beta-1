import React from "react";
import { Stack } from "@mui/material";
// import { styled } from "@mui/material/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { format } from "date-fns";
import { makeStyles, TextField } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import { FormControl } from "@material-ui/core";
import Box from "@material-ui/core/Box";
// import TabContext from "@material-ui/lab/TabContext"
// import TabPanel from "@material-ui/lab/TabPanel"
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
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
        marginLeft: 20,
    },
    textField: {
        paddingTop: 20,
    },
    checkbox: {
        marginLeft: "auto",
        marginRight: 0,
    },
    card: {
        marginLeft: 0,
        marginRight: "auto",
    },
    });

    // const label = { inputProps: {'aria-label': ''} };

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: "center",
    //     color: theme.palette.text.secondary,
    // }));

    export default function Counseling() {
    const classes = useStyles();
    // const history = useHistory()
    // const [value] = React.useState("1");
    // const[ date, setDate] = useState('')
    // const[ clinic, setClinic] = useState('')
    // const[ team, setTeam] = useState('')
    // const[ dateError, setDateError] = useState('false')
    // const[ clinicError, setClinicError] = useState('false')
    // const[ teamError, setTeamError] = useState('false')

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setDateError(false)
    //     setClinicError(false)
    //     setTeamError(false)

    //     if ( date === '') {
    //         setDateError(true)
    //     }
    //     if ( clinic === '') {
    //         setClinicError(true)
    //     }
    //     if ( team === '') {
    //         setTeamError(true)
    //     }
    //         console.log (
    //             date,
    //             clinic,
    //             team
    //             )
    // }
    return (
        <Layout>
        <Container size="sm">
            <Typography
            variant="h5"
            color="textPrimary"
            component="h2"
            gutterBottom
            >
            Counseling
            </Typography>
            <Box sx={{ width: "100%", typography: "body1" }}>
            <form
                noValidate
                autoComplete="off"
                // onSubmit={handleSubmit}
            >
                <Typography>{format(new Date(), "do MMMM Y")}</Typography>
                <br />
                <br />
                <Box sx={{ flexGrow: 1 }}>
                <Grid>
                    <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={8}
                    >
                    <Card className={classes.card}>
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
                            Gender: Male
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
                </Grid>
                </Box>
                <br />
                <br />
                <FormControl fullWidth>
                <InputLabel
                    variant="outlined"
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
                    name: "clinic",
                    id: "uncontrolled-native",
                    }}
                >
                    <option>Walk-in</option>
                    <option>Refered by coach</option>
                    <option>Counselor Intiated</option>
                    <option>Peer Intiated</option>
                    <option>Reffered after Home Visit</option>
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
                    Session Category
                </InputLabel>
                <NativeSelect
                    label="Category"
                    // onChange={(e) => setClinic(e.target.value)}
                    // error={clinicError}
                    inputProps={{
                    name: "clinic",
                    id: "uncontrolled-native",
                    }}
                >
                    <option>Individual</option>
                    <option>Group</option>
                    <option>Family</option>
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
                    Session Type
                </InputLabel>
                <NativeSelect
                    label="Session Type"
                    // onChange={(e) => setClinic(e.target.value)}
                    // error={clinicError}
                    inputProps={{
                    name: "clinic",
                    id: "uncontrolled-native",
                    }}
                >
                    <option>New issue</option>
                    <option>Follow up issue</option>
                </NativeSelect>
                </FormControl>
                <br />
                <br />
                <br />
                <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Counselling Issues Addressed"
                    multiline
                    rows={10}
                    defaultValue="Notes"
                />
                <br />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Client Attitude and Behaviour"
                    multiline
                    rows={10}
                    defaultValue="Observe general appearance of Client, dressing, emotions being projected, e.t.c"
                />
                <br />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Challenges"
                    multiline
                    rows={10}
                    defaultValue="Notes"
                />
                <br />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Next Steps and Treatment Plan"
                    multiline
                    rows={10}
                    defaultValue="Notes"
                />
                <br />
                <TextField
                    variant="outlined"
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Additional Comments"
                    multiline
                    rows={10}
                    defaultValue="Notes"
                />
                <br />
                <div className={classes.checkbox}>
                    <FormControlLabel control={<Checkbox />} label="Case Open" />
                    <FormControlLabel control={<Checkbox />} label="Case Closed" />
                    <FormControlLabel control={<Checkbox />} label="Terminated" />
                </div>
                <br />
                </FormControl>
                <Button
                className={classes.btn}
                type="submit"
                color="secondary"
                variant="contained"
                >
                Submit
                </Button>
                <Button
                className={classes.btn}
                type="submit"
                color="secondary"
                variant="contained"
                >
                View Record
                </Button>
            </form>
            </Box>
        </Container>
        </Layout>
    );
}
