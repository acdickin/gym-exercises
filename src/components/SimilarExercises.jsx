import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    console.log("muscles: ", targetMuscleExercises)
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3">
                Exersices that target the same muscle group
            </Typography>
            <Stack direction='row' sx={{ p: '5', position: 'relative' }}>
                {targetMuscleExercises.length
                    ? <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false} />
                    : <Loader />
                }
            </Stack>
            <Typography variant="h3">
                Exersices that use the same equipment
            </Typography>
            <Stack direction='row' sx={{ p: '5', position: 'relative' }}>
                {equipmentExercises.length
                    ? <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
                    : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises