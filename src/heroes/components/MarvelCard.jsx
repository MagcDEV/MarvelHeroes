import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const MarvelCard = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 250 , objectFit: "contain" }}
        image={character.thumbnail.path + "." + character.thumbnail.extension}
        title="character thumbnail"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/character/${ character.id }`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
