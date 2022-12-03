import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, pushData } from '../../../config/firebaseMethods'
import CusDataTable from '../../../components/CusDataTable/CusDataTable';
import { MuiButton } from '../../../components/button/button';
import { FloatingSelect } from '../../../components/Dropdown/Dropdown';
import { FloatingInput } from '../../../components/input/input';
import { MuiCheckBox } from '../../../components/CheckBox/MuiCheckBox';

function BookinSlots() {
    const [formSubmit, setFormSubmit] = useState(false)
    const [approveBooking, setApproveBooking] = useState(false)
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [existedBookings, setBookings] = useState([])
    const [tableSeletObj, setTableSeletObj] = useState({})
    const [approved, setApprove] = useState(null)
    const [verified, setVerify] = useState(null)

    const handleChange = (key, value) => {
        let newField = { [key]: value }
        setData({ ...data, ...newField })
    }

    const bookingApproval = (e) => {
        setApproveBooking(true)
        setTableSeletObj(e)
    }
    const submitApproval = (e) => {
        tableSeletObj.approve = approved
        tableSeletObj.verification = verified
        console.log(tableSeletObj)
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
    }, [])


    return (
        <>
            <Grid container justifyContent='center' minHeight="100vh" spacing={3}>
                <Grid item xs={12} md={10}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ backgroundColor: '#fff', p: 4, borderRadius: '5px' }}>
                                <Grid container className='mt-2' spacing={2}>
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
                                                        onClickEditRow={(e) => bookingApproval(e)}
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
                                    {approveBooking && <>
                                        <Grid item xs={12} md={12}>
                                            <Typography variant="p" className="display-4">Booking Approval</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <MuiCheckBox
                                                label='Approve'
                                                onChange={(e) => setApprove(e.target.checked)}
                                            />
                                            <MuiCheckBox
                                                label='Verified'
                                                onChange={(e) => setVerify(e.target.checked)}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <MuiButton
                                                label='Submit'
                                                onClick={submitApproval}
                                            />
                                        </Grid>
                                    </>
                                    }
                                </Grid>
                            </Box>
                        </Grid >
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default BookinSlots