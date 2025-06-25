import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import PlayerCard from './components/PlayerCard';
import PlayerModal from './components/PlayerModal';
import { useState } from 'react';
import players from './data/players';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
   <Container
  maxWidth={false}
  disableGutters
  sx={{ py: 5, backgroundColor: '#1a000d',color:'#ffffff', minHeight: '100vh' }}
>
        <Paper
    elevation={4}
    sx={{
      p: 4,
      textAlign: 'center',
      mb: 5,
      borderRadius: '16px',
      backgroundColor: '#A50034',
      color: 'white',
    }}
  >
    <img src="/rcb_logo.jpg" alt="RCB Logo" style={{ width: 140, marginBottom: 16 }} />
    <Typography variant="h3" gutterBottom fontWeight="bold" color="#FFD700">
      Royal Challengers Bangalore 2025 🏆
    </Typography>
    <Typography variant="h5" color="#fff">#EeSalaCupNamde</Typography>
  </Paper>

      <Grid container spacing={4}>
        {players.map((player, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <PlayerCard player={player} onClick={() => setSelectedPlayer(player)} />
          </Grid>
        ))}
      </Grid>

      <PlayerModal open={!!selectedPlayer} player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </Container>
  );
}

export default App;
