import { Container, Typography } from "@mui/material";

function Overlay(props:any){
    return(
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
                    {props.text}
                </Typography>
                </Container>
    )
}

export default Overlay;