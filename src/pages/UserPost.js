import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const UserPost = () => {
  const [userPost, setUserPost] = useState(0);
  const [dataSource, setDataSource] = useState({
    chart: {
      caption: "Users post split",
      showvalues: "1",
      showpercentintooltip: "0",
      numberprefix: "number of post -",
      enablemultislicing: "1",
      theme: "umber",
    },
    data: [],
  });

  // const dataSource = {

  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const filteredPosts = response.data.filter((post) => post.userId === 1);

        // console.log(filteredPosts);
        setUserPost(filteredPosts);
        const totalPosts = response.data.length;
        const user1Posts = filteredPosts.length;
        const otherPosts = totalPosts - user1Posts;

        setDataSource((prevState) => ({
          ...prevState,
          data: [
            { label: "usedId1", value: user1Posts },
            {
              label: "others post",
              value: otherPosts,
            },
          ],
        }));

        console.log(dataSource);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container component="main" maxWidth="lg" sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" } }}>
          User Posts
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 8 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "teal" }}>
                <TableCell align="center" sx={{ color: "wheat" }}>
                  USERID
                </TableCell>
                <TableCell align="center" sx={{ color: "wheat" }}>
                  POST
                </TableCell>
                <TableCell align="center" sx={{ color: "wheat" }}>
                  TITLE
                </TableCell>
                <TableCell align="center" sx={{ color: "wheat" }}>
                  BODY
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {userPost &&
                userPost.map((post, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {post.userId}
                    </TableCell>

                    <TableCell align="right">{post.id}</TableCell>
                    <TableCell align="right">{post.title}</TableCell>
                    <TableCell align="right">{post.body}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {
          <ReactFusioncharts
            type="pie3d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}
          />
        }
      </Box>
    </Container>
  );
};

export default UserPost;
