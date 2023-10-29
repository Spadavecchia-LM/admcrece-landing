import { Stack, Card, Button, ButtonGroup} from '@mui/material'
import React from 'react'


const UserLogin = () => {
  return (
    <Stack sx={{width:"30%", backgroundColor:"#fafafa", minHeight:"40%", borderRadius:"16px", padding:"16px"}} justifyContent="center" >
        <Stack  alignItems="center" sx={{height:"100%"}} gap={10} >
            <Stack alignItems="center">
            <h1>Usuarios</h1>
            <p>Inicie sesion o registrese para recibir todas las novedades de su eficio.</p>
            </Stack>
            <Stack direction="row" justifyContent="space-around" sx={{width:"100%"}}>
                <Button size='small' variant='contained'>Iniciar Sesión</Button>
                <Button size='small' variant='outlined'>Registrarse</Button>
            </Stack>
        </Stack>
    </Stack>

  )
}

export default UserLogin