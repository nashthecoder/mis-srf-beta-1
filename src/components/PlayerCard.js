import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@mui/material/Paper'
import { experimentalStyled as styled } from '@mui/material/styles'
import CardMedia from '@material-ui/core/CardMedia' 
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function PlayerCard({ player}) {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={6} md={10}>
          <Item>
              <CardMedia
                component="img"
                sx={{ width: 121 }}
                image={require('../assets/manResized.png')}
                alt="Profile Picture"
              />
              <CardContent>
                <Typography component="div" variant="subtitle1">
                  {player.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  ID: {player.id}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  CLINIC: {player.clinic}
                </Typography>
              </CardContent>
          </Item>
        </Grid>
    </Grid>
  </Box>
  )
}