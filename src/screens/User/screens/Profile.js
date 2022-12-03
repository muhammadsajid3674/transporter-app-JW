import { CircularProgress, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useEffect } from 'react'
import CusDataTable from '../../../components/CusDataTable/CusDataTable'
import { getData, manageUser } from '../../../config/firebaseMethods'
import std from '../../../images/avatar.png'
import graph from '../../../images/result-graph.png'

function Profile() {

  const [isLoading, setLoading] = useState(true)
  const [stdData, setStdData] = useState({})
  const [existedBookings, setBookings] = useState([])

  const { userName } = stdData

  const currentStdData = () => {
    manageUser()
      .then((res) => {
        return getData(`User/`, res)
          .then((success) => {
            setLoading(false)
            setStdData(success)
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const getTransportInfo = () => {
    return getData('Bookings')
      .then((res) => {
        setLoading(false)
        setBookings(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTransportInfo()
    currentStdData()
  }, [])

  return (
    <>
      {isLoading ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container justifyContent='center' minHeight='80vh' spacing={2}>
          <Grid item md={10}>
            <Box className='shadow' sx={{ backgroundColor: '#fff', p: 5, borderRadius: '5px' }}>
              <Grid container alignItems='center' spacing={5}>
                <Grid item md={2}>
                  <img src={std} className='img-fluid' />
                </Grid>
                <Grid item>
                  <Typography variant='h3' className='display-3'>{`${userName}`}</Typography>
                  <Typography variant='body1'>Welcome to your profile.</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className='shadow' sx={{ backgroundColor: '#fff', p: 5, borderRadius: '5px' }}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Typography variant='h4'>My Bookings:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant='h5'>1</Typography>
                </Grid>
                <Grid item md={6}>
                  <img className='img-fluid' src={graph} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className='shadow' sx={{ backgroundColor: '#fff', p: 5, borderRadius: '5px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Typography variant="p" className="display-4">Bookings</Typography>
                  {isLoading ? (
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <Box>
                      <Box sx={{ overflowX: 'scroll' }}>
                        <CusDataTable
                          dataSource={existedBookings}
                          colValue={[
                            {
                              key: 'routeFrom',
                              name: 'routeFrom'
                            },
                            {
                              key: 'routeTo',
                              name: 'routeTo'
                            },
                            {
                              key: 'bookingDate',
                              name: 'bookingDate'
                            },
                            {
                              key: 'bookingTime',
                              name: 'bookingTime'
                            },
                            {
                              key: 'transport',
                              name: 'transport'
                            }

                          ]}
                        />
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
      {/*  */}
    </>
  )
}

export default Profile