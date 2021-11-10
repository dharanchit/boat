import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({data}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Posted On: {data['Dated']}
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h5" component="div">
          {data['Share Name']}
        </Typography>
        <Typography variant="body2" style={{display: 'flex', alignItems: 'center'}}>
          Current Price: {data['Current Price']}
        </Typography>
        </Box>
        <Typography variant="body2">
          Target Price: {data['Target Price']}
          <br />
        </Typography>
      </CardContent>
      {/* Add this functionality
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
