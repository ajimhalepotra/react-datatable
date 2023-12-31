import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import "./AddTableData.css";
import "../Layout/heading.css";

const initialValues = {
  name: "",
  age: "",
  mobile: "",
  class: "",
  division: "",
  date: "",
  // male: "",
  // female: "",
  city: "",
  state: "",
  country: "",
};

const AddTableData = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string().min(2).max(20).required(),
      age: Yup.string().required(),
      mobile: Yup.string().min(10).max(12).required(),
      class: Yup.string().required(),
      division: Yup.string().required(),
      date: Yup.string().required(),
      // male: Yup.string().required(),
      // female: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
    }),

    onSubmit: (value, action) => {
      console.log("Add Student Data:", value);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="heading">
        <div className="title">
          <h1>Add New Student</h1>
        </div>
        <div>
          <Link to="/student-data" style={{ textDecoration: "none", color: "white" }}>
            <button className="route-btn">Back</button>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="main-input-container">
          <div className="main-input-chiled">
            <label className="input-label">Name</label>
            <br />
            <br />
            <input
              className="student-input"
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
              <i style={{ color: "red", fontWeight:"bold" }}>{errors.name}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">Age</label>
            <br />
            <br />
            <input
              className="student-input"
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
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.age}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">Mobile No.</label>
            <br />
            <br />
            <input
              className="student-input"
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
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.mobile}</i>
            ) : null}
            <br />
          </div>
        </div>

        <br />

        <div className="main-input-container">
          <div className="main-input-chiled">
            <label className="input-label">Class</label>
            <br />
            <br />
            <select
              className="student-input select-option"
              name="class"
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option>Select class</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <br />
            {errors.class && touched.class ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.class}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">Division</label>
            <br />
            <br />
            <select
              className="student-input select-option"
              name="division"
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option>Select division</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
            </select>
            <br />
            {errors.division && touched.division ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.division}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">Date</label>
            <br />
            <br />
            <input
              className="student-input"
              type="date"
              name="date"
              value={values.date}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br />
            {errors.date && touched.date ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.date}</i>
            ) : null}
            <br />
          </div>
        </div>

        <br />

        <div className="main-input-container">
          <div className="main-input-chiled">
            <label className="input-label">City</label>
            <br />
            <br />
            <input
              className="student-input"
              type="text"
              placeholder="Enter your city"
              name="city"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            {errors.city && touched.city ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.city}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">State</label>
            <br />
            <br />
            <input
              className="student-input"
              type="text"
              placeholder="Enter your state"
              name="state"
              value={values.state}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            {errors.state && touched.state ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.state}</i>
            ) : null}
            <br />
          </div>

          <br />

          <div className="main-input-chiled">
            <label className="input-label">Country</label>
            <br />
            <br />
            <input
              className="student-input"
              type="text"
              placeholder="Enter your country"
              name="country"
              value={values.country}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
            />
            <br />

            {errors.country && touched.country ? (
              <i style={{ color: "red", fontWeight:"bold"  }}>{errors.country}</i>
            ) : null}
            <br />
          </div>
        </div>

        

        {/* <div>
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
              onChange={handleChange}            />
            <label>Female</label>
            <br />
            {errors.male ? <i style={{color: "red"}} >{errors.male}</i> : null}
          </div>
        </div> */}

        <div className="main-btn-container">
          <div className="btn-data">
            <button
              type="reset"
              className="route-btn"
              onClick={() => alert("reset button clicked")}
            >
              Reset
            </button>
          </div>
          <div className="btn-data">
            <button className="route-btn" type="submit">
              Submit
            </button>
          </div>
          <div className="btn-data">
            <Link to="/student-data" style={{ textDecoration: "none", color: "skyblue" }}>
              <button
                className="route-btn"
                style={{
                  backgroundColor: "white",
                  border: "2px solid skyblue",
                  color: "skyblue",
                }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTableData;
