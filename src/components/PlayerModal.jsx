import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

function PlayerModal({ open, onClose, player }) {
  if (!player) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle
        sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#A50034' }}
        >
        {player.name}
        </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" sx={{ mb: 1 }}>Strike Rate: <b>{player.strikeRate}</b></Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>Matches: <b>{player.matches}</b></Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>Jersey #: <b>{player.jersey}</b></Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>Best Performance: <b>{player.bestPerformance}</b></Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="error" sx={{ borderRadius: '8px' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PlayerModal;
