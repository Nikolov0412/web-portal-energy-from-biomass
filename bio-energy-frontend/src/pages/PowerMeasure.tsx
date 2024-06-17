import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";
import PowerMeasureDataGrid from "../components/Tables/PowerMeasureTable";

export function PowerMeasurePage(){
    return(
        <div>
        <Navbar />
        <Overlay text='Power measure data'/>

        <Container sx={{ pt: 10 }} maxWidth={false}>
            <PowerMeasureDataGrid />
        </Container>
        <Container></Container>
        <Footer />

    </div>
    )
}