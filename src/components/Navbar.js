import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
      <NavLink
        to="/add-table-data"
        style={{
          textDecoration: "none",
          backgroundColor: "white",
          color: "blue",
          border: "1px solid blue",
          "&:hover":{
            backgroundColor:"blue",
            color:"white",
            border:"1px solid white"
          }
        }}
      >
        Add
      </NavLink>
      </button>
    </div>
  );
}

export default Navbar;
