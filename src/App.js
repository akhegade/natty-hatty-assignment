// import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import HomePage from "./components/HomePage/";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <Grid
      container
      // spacing={2}
      sm={12}
      className=" bg-white h-full "
      // style={{ width: "auto" }}
    >
      <NavBar />
      <HomePage />
    </Grid>
  );
}

export default App;
