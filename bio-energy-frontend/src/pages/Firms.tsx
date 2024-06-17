import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FirmTable from "../components/Tables/FirmTable";
import Overlay from "../components/Overlay";

export function FirmsPage(){
    return(
        <div>
            <Navbar />
            <Overlay text='Firms'/>
            <Container sx={{ pt: 10 }} maxWidth={false}>
                <FirmTable />
            </Container>
            <Container></Container>
            <Footer />

        </div>
    )
}