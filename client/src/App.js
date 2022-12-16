import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./containers/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <Home/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
