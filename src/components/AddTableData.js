import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import "./AddTableData.css";
import '../Layout/heading.css'

const initialValues = {
  name: "",
  age: "",
  mobile: "",
  class: "",
  division: "",
  date: "",
  // male: "",
  // female: "",
};

const AddTableData = () => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues,

      validationSchema: Yup.object({
        name: Yup.string().min(2).max(20).required("Plese enter your name..."),
        age: Yup.string().required("Plese enter your age..."),
        mobile: Yup.string().required("Plese enter your mobile no..."),
        class: Yup.string().required("Plese select class..."),
        division: Yup.string().required("Plese select division..."),
        date: Yup.string().required("Plese select date..."),
        // male: Yup.string().required(),
        // female: Yup.string().required(),
      }),

      onSubmit: (values) => {
        console.log("Add Student Data:", values);
        // action.resetForm();
      },
    });

    

  return (
    <>

    <div className="heading">
      <div className="title">
      <h1>Add New Student</h1>
      </div>
      <div>
      <Link to="/" style={{textDecoration:"none", color:"white"}}><button className="route-btn">Back</button></Link>
      </div>
    </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div>
            <label>Name</label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            {errors.name && touched.name ? (
              <i style={{ color: "red" }}>{errors.name}</i>
            ) : null}
          </div>

          <br />

          <div>
            <label>Age</label>
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter your age"
              name="age"
              value={values.age}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            {errors.age && touched.age ? (
              <i style={{ color: "red" }}>{errors.age}</i>
            ) : null}
          </div>

          <br />

          <div>
            <label>Mobile No.</label>
            <br />
            <br />
            <input
              type="number"
              placeholder="Enter your mobile no"
              name="mobile"
              value={values.mobile}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            {errors.mobile && touched.mobile ? (
              <i style={{ color: "red" }}>{errors.mobile}</i>
            ) : null}
          </div>

        </div>

              <br />

        <div style={{display: "flex"}}>

          <div>
            <label>Class</label>
            <br /><br />
            <select
            name="class"
            onBlur={handleBlur}
            onChange={handleChange}
            >
              <option>select Class</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <br />
            {errors.class && touched.class ? <i style={{color:"red"}} >{errors.class}</i> : null}
          </div>

          <br />

          <div>
            <label>Division</label>
            <br /><br />
            <select
            name="division"
            onBlur={handleBlur}
            onChange={handleChange}
            >
              <option>select Division</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
            <br />
            {errors.division && touched.division ? <i style={{color:"red"}} >{errors.division}</i> : null}
          </div>

          <br />

          <div>
            <label>Date</label>
            <br /><br />
            <input 
            type="date" 
            name="date"
            value={values.date}
            onBlur={handleBlur}
            onChange={handleChange}
            />
            <br />
            {errors.date && touched.date ? <i style={{color:"red"}}>{errors.date}</i> : null}
          </div>
        </div>

        <br />

        <div>
          <div>
            <label>Gander</label>
            <br />
            <input 
            type="radio"
            name="male"
            value={values.male}
            onBlur={handleBlur}
            onChange={handleChange}
            />
            <label>Male</label>

            <input 
            type="radio"
            name="male"
            value={values.female}
            onBlur={handleBlur}
            onChange={handleChange}
            />
            <label>Female</label>
            <br />
            {/* {errors.male ? <i style={{color: "red"}} >{errors.male}</i> : null} */}
          </div>
        </div>

        <br />

        <div style={{display:"flex"}} >
          <div>
            <button onClick={() => resetForm()}>Reset</button>
          </div>
          <div>
            <button  type="submit" >Submit</button>
          </div>
          <div>
            <button><Link to="/" style={{textDecoration: "none", color:"black" }} >Cancel</Link></button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTableData;

