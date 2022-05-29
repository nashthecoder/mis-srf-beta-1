
import React from 'react'
import { Stack } from '@mui/material'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import Container from '@material-ui/core/Container'
import { format } from 'date-fns'
import { makeStyles, TextField  } from '@material-ui/core/'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { FormControl } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import TabContext from '@material-ui/lab/TabContext'
import TabPanel from '@material-ui/lab/TabPanel'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    Typography: {
        marginTop: 25,
    },
    btn: {
        backgroundColor:'#018934',
        '&:hover': {
            backgroundColor: '#db8a90'
        }
    },
    textField: {
        paddingTop: 20,
    },
})

export default function Counseling() {
    const classes = useStyles()
    // const history = useHistory()
    const [value] = React.useState('1');
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
                    gutterBottom>
                Counseling
                </Typography>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext 
                    value={value}
                    >
                        {/* <Box sx={{ borderBottom: 1, borderColor: 'green' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Session" value="1" />
                                {/* <Tab label="Follow up" value="2" /> */}
                            {/* </TabList> */}
                        {/* </Box> */} 
                        <TabPanel value="1">
                            <form noValidate autoComplete="off" 
                            // onSubmit={handleSubmit}
                            >
                        <Typography>
                            {format(new Date(), 'do MMMM Y')}
                        </Typography>
                        <br/>
                        <br/>
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
                                        image={require('../assets/manResized.png')}
                                    />
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="subtitle1">
                                            Name: James Juma
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Id: 120022A
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Gender: Male
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Age: 12
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            Clinic: Tatu City
                                        </Typography>
                                    </CardContent>
                                </Typography>
                            </Card>
                        </Stack>
                        <br/>
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
                                <option>Walk-in</option>
                                <option>Refered by coach</option>
                                <option>Counselor Intiated</option>
                                <option>Peer Intiated</option>
                                <option>Reffered after Home Visit</option>
                            </NativeSelect>
                        </FormControl>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <FormControl fullWidth>
                        <InputLabel 
                            variant='outlined'
                            htmlFor="uncontrolled-native"
                            required
                            >
                            Session Type
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
                                <option>New issue</option>
                                <option>Follow up issue</option>
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
                            label="Counselling Issues Addressed"
                            multiline
                            rows={10}
                            defaultValue="Notes"
                        />
                        <br/>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            label="Client Attitude and Behaviour"
                            multiline
                            rows={10}
                            defaultValue="Observe general appearance of Client, dressing, emotions being projected, e.t.c"
                        />
                        <br/>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            label="Challenges"
                            multiline
                            rows={10}
                            defaultValue="Notes"
                        />
                        <br/>
                        <TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            label="Next Steps and Treatment Plan"
                            multiline
                            rows={10}
                            defaultValue="Notes"
                        />
                        <br/><TextField
                            variant='outlined'
                            className={classes.textField}
                            id="outlined-multiline-static"
                            label="Additional Comments"
                            multiline
                            rows={10}
                            defaultValue="Notes"
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
                </TabPanel>
            </TabContext>
            </Box>
        </Container>
        </Layout>
    )
}