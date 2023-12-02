import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "teal",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: 14,
          }}
        >
          <Grid xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{
                  height: 260,
                }}
                image="https://img.freepik.com/free-photo/3d-hand-using-online-banking-app-smartphone_107791-16639.jpg?w=740&t=st=1701439644~exp=1701440244~hmac=804bbd47a574d0aba148a94823f1b09d7ea929c9c00374b6bc0661dc24394061"
                title="transaction"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Transaction
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enter your wallet address and amount
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  onClick={() => {
                    navigate("/transaction");
                  }}
                >
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 260 }}
                image="https://img.freepik.com/free-psd/3d-rendered-facebook-post-mockup-isolated_359791-413.jpg?w=740&t=st=1701440052~exp=1701440652~hmac=d05719a3ef30eb3bae01667dc926e0ebf3a2e6910778211c5cc1d42cd6661aed"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  User Post
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  See your posts details
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  onClick={() => {
                    navigate("/userposts");
                  }}
                >
                  Open
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
