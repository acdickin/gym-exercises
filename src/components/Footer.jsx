import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems='center' px='40px' pt='20px' >
        <Typography variant="h5" pb='40px' mt='20px'>
          Made by <a href="https://andrewcosmic.netlify.app/">Andrew Cosmic</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
