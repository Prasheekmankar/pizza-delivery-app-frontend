import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "./global-constants";
import { useHistory } from "react-router-dom";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a bigger email😒")
    .required("why not fill this email😊")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matches"),
  password: yup
    .string()
    .min(8, "Need a longer password😒")
    .max(12, "too much password😂")
    .required("why not fill this password😊"),
});

export function SignUp() {
  const history = useHistory();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      // validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        // values=[values]
        console.log("onSubmit", values);
        createUser(values);
      },
    });

  const createUser = async (values) => {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(values);
    const json = await response.json();
    console.log(json);
    if (json.success) {
      history.push("/success");
    }
  };
  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && touched.email && errors.email}
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="create password"
        />
        {errors.password && touched.password ? errors.password : ""}
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

// const createUser =async (values) => {
//   const response = await fetch(`${API_URL}/user/register`, {
//     method: "POST",
//     body: JSON.stringify({email:values.email,password:values.password}),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(() => history.push("/UserLogIn"))
//   // console.log(values);
//   const json = await response.json();
//   console.log(json);

// };

// const createUser =async (values) => {
//   fetch(`${API_URL}/user/register`, {
//    method: "POST",
//    body: JSON.stringify({email:values.email,password:values.password}),
//    headers: {
//      "Content-Type": "application/json",
//    },
//  }).then(() => history.push("/success"))

// };
