import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "../helpers/global-constants";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "email is too short")
    .required("email can't be blank")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matches"),
  password: yup
    .string()
    .min(8, "password is too short")
    .required("password can't be blank"),
});

export function UserLogIn() {
  const history = useHistory();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        // console.log("onSubmit", values);
        checkCredentials(values);
      },
    });

  const checkCredentials = async (values) => {
    const response = await fetch(`${API_URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      history.push("/bikeList");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      
    <div className="signin-container">
    <div className="demo">
        <h3>Demo Credentials</h3>
        <h5>Email: johndoe@gmail.com</h5>
        <h5>Password: johndoe1</h5>
      </div>
      <Box
        sx={{
          width: 300,
          height: 220,
          backgroundColor: "primary",
        }}
      >
        <div className="signin-box" >
          <h2>User</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <TextField
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="email"
                type="email"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                variant="standard"
              />

              <TextField
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="password"
                type="password"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                variant="standard"
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </Box>
    </div>
    </>
  );
}
