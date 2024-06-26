import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmenttImage from '../assets/icons/equipment.png'
const Detail = ({ exerciseDetial }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetial

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmenttImage,
            name: equipment
        }
    ]
    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: "35px", sx: '20px' } }}>
                <Typography variant='h3' sx={{ textTransform: 'capitalize' }} >
                    {name}
                </Typography>
                <Typography variant='h6'>
                    {name} is one of a great exercise for your {bodyPart}.
                </Typography>

                {extraDetail.map(item => {
                    return (
                        <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography variant='h5'>
                                {item.name}
                            </Typography>
                        </Stack>)
                })}

            </Stack>
        </Stack>
    )
}

export default Detail