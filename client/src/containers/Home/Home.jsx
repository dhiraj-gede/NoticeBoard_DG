import React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import TimeTable from "../../components/Pages/timeTable";
import DashBoard from "../../components/Pages/dashBoard";
import AcedemicCalender from "../../components/Pages/acedemicCalender";
import ToDo from "../../components/Pages/todo";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Box className="home">
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="time table" element={<TimeTable />} />
        <Route path="acedemic calendar" element={<AcedemicCalender />} />
        <Route path="todo" element={<ToDo />} />
        {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Box>
  );
};

export default Home;
