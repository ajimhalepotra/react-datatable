import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
      <Link
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
      </Link>
      </button>
    </div>
  );
}

export default Navbar;
