import React from 'react'
import Stack from '@mui/material/Stack';
import About from './About';
import UserLogin from './UserLogin';
import { hero } from "../../styles/Hero.module.css"

const Home = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="space-around" alignItems="center" sx={{ height: "100vh", width: "100vw" }} className={hero}>
      <About />
      <UserLogin />
    </Stack>
  )
}

export default Home