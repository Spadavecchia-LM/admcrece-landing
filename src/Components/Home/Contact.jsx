import React from 'react'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';


const Contact = () => {
  return (
    <Stack sx={{width:"100%", minHeight:"3%", borderRadius:"16px", padding:"16px"}} justifyContent="space-around" flexDirection="row">
    
    <p>Crece Buenos Aires</p>
    <p> Iberá 5383 CABA 1431 Buenos Aires, Argentina</p>
    <p>Teléfonos: 15-3070-1191 / 1189 </p>
    <p>Email: admcrece@gmail.com</p>
    <IconButton color='inherit'>
      <FacebookIcon/>
      </IconButton>
    </Stack>
  )
}

export default Contact