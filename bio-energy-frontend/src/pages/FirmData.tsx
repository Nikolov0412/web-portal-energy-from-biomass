import { Container } from "@mui/material";
import FirmDataTable from "../components/Tables/FirmDataTable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";

export function FirmDataPage() {
    return (
        <div>
            <Navbar />
            <Overlay text='Firm data'/>
            <Container sx={{ pt: 10 }} maxWidth={false}>
                <FirmDataTable />
            </Container>
            <Container></Container>
            <Footer />

        </div>
    )
}