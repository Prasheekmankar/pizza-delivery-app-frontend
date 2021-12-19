import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AdminLogIn } from "./components/AdminLogIn";
import { UserLogIn } from "./components/userLogIn";
import { SignUp } from "./components/signUp";
import { Success } from "./components/success";
import { PizzaList } from "./components/PizzaList";
import { DashBoard } from "./components/adminDashboard";
import { AppBar, Toolbar } from "@mui/material";
import { CustomPizza } from "./components/createPizza";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Home } from "./components/Home";
import { useCart } from "./context/Context";
import Store from "./components/cart";

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
            <h2 className="header">Pizza Shop</h2>
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
            color="primary"
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
        <Route path="/pizzaList">
          <PizzaList />
        </Route>
        <Route path="/adminDashboard">
          <DashBoard />
        </Route>
        <Route path="/createPizza">
          <CustomPizza />
        </Route>
        <Route path="/cart">
          <Store />
        </Route>
      </Switch>
    </div>
  );
}
