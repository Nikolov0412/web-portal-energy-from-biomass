import { Container } from "@mui/material";
import BiomassTable from "../components/Tables/BiomassTable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";

export function BiomassPage(){
    return(
        <div>
        <Navbar />
        <Overlay text='Biomass data'/>
        <Container sx={{ pt: 10 }} maxWidth={false}>
            <BiomassTable />
        </Container>
        <Container></Container>
        <Footer />

    </div>
    )
}