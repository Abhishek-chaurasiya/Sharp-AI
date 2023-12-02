import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>{" "}
          <Grid sx={{ flexGrow: 1 }}>
            <Button
              variant="h6"
              component="div"
              onClick={() => {
                navigate("/");
              }}
            >
              Task
            </Button>
          </Grid>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/transaction");
            }}
          >
            Transaction
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/userposts");
            }}
          >
            Post
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
