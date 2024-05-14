import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, videoOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetails = () => {
    const [exerciseDetial, setExerciseDetial] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState({})
    const [targetMuscleExercises, setTargetMuscleExercises] = useState({})
    const [equipmentExercises, setEquipmentExercises] = useState({})
    const { id } = useParams();

    const exerciseDomain = "https://exercisedb.p.rapidapi.com/exercises"
    const videoDomain = "https://youtube-search-and-download.p.rapidapi.com/search"
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDetailData = await fetchData(`${exerciseDomain}/exercise/${id}`, exerciseOptions)
            console.log("details data ", exerciseDetailData)
            setExerciseDetial(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${videoDomain}?query=${exerciseDetailData.name}`, videoOptions)
            console.log("video data ", exerciseVideoData)
            setExerciseVideos(exerciseVideoData.contents);


            const targetMuscleExercisesData = await fetchData(`${exerciseDomain}/target/${exerciseDetailData.target}`, exerciseOptions)
            console.log("target data ", targetMuscleExercisesData)
            console.log(targetMuscleExercisesData)
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDomain}/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExercisesData)
        }
        fetchExercisesData()
    }, [id])
    return (
        <Box>
            <Detail exerciseDetial={exerciseDetial} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetial.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetails