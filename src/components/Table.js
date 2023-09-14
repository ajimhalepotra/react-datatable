import React, { useState } from "react";
import data from "../JSON DATA/data.json";
import {
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Table,
  Menu,
  MenuItem,
  
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import '../Layout/heading.css'
// import Navbar from "";
import { Link } from "react-router-dom";
import BasicPagination from "./Pagination";


function TableData() {
  const [person, setPerson] = useState(null);

  const open = Boolean(person);

  const handleClick = (e) => {
    setPerson(e.currentTarget);
  };

  const handleClose = (e) => {
    setPerson(null);
  };

  return (
    <>
    <div className="heading">
      <div className="title">
        <h1>Student</h1>
      </div>
      <div>
      <Link to="/add-table-data"  style={{textDecoration:"none", color:"white"}} ><button className="route-btn">Add</button></Link>
      </div>
    </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e) => (
              <TableRow key={e.id}>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.age}</TableCell>
                <TableCell>{e.mobile}</TableCell>
                <TableCell>
                  <MoreVertIcon
                    sx={{ cursor: "pointer" }}
                    onClick={handleClick}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        id="basic-menu"
        anchorEl={person}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}><DeleteIcon sx={{fontSize: "16px"}} />
        <span className="spanicon">Delete</span></MenuItem>
        <MenuItem onClick={handleClose}><BorderColorIcon sx={{fontSize: "16px"}}  /><span className="spanicon">Edit</span></MenuItem>
        <MenuItem onClick={handleClose}><RemoveRedEyeIcon sx={{fontSize: "16px"}}  /><span className="spanicon">View</span></MenuItem>
      </Menu>


      <BasicPagination />
    </>
  );
}

export default TableData;
