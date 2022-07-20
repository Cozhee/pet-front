import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import PetsIcon from '@mui/icons-material/Pets';
import SecondNav from './SecondNav'

const settings = ['Sign Up', 'Log In'];

const ResponsiveAppBar = () => {

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#EFEEF1' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <PetsIcon sx={{ color: '#6504B5', marginRight: 1 }}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: '#6504B5',
                                textDecoration: 'none',
                            }}
                        >
                            Find Your Friend
                        </Typography>
                        <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                            {settings.map((setting) => (
                                <Button sx={{ textTransform: 'none', color: 'black' }} key={setting}>
                                    <Typography sx={{ fontWeight: 900 }}  textAlign="center">{setting}</Typography>
                                </Button>
                            ))}
                            <Button sx={{ textTransform: 'none', color: 'black' }} key="Log-Out">
                                <Typography sx={{ fontWeight: 900 }}  textAlign="center">Log Out</Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <SecondNav/>
        </>
    );
};
export default ResponsiveAppBar;
