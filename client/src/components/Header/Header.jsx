import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import Image from 'mui-image'
import logo from '../../assets/YCCE_logo.jpg'
import Navbar from './navbar'

function PageHead(){
    return (
        <Paper className="container" sx={{display:'flex', width:'100vw', justifyContent:'space-around', alignItems:'center'}}>
      <Button className="logo" variant="outlined">
        <Image src={logo}/>
      </Button>
        <Typography variant="h4" sx={{textAlign:'center'}} >
        Yeshwantrao Chavan College of Engineering
        </Typography>
      </Paper>
    )
}

const Header = () => {
  return (
    <Box className="header">
      <PageHead/>
      <Navbar/>
    </Box>
  )
}

export default Header
