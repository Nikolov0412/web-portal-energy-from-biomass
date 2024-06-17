import {Paper, Typography } from "@mui/material";

function Footer() {
    return (
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} WPPEB
        </Typography>
      </Paper>

    )
}
export default Footer;