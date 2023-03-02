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
      className="border-2 border-black bg-white"
      // style={{ width: "auto" }}
    >
      <NavBar />
      <HomePage />
    </Grid>
  );
}

export default App;
