import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnergyProductTable from "../components/Tables/ProductTable";
import Overlay from "../components/Overlay";

export function BioEnergyPage() {
    return (
        <div>
            <Navbar />
            <Overlay text='Energy product data'/>
            <Container sx={{ pt: 10 }} maxWidth={false}>
                <EnergyProductTable />
            </Container>
            <Container></Container>
            <Footer />

        </div>
    )
}