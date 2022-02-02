import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AdminLogIn } from "./components/AdminLogIn";
import { UserLogIn } from "./components/userLogIn";
import { SignUp } from "./components/signUp";
import { Success } from "./components/success";
import { BikeList } from "./components/BikeList";
import { DashBoard } from "./components/adminDashboard";
import { AppBar, Toolbar } from "@mui/material";
// import { CustomPizza } from "./components/createPizza";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Home } from "./components/Home";
import { useCart } from "./context/Context";
import Cart from "./components/cart";

export default function App() {
  const items = useCart();
  const history = useHistory();
  return (
    <div className="App">
      <AppBar
        position="static"
        style={{ marginBottom: "24px" }}
        color="transparent"
      >
        <Toolbar>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/bikeList")}
          >
            select bike
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/userLogIn")}
          >
            User Login
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/signUp")}
          >
            signUp
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h2 className="header">Rental Shop</h2>
          </Typography>

          <Button
            style={{ marginLeft: "auto" }}
            variant="text"
            color="inherit"
            edge="end"
            onClick={() => history.push("/AdminLogIn")}
          >
            Admin Login
          </Button>

          <IconButton
            color="inherit"
            aria-label="add to shopping cart"
            onClick={() => history.push("/cart")}
          >
            <Badge badgeContent={items.length}>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AdminLogIn">
          <AdminLogIn />
        </Route>
        <Route path="/userLogIn">
          <UserLogIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/bikeList">
          <BikeList />
        </Route>
        <Route path="/adminDashboard">
          <DashBoard />
        </Route>
        {/* <Route path="/createPizza">
          <CustomPizza />
        </Route> */}
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
