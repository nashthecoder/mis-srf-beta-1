import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { format } from 'date-fns'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles, TextField  } from '@material-ui/core/'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import { FormControl, FormLabel, FormControlLabel } from '@material-ui/core'
import { RadioGroup, Radio } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import Layout from '../components/Layout'
// import Box from '@mui/material/Box'

//STYLES
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
  names: {
    alignItems: "row"
  }
})


export default function Register() {
  const classes = useStyles()
  const history = useHistory()
  
  // SET
  const[ name, setName] = useState('')
  const[ dateOfBirth, setDateOfBirth] = useState('')
  const[ gender, setGender] = useState('female')
  const [caregiverName, setCaregiverName] = useState('')
  const[ phone1, setPhone1] = useState('')
  const[ relationship, setRelationship] = useState('')
  const[ clinic, setClinic] = useState('')
  const[ team, setTeam] = useState('')

  //ERROR
  const[ nameError, setNameError] = useState('false')
  const[ dateOfBirthError, setDateOfBirthError] = useState('false')
  const[ genderError, setGenderError] = useState('false')
  const[caregiverNameError, setCaregiverNameError] = useState('false')
  const[ phone1Error, setPhone1Error] = useState('false')
  const[ relationshipError, setRelationshipError] = useState('false')
  const[ clinicError, setClinicError] = useState('false')
  const[ teamError, setTeamError] = useState('false')

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setDateOfBirthError(false)
    setGenderError(false)
    setCaregiverNameError(false)
    setPhone1Error(false)
    setRelationshipError(false)
    setClinicError(false)
    setTeamError(false)

    if ( name === '') {
      setNameError(true)
    }
    if ( dateOfBirth === '') {
      setDateOfBirthError(true)
    }
    if ( gender === '') {
      setGenderError(true)
    }
    if ( caregiverName === '') {
      setCaregiverNameError(true)
    }
    if ( phone1 === '') {
      setPhone1Error(true)
    }
    if ( relationship === '') {
      setRelationshipError(true)
    }
    if ( clinic === '') {
      setClinicError(true)
    }
    if ( team === '') {
      setTeamError(true)
    }
      console.log (
        name, 
        dateOfBirth,
        gender,
        phone1,
        caregiverName,
        relationship,
        clinic,
        team
        )
    if (name &&
      dateOfBirth &&
      gender &&
      phone1 &&
      caregiverName &&
      relationship &&
      clinic &&
      team) {
        fetch('http://localhost:8000/players', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ 
            name, 
            dateOfBirth,
            gender,
            phone1,
            caregiverName,
            relationship,
            clinic,
            team })
        }).then(() => history.push('/'))
      }
  }
  return (
    <Layout>
      <Container size="sm">
        <Typography
          variant="h5" 
          color="textPrimary"
          component="h2"
          gutterBottom
        >
          Sign up a New Player
        </Typography>
        <br/>
        <Typography>
            {format(new Date(), 'do MMMM Y')}
        </Typography>
        <br/>
        <Divider />
        <br/>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          {/* Player Details */}
          <Typography
          variant="h5" 
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Player Bio
        </Typography>
          <div 
            className={classes.names}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              className={classes.field} 
              label="First Name"
              variant="outlined"
              required
              error={nameError}
            />
            <TextField
              onChange={(e) => setName(e.target.value)}
              className={classes.field} 
              label="Middle Name"
              variant="outlined"
              error={nameError}
            />
            <TextField
              onChange={(e) => setName(e.target.value)}
              className={classes.field} 
              label="Last Name"
              variant="outlined"
              required
              error={nameError}
            />
          </div>
          <TextField
            onChange={(e) => setDateOfBirth(e.target.value)}
          className={classes.field} 
          label="Date of Birth"
          variant="outlined"
          fullWidth
          required
          error={dateOfBirthError}
          />
          <FormControl fullWidth className={classes.field}>
            <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                onChange={(e) => setGender(e.target.value)}
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
                error={genderError}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
          </FormControl>
          {/* CareGiver Details */}
          <Typography
          variant="h6" 
          color="textSecondary"
          component="h2"
          gutterBottom
          >
          Care Giver Details
          </Typography>
          <TextField
            onChange={(e) => setCaregiverName(e.target.value)}
            className={classes.field} 
            label="Name"
            variant="outlined"
            fullWidth
            required
            error={caregiverNameError}
            />
          <TextField
            onChange={(e) => setPhone1(e.target.value)}
            className={classes.field} 
            label="Phone no:"
            variant="outlined"
            fullWidth
            required
            error={phone1Error}
            />
          <FormControl fullWidth>
            <InputLabel 
            variant="outlined" 
            htmlFor="uncontrolled-native"
            required
            >
              Relationship
            </InputLabel>
            <NativeSelect
            onChange={(e) => setRelationship(e.target.value)}
            error={relationshipError}
              inputProps={{
                name: 'relationship',
                id: 'uncontrolled-native',
              }}
            >
              onChange={(e) => setRelationship(e.target.value)}
              error={relationshipError}
              <option>Father</option>
              <option>Mother</option>
              <option>Guardian</option>
            </NativeSelect>
          </FormControl>
          <br/>
          <br/>
          <br/>
          {/* SRF Details */}
          <Typography
          variant="h6" 
          color="textSecondary"
          component="h2"
          gutterBottom
          >
          SRF Details
          </Typography>
          <br/>
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
              Register
          </Button>
        </form>
        <br/>
      </Container>
    </Layout>
  )
}
