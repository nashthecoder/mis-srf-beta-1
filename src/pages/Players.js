import React, { useEffect, useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import PlayerCard from '../components/PlayerCard'
import Layout from '../components/Layout' 

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/players')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  return (
    <Layout>
      <Container>
        <Grid container spacing={4}>
          {players.map(player =>(
            <Grid item xs={12} sm={8} md={4}>
              <PlayerCard player={player} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  
  )
}
