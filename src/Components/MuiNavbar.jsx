import React from 'react'
import { AppBar, Toolbar, Typography, Stack, Button, Icon } from '@mui/material'
import {navfondo} from '../styles/NavBar.module.css'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LoginIcon from '@mui/icons-material/Login';

const MuiNavbar = () => {
  return (
    <AppBar position='static' className={navfondo}>
        <Toolbar>
        <Icon size='large' edge='start' color='inherit' aria-label='logo' sx={{paddingRight: "10px"}}>
        <ApartmentIcon />
        </Icon>
        <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
            Crece Buenos Aires
        </Typography>
        <Stack direction='row'>
        
        <Button color='inherit' startIcon={<LoginIcon/>}>Ingresar</Button>
        </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar