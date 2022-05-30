import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles, TextField  } from '@material-ui/core/'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { FormControl } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Layout from '../components/Layout'


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
}
})
export default function Signup() {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState('1');
  const[ date, setDate] = useState('')
  const[ clinic, setClinic] = useState('')
  const[ team, setTeam] = useState('')
  const[ dateError, setDateError] = useState('false')
  const[ clinicError, setClinicError] = useState('false')
  const[ teamError, setTeamError] = useState('false')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setDateError(false)
    setClinicError(false)
    setTeamError(false)

    if ( date === '') {
      setDateError(true)
    }
    if ( clinic === '') {
      setClinicError(true)
    }
    if ( team === '') {
      setTeamError(true)
    }
      console.log (
        date,
        clinic,
        team
        )
    if (
      date &&
      clinic &&
      team) {
        fetch('http://localhost:8000/players', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ 
            date,
            clinic,
            team })
        }).then(() => history.push('/sessions'))
      }
  }
  return (
    <Layout>
      <Container size="sm">
      <Typography
          variant="h5" 
          color="textSecondary"
          component="h2"
          gutterBottom
      >
          Sessions
      </Typography>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'green' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="School" value="1" />
                <Tab label="Clinic" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {/* Session Date*/}
                <TextField
                  onChange={(e) => setDate(e.target.value)}
                className={classes.field} 
                label="Date"
                variant="outlined"
                fullWidth
                required
                error={dateError}
                />
                <FormControl fullWidth>
                  <InputLabel 
                  onChange={(e) => setClinic(e.target.value)}
                  variant="outlined" 
                  htmlFor="uncontrolled-native"
                  required
                >
                    Clinic
                  </InputLabel>
                  <NativeSelect
                    onChange={(e) => setClinic(e.target.value)}
                    error={clinicError}
                    inputProps={{
                      name: 'clinic',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option>Eastlands</option>
                    <option>Kangemi</option>
                    <option>Kibera</option>
                    <option>Korogocho</option>
                    <option>Mathare</option>
                    <option>Ngewe</option>
                    <option>Tatu City</option>
                  </NativeSelect>
                </FormControl>
                <br/>
                <br/>
                <br/>
                <FormControl fullWidth>
                  <InputLabel 
                  variant="outlined" 
                  htmlFor="uncontrolled-native"
                  required
                  >
                    School
                  </InputLabel>
                  <NativeSelect
                  onChange={(e) => setTeam(e.target.value)}
                  error={teamError}
                    inputProps={{
                      name: 'team',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option>Ayany Primary</option>
                    <option>Dr Kraph Primary</option>
                    <option>Heideimarie Primary</option>
                    <option>Harambee Primary</option>
                    <option>Ngewe Primary</option>
                    <option>Kongo Primary</option>
                    <option>Mathare North Primary</option>
                    <option>Ofafa Primary</option>
                    <option>Oakland Primary</option>
                    <option>Raila Primary</option>
                    <option>St Michaels Promary</option>
                    <option>Tatu Primary</option>
                    <option>Toi Primary</option>
                    <option>Uthiru Primary</option>
                  </NativeSelect>
                </FormControl>
                <br/>
                <br/>
                <br/>
                <Button
                    className={classes.btn}
                    type="submit" 
                    color="secondary" 
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Select
                </Button>
              </form>          
            </TabPanel>
            <TabPanel value="2">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                {/* Session Date*/}
                <TextField
                  onChange={(e) => setDate(e.target.value)}
                className={classes.field} 
                label="Date"
                variant="outlined"
                fullWidth
                required
                error={dateError}
                />
                <FormControl fullWidth>
                  <InputLabel 
                  onChange={(e) => setClinic(e.target.value)}
                  variant="outlined" 
                  htmlFor="uncontrolled-native"
                  required
                >
                    Clinic
                  </InputLabel>
                  <NativeSelect
                    onChange={(e) => setClinic(e.target.value)}
                    error={clinicError}
                    inputProps={{
                      name: 'clinic',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option>Eastlands</option>
                    <option>Kangemi</option>
                    <option>Kibera</option>
                    <option>Korogocho</option>
                    <option>Mathare</option>
                    <option>Ngewe</option>
                    <option>Tatu City</option>
                  </NativeSelect>
                </FormControl>
                <br/>
                <br/>
                <br/>
                <FormControl fullWidth>
                  <InputLabel 
                  variant="outlined" 
                  htmlFor="uncontrolled-native"
                  required
                  >
                    Team
                  </InputLabel>
                  <NativeSelect
                  onChange={(e) => setTeam(e.target.value)}
                  error={teamError}
                    inputProps={{
                      name: 'team',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option>Under 10s</option>
                    <option>Under 12s</option>
                    <option>Under 16s</option>
                    <option>Junior</option>
                    <option>Senior</option>
                  </NativeSelect>
                </FormControl>
                <br/>
                <br/>
                <br/>
                <Button
                    className={classes.btn}
                    type="submit" 
                    color="secondary" 
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Select
                </Button>
              </form>
            </TabPanel>
          </TabContext>
        </Box>
        <br/>
      </Container>
    </Layout>
  )
}
