import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ConfirmBox from "./confirmBox";


const AuthorList = (props) =>{

    const[author, setAuthor] = useState([]);
    const[open, setOpen] = useState(false);
    const [deleteData, setDeleteData] = useState({});
    const [refreshState, setRefreshState] = useState(false);
    const refresh = () =>{
        setRefreshState(!refreshState)
    }
    useEffect(() =>{
        axios.get("http://localhost:8000/api/author/")
        .then(res => {
            console.log(res.data)
            setAuthor(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[refreshState]);

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/api/author/'+ deleteData?._id)
            .then(res => {
                refresh()
                setOpen(false);
            })
            .catch(err => console.log(err))
    }
    function openDelete(data) {
        setOpen(true);
        setDeleteData(data);
      }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child StyledTableCell, &:last-child th': {
          border: 0,
        },
      }));

return(
    <div>
        <h1>Favorite Authors</h1>
        <Link to={('/new')}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <TableContainer component={Paper} >
                <Table style={{ width: 700, margin: 'auto' }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Author Name</StyledTableCell>
                        <StyledTableCell align="center" >Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            author.map((author, index) => {
                            return(
                                <StyledTableRow key={index}>
                                    <StyledTableCell>{author.name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                    <Link to={("/author/details/"+author._id)}>
                                    <Button variant="contained" color="success" >View</Button>
                                    </Link>
                                    <Link to={("/author/"+author._id)}>
                                    <Button sx={{ml:1}} variant="contained" >Edit</Button>
                                    </Link>
                                    <Button sx={{ml:1}} variant="contained" color="error" onClick={()=>openDelete(author)}>Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>            
                            )
                        })
                        }
                </TableBody>
                </Table>
            </TableContainer>
            <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title={deleteData?.name}
        deleteFunction={deleteHandler}
      />
    </div>
)}

export default AuthorList;