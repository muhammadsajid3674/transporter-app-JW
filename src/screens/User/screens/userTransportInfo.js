import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { MuiButton } from '../../../components/button/button'
import { FloatingSelect } from '../../../components/Dropdown/Dropdown'
import { Datepicker, FloatingInput } from '../../../components/input/input'
import MuiDatePicker from '../../../components/MuiDatePicker/MuiDatePicker'
import MuiTimePicker from '../../../components/MuiTimePicker'
import { SetDate, SetTime } from '../../../config/core/helperMethod'
import { getData, pushData } from '../../../config/firebaseMethods'

function UserTransportInfo() {

  const [formSubmit, setFormSubmit] = useState(false)
  const [date, setDate] = useState(null)
  const [data, setData] = useState({})
  const [time, setTime] = useState(null);
  const [isLoading, setLoading] = useState(true)
  const [existedTransport, setTransport] = useState([])

  const handleChange = (key, value) => {
    let newField = { [key]: value }
    setData({ ...data, ...newField })
  }
  //   const navigate = useNavigate()

  //   const startQuiz = (e) => {
  //     navigate('startQuiz', {
  //       state: {
  //         item: e
  //       }
  //     })
  //   }

  const submitData = () => {
    data.bookingDate = SetDate(date)
    data.bookingTime = SetTime(time)
    console.log(data);
    alert('Do you want to Submit?')
    return pushData(data, 'Bookings/')
      .then((res) => {
        setFormSubmit(false)
      })
      .catch((err) => {
        setFormSubmit(false)
        console.log(err);
      })
  }

  const getTransportInfo = () => {
    return getData('TransportInfo')
      .then((res) => {
        setLoading(false)
        // setTransportInfo(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getTransportInfo()
  }, [])


  return (
    <>
      <Grid container justifyContent='center' minHeight="auto">
        <Grid item xs={10} md={10}>
          <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant='p' className='display-4'>Booking Info</Typography>
              </Grid>
              <Grid item md={12}>
                <Grid container className='mt-2' spacing={2}>
                  <Grid item xs={10} md={4}>
                    <FloatingInput
                      label='Route From'
                      labelId='routeFrom-float'
                      placeholder='Route From'
                      onChange={(e) => handleChange('routeFrom', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={10} md={4}>
                    <FloatingInput
                      label='Route To'
                      labelId='routeTo-float'
                      placeholder='Route To'
                      onChange={(e) => handleChange('routeTo', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={10} md={4}>
                    <MuiDatePicker
                      label='Date of Booking'
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.$d)}
                    />
                  </Grid>
                  <Grid item xs={10} md={4}>
                    <MuiTimePicker
                      label='Time'
                      value={time}
                      onChange={(e) => setTime(e.$d)}
                    />
                  </Grid>
                  <Grid item xs={10} md={4}>
                    <FloatingSelect
                      label='Transport'
                      labelId='transport-float'
                      placeholder='Transport'
                      onChange={(e) => handleChange('transport', e.target.value)}
                      nodeName='TransportInfo'
                      displayValue='transport'
                      fieldValue='transport'
                    />
                  </Grid>
                  <Grid item md={12}>
                    {formSubmit ? (
                      <CircularProgress />
                    ) : (
                      <MuiButton
                        color="custom"
                        label='Submit'
                        onClick={submitData}
                      />
                    )}
                  </Grid>
                  
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid >
    </>
  )
}

export default UserTransportInfo