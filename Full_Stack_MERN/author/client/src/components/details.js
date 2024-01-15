import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Details = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <Card style={{ width: 500, margin: 'auto' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Author Details
          </Typography>
          <Typography variant="h5" component="div">
            Name: {author.name}
          </Typography>
          <Typography variant="body2">
            Id: {author._id} 
            <br />
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={("/author")}>
          <Button size="small">Back Home</Button>
        </Link>
        </CardActions>
      </Card>
    );
}
export default Details;