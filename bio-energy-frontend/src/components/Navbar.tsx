import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    /* States */

    const [anchorLearning, setAnchorLearning] = useState<null | HTMLElement>(null);
    const [anchorFirms, setAnchorFirms] = useState<null | HTMLElement>(null);
    const [anchorAdditional, setAnchorAdditional] = useState<null | HTMLElement>(null);

    /* Open booleans */

    const openLearning = Boolean(anchorLearning);
    const openFirms = Boolean(anchorFirms);
    const openAdditional = Boolean(anchorAdditional);

    /* Handle events */

    const handleClickLearning = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorLearning(event.currentTarget);
    }
    const handleClickFirms = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorFirms(event.currentTarget);
    };
    const handleClickAdditional = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorAdditional(event.currentTarget);
    };

    const handleCloseLearning = () => {
        setAnchorLearning(null);
    };
    const handleCloseFirms = () => {
        setAnchorFirms(null);
    };
    const handleCloseAdditional = () => {
        setAnchorAdditional(null);
    };

    const linkStyles = {
        color: 'inherit',
        textDecoration: 'none'
    }

    return (
        <Container sx={{
            width: '100%', py: 2, top: 0,
            px: 2,
        }} component='header'>
            <AppBar position='absolute' sx={{ width: '100%' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={"/"}>WPPEB</Link>
                    </Typography>
                    <Button
                        color="inherit"
                        aria-controls={openLearning ? 'learning-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openLearning ? 'true' : undefined}
                        onClick={handleClickLearning}
                    >Learning portal</Button>
                    <Menu
                        id="learning-menu"
                        anchorEl={anchorLearning}
                        open={openLearning}
                        onClose={handleCloseLearning}
                    >
                        <MenuItem onClick={handleCloseLearning}><Link style={linkStyles} to={"/about"}>About the project</Link></MenuItem>
                        <MenuItem onClick={handleCloseLearning}><Link style={linkStyles} to={"/types-biomass"}>Biomass Types</Link></MenuItem>
                        <MenuItem onClick={handleCloseLearning}> <Link style={linkStyles} to={"/creation-process"}>Process of creating energy </Link></MenuItem>
                    </Menu>
                    <Button
                        color="inherit"
                        aria-controls={openFirms ? 'firm-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openFirms ? 'true' : undefined}
                        onClick={handleClickFirms}
                    >Firm Data</Button>
                    <Menu
                        id="firm-menu"
                        anchorEl={anchorFirms}
                        open={openFirms}
                        onClose={handleCloseFirms}
                    >
                        <MenuItem onClick={handleCloseFirms}><Link style={linkStyles} to={"/firms"}>Firms</Link></MenuItem>
                        <MenuItem onClick={handleCloseFirms}><Link style={linkStyles} to={"/firm-data"}>Firms Data</Link></MenuItem>
                    </Menu>
                    <Button
                        color="inherit"
                        aria-controls={openAdditional ? 'classificators-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAdditional ? 'true' : undefined}
                        onClick={handleClickAdditional}
                    >Additional Data</Button>
                    <Menu
                        id="classificators-menu"
                        anchorEl={anchorAdditional}
                        open={openAdditional}
                        onClose={handleCloseAdditional}
                    >
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/heat-measures"}>Heat Measure units</Link></MenuItem>
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/power-measures"}>Power Measure units</Link></MenuItem>
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/nkid"}>NKID</Link></MenuItem>
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/towns"}>Towns</Link></MenuItem>
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/biomass"}>Biomass</Link></MenuItem>
                        <MenuItem onClick={handleCloseAdditional}><Link style={linkStyles} to={"/bio-energy"}>Bio energy product</Link></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Navbar;


