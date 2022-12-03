import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, pushData } from '../../../config/firebaseMethods'
import CusDataTable from '../../../components/CusDataTable/CusDataTable';
import { MuiInput, Datepicker, FloatingInput } from '../../../components/input/input';
import { MuiSelect } from '../../../components/Dropdown/Dropdown';
import { MuiButton } from '../../../components/button/button';
import MuiTimePicker from '../../../components/MuiTimePicker';

function ExistingBookings() {

//   const [registerStd, setRegisterStd] = useState([])
//   const [course, setCourse] = useState([])
//   const [quizzes, setQuizzes] = useState([])
//   const [isLoading, setLoading] = useState(true)
//   const [editing, setEdit] = useState(false)
//   const [editData, setEditData] = useState({})
  const [formSubmit, setFormSubmit] = useState(false)
const [data, setData] = useState({})

const handleChange = (e) => {
  let newField = { [e.target.name]: e.target.value }
  setData({ ...data, ...newField })
}

const submitData = () => {
    setFormSubmit(true)
    alert('Do you want to Submit?')
    return pushData(data, 'TransportInfo/')
      .then((res) => {
        setFormSubmit(false)
      })
      .catch((err) => {
        setFormSubmit(false)
        console.log(err);
      })
  }

//   const getRegisterSTD = () => {
//     return getData('Students/')
//       .then((res) => {
//         setRegisterStd(res);
//         setLoading(false)
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }
//   const stdDataEdit = (stdData) => {
//     setEdit(true)
//     setEditData(stdData)
//     console.log(stdData);
//   }
//   const updateData = (e) => {
//     console.log(updateData);
//   }
//   const getCourses = () => {
//     return getData('Courses/')
//       .then((res) => {
//         setCourse(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }
//   const getQuizzes = () => {
//     return getData('QuizQuestions/')
//       .then((res) => {
//         setQuizzes(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

//   useEffect(() => {
//     getRegisterSTD()
//     getCourses()
//     getQuizzes()
//   }, [])


  return (
    <>
      <Grid container justifyContent='center' minHeight="100vh" spacing={3}>
        <Grid item xs={12} md={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                <Typography variant='p' className='display-4'>Existing Bookings</Typography>
              </Box>
            </Grid >
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ExistingBookings