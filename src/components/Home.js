// import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

export function Home() {
  // const history = useHistory();

  return (
    <div>
      <h2>Welcome to Rental Portal</h2>
      <div className="home-content">
      
        <Button
          variant="text"
          color="inherit"
          // onClick={() => history.push("/List")}
        >
          select date
        </Button>
      </div>
    </div>
  );
}
