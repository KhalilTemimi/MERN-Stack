import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Update = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    // const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/'+ id)
            .then(res => {
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate("/author");
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={("/author")}>Home</Link>
            <h3>Edit this author:</h3>
            <form onSubmit={updateHandler}>
                <TextField sx={{m:2}} label="Name" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/>
                <Stack justifyContent="center" direction="row" spacing={2}>
                <Link to={("/author")}>
                        <Button variant='contained' color='warning' >Cancel</Button>
                        </Link>
                <Button variant='contained' color='success' type="submit">Update</Button>
                </Stack>
            </form>
    </div>
  )
}

export default Update;