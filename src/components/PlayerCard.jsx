import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

function PlayerCard({ player, onClick }) {
  return (
    <Card
    sx={{
        maxWidth: 280,
        borderRadius: '20px',
        boxShadow: 6,
        transition: '0.3s',
        backgroundColor: 'white',
        border: '2px solid #A50034',
        '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 10,
        borderColor: '#FFD700',
        },
    }}
    >
    <CardActionArea onClick={onClick}>
        <CardMedia
        component="img"
        height="250"
        image={player.image}
        alt={player.name}
        sx={{ objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold" color="#A50034">
            {player.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {player.role}
        </Typography>
        </CardContent>
    </CardActionArea>
    </Card>
  );
}

export default PlayerCard;
