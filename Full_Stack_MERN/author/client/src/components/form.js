import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Form = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const newAuthor={
            name
        }
        axios.post("http://localhost:8000/api/new", newAuthor)
        .then(res => {
            console.log(res.data);
            navigate('/author');
        })
        .catch(err => {
            console.log(err.response.data.errors.name.message);
            const errArr = [];
            errArr.push(err.response.data.errors.name.message);
            setErrors(errArr);
        })
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={("/author")}>Home</Link>
            <h3>Add a new author:</h3>
            {
                errors.map((err, index)=>{
                    return(
                        <p key={index} style={{color:"red"}} >{err}</p>
                    )
                })
            }
            <form onSubmit={submitHandler}>
                <TextField label="Name" variant='outlined' sx={{m:2}} onChange={(e)=>{setName(e.target.value)}}/><br/>
                <Stack justifyContent="center" direction="row" spacing={2}>
                <Link to={("/author")}>
                        <Button variant='contained' color='warning' >Cancel</Button>
                        </Link>
                <Button variant='contained' color='success' type="submit">Create</Button>
                </Stack>
            </form>
    </div>
  )
}

export default Form;