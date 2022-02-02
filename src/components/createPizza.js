// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import FormLabel from "@mui/material/FormLabel";
// export function CustomPizza() {
//   const StyledFormControlLabel = styled((props) => (
//     <FormControlLabel {...props} />
//   ))(({ theme, checked }) => ({
//     ".MuiFormControlLabel-label": checked && {
//       color: theme.palette.primary.main,
//     },
//   }));

//   function MyFormControlLabel(props) {
//     const radioGroup = useRadioGroup();

//     let checked = false;

//     if (radioGroup) {
//       checked = radioGroup.value === props.value;
//     }

//     return <StyledFormControlLabel checked={checked} {...props} />;
//   }

//   MyFormControlLabel.propTypes = {
//     value: PropTypes.any,
//   };
//   return (
//     <div className="container">
//       <div>
//         <FormLabel component="legend">Pizza Base</FormLabel>
//         <RadioGroup name="use-radio-group" defaultValue="first">
//           <MyFormControlLabel
//             value="Stuffed Crust"
//             label="Stuffed Crust"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Cracker Crust"
//             label="Cracker Crust"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Thin Crust"
//             label="Thin Crust"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Cheese Crust Pizza"
//             label="Cheese Crust Pizza"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Thick Crust Pizza"
//             label="Thick Crust Pizza"
//             control={<Radio />}
//           />
//         </RadioGroup>
//       </div>
//       <div>
//         <FormLabel component="legend">Sauce</FormLabel>
//         <RadioGroup name="use-radio-group" defaultValue="first">
//           <MyFormControlLabel value="Pesto" label="Pesto" control={<Radio />} />
//           <MyFormControlLabel
//             value="White Garlic"
//             label="White Garlic"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Hummus"
//             label="Hummus"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Buffalo"
//             label="Buffalo"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Marinara"
//             label="Marinara"
//             control={<Radio />}
//           />
//         </RadioGroup>
//       </div>
//       <div>
//         <FormLabel component="legend">Cheese</FormLabel>
//         <RadioGroup name="use-radio-group" defaultValue="first">
//           <MyFormControlLabel
//             value="Mozzarella"
//             label="Mozzarella"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Parmesan"
//             label="Parmesan"
//             control={<Radio />}
//           />
//           <MyFormControlLabel value="Goat" label="Goat" control={<Radio />} />
//           <MyFormControlLabel
//             value="Ricotta "
//             label="Ricotta "
//             control={<Radio />}
//           />
//         </RadioGroup>
//       </div>
//       <div>
//         <FormLabel component="legend">Veggies</FormLabel>
//         <RadioGroup name="use-radio-group" defaultValue="first">
//           <MyFormControlLabel
//             value="mushroom"
//             label="mushroom"
//             control={<Radio />}
//           />
//           <MyFormControlLabel value="onion" label="onion" control={<Radio />} />
//           <MyFormControlLabel
//             value="green pepper"
//             label="green pepper"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="tomatoes"
//             label="tomatoes"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="broccoli"
//             label="broccoli"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="eggplant"
//             label="eggplant"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="zucchini"
//             label="zucchini"
//             control={<Radio />}
//           />
//         </RadioGroup>
//       </div>
//       <div>
//         <FormLabel component="legend">Meat</FormLabel>
//         <RadioGroup name="use-radio-group" defaultValue="first">
//           <MyFormControlLabel
//             value="Italian sausage"
//             label="Italian sausage"
//             control={<Radio />}
//           />
//           <MyFormControlLabel value="Bacon" label="Bacon" control={<Radio />} />
//           <MyFormControlLabel
//             value="pepperoni"
//             label="pepperoni"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value=" sliced ham"
//             label=" sliced ham"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Meatballs"
//             label="Meatballs"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Prosciutto"
//             label="Prosciutto"
//             control={<Radio />}
//           />
//           <MyFormControlLabel
//             value="Sausage"
//             label="Sausage"
//             control={<Radio />}
//           />
//         </RadioGroup>
//       </div>
//     </div>
//   );
// }
