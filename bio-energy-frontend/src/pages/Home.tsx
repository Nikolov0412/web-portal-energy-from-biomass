import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";


function Home() {
    return (
        <div style={{position:"relative"}}>
            <Navbar />
            <Container maxWidth={false}
                sx={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            > <Typography variant="h3" color={"white"}>
                    New Era of producing energy
                </Typography>
                <Button
                    LinkComponent={Link}
                    href="/about"
                    variant="contained"
                    sx={{
                        maxWidth: "150px",
                        maxHeight: "100px",
                        minWidth: "150px",
                        minHeight: "100px",
                        marginBottom: -6,
                        marginTop: 2,
                    }}
                >
                    Learn now
                </Button>
            </Container>
            <Grid container spacing={12} sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid item xs={2} /> {/* Empty item with a width of 2 grid units */}
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1610028290816-5d937a395a49?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="energy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Learning Center
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learning what the new era of energy would be?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" LinkComponent={Link} href="/creation-process">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="company"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Firms
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wondered in what quantity firms produce the new era energy?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" LinkComponent={Link} href="/firm-data">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="data"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Additional Data
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Something missing in the Firms tab? You can view it here.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" LinkComponent={Link} href="/biotechnology">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Footer />
        </div>
    )
}
export default Home;