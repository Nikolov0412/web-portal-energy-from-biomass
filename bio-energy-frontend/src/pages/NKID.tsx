import { Container } from "@mui/material";
import Footer from "../components/Footer";
import NKIDTable from "../components/Tables/NKIDtable";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";

export function NKIDPage() {
    return (
        <div>
            <Navbar />
            <Overlay text='NKID data' />

            <Container sx={{ pt: 10 }} maxWidth={false}>
                <NKIDTable />
            </Container>
            <Container></Container>
            <Footer />

        </div>
    )
}