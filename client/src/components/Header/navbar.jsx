import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
} from "@mui/material/";
import { Link } from "react-router-dom";

const pages = ["Time Table", "Acedemic Calendar", "ToDo"];

function Layout({ xs, md }) {
  return (
    <>
        <Typography
          variant="h6"
          noWrap
          //   href="/"
          sx={{
            mr: 2,
            display: { xs: xs, md: md },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            
            textDecoration: "none",
          }}
        >
      <Link to="/" style={{ textDecoration: "none",color: "inherit"}}>
          HOME
      </Link>
        </Typography>
    </>
  );
}

function HomeIcon() {
  return (
    <>
      <Layout xs={"none"} md={"flex"} />
       <Layout xs={"flex"} md={"none"} />
    </>
  );
}

function MenuList() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={encodeURI(page).toLowerCase()} style={{ color: "inherit", textDecoration:'none' ,display: "block" }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            
          >
            <Link to={encodeURI(page).toLowerCase()} style={{ color: "white", textDecoration:'none' ,display: "block" }}>
                    <Typography textAlign="center">{page}</Typography>
            </Link>
            
          </Button>
          
        ))}
      </Box>
    </Box>
  );
}

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <HomeIcon />
          <MenuList />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
