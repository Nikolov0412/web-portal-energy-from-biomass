import Navbar from "../components/Navbar";
import TownsTable from "../components/Tables/TownsTable";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import Overlay from "../components/Overlay";

export function TownsPage() {
    return (
        <div>
            <Navbar />
            <Overlay text='Towns'/>

            <Container sx={{ pt: 10 }} maxWidth={false}>
                <TownsTable />
            </Container>
            <Container></Container>
            <Footer />

        </div>
    )
}