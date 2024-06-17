import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function AboutPage() {
    return (
        <div>
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
                    Learning about the project?
                </Typography>
            </Container>
            <Container maxWidth={false}>
                <Typography variant='h4' align="center" pt='40px'> What is the project about?</Typography>
                <Typography variant="body1" pt='3%' align='justify'> Developing a web portal dedicated to the production of energy from biomass is a visionary endeavor that addresses several critical issues facing our world today. This project is born out of a deep commitment to fostering sustainable energy solutions, promoting environmental stewardship, and educating the public about the immense potential of biomass energy. </Typography>
                <Typography variant='h4' align="center" pt='50px'> Vision for a Sustainable Future</Typography>
                <Grid container spacing={12} sx={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Grid item xs={1.5} /> {/* Empty item with a width of 2 grid units */}
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1616680213669-92c78de95f38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="energy"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Environmental Stewardship
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our planet is facing unprecedented environmental challenges, from climate change to the depletion of natural resources. One of the most pressing needs is to transition from fossil fuels to renewable energy sources. Biomass energy, which is derived from organic materials such as plant and animal waste, represents a viable and sustainable alternative. By developing this web portal, we aim to support and accelerate the adoption of biomass energy, thus reducing greenhouse gas emissions and mitigating the effects of climate change.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="company"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Energy Independence
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Biomass energy offers a pathway to greater energy independence. Many regions around the world have abundant biomass resources that are currently underutilized. By harnessing these resources, countries can reduce their reliance on imported fossil fuels, enhance their energy security, and create a more resilient energy infrastructure. This portal will serve as a crucial resource for firms looking to optimize their biomass production and utilization, thereby contributing to energy independence and economic stability.              </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Empowering Firms and Innovators
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The portal will serve as a comprehensive information hub for firms involved in biomass energy production. It will provide detailed insights into various biomass technologies, best practices, and innovations in the field. By consolidating and disseminating this information, we aim to help firms improve their processes, increase their efficiency, and ultimately, boost their productivity and profitability.              </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={false}>
                <Typography variant='h4' align="center" pt='50px'> Additional Features and Benefits</Typography>


                <Grid container spacing={12} sx={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Grid item xs={1.5} />
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="learning"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Learning Center
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A significant barrier to the widespread adoption of biomass energy is the lack of public awareness and understanding. Our portal will include a dedicated learning center designed to educate people about the benefits and potential of biomass energy. This section will feature engaging and accessible content, including articles, videos, webinars, and interactive tools, to help demystify biomass energy and inspire more individuals and communities to support and adopt these technologies.</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="measuring"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Measuring Units and Tools
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Understanding the technical aspects of biomass energy can be daunting. To bridge this gap, the portal will offer comprehensive resources on heat and power measuring units, conversion tools, and other technical information. This will empower users to better understand the efficiency and output of biomass systems, making the technology more accessible to a wider audience.</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="https://images.unsplash.com/photo-1554769945-af468c934022?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Resource Efficiency
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Biomass energy is inherently linked to the principles of resource efficiency and circular economy. By promoting the use of waste materials for energy production, we can significantly reduce landfill waste and make better use of natural resources. This portal will highlight case studies and success stories of firms that have effectively implemented resource-efficient biomass systems, serving as a model for others to follow.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}