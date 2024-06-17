import { Container } from "@mui/material";
import Footer from "../components/Footer";
import HeatMeasureTable from "../components/Tables/HeatMeasureTable";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";

export function HeatMeasurePage(){
    return(
        <div>
        <Navbar />
        <Overlay text='Heat measure data'/>
        <Container sx={{ pt: 10 }} maxWidth={false}>
            <HeatMeasureTable />
        </Container>
        <Container></Container>
        <Footer />

    </div>
    )
}