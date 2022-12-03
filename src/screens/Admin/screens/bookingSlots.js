import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, pushData } from '../../../config/firebaseMethods'
import CusDataTable from '../../../components/CusDataTable/CusDataTable';
import { MuiButton } from '../../../components/button/button';
import { FloatingSelect } from '../../../components/Dropdown/Dropdown';
import { FloatingInput } from '../../../components/input/input';

function BookinSlots() {
    const [formSubmit, setFormSubmit] = useState(false)
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [existedTransport, setTransport] = useState([])

    const handleChange = (key, value) => {
        let newField = { [key]: value }
        setData({ ...data, ...newField })
    }

    const submitData = () => {
        setFormSubmit(true)
        console.log(data);
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

    const getTransportInfo = () => {
        return getData('TransportInfo')
            .then((res) => {
                setLoading(false)
                setTransport(res)
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
                                <Typography variant='p' className='display-4'>Transport Info</Typography>
                                <Grid container className='mt-2' spacing={2}>
                                    <Grid item xs={10} md={4}>
                                        <FloatingInput
                                            label='Route From'
                                            labelId='routeFrom-float'
                                            placeholder='Route From'
                                            onChange={(e) => handleChange('transport', e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <FloatingInput
                                            label='Route From'
                                            labelId='Route From-float'
                                            placeholder='routeFrom'
                                            onChange={(e) => handleChange('transport', e.target.value)}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={10} md={4}>
                                        <FloatingInput
                                            label='Vehicle'
                                            labelId='vehicle-float'
                                            placeholder='Vehicle'
                                            onChange={(e) => handleChange('transport', e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <FloatingInput
                                            label='Vehicle'
                                            labelId='vehicle-float'
                                            placeholder='Vehicle'
                                            onChange={(e) => handleChange('transport', e.target.value)}
                                        />
                                    </Grid> */}
                                    <Grid item xs={10} md={4}>
                                        <FloatingSelect
                                            label='Transport'
                                            labelId='transport-float'
                                            placeholder='Transport'
                                            onChange={(e) => handleChange('vehicleType', e.target.value)}
                                            nodeName='Transporter'
                                            displayValue='transport'
                                            fieldValue='transport'
                                        />
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <FloatingSelect
                                            label='No of Seats'
                                            labelId='seats-float'
                                            placeholder='No of Seats'
                                            onChange={(e) => handleChange('vehicleType', e.target.value)}
                                            nodeName='Transporter'
                                            displayValue='transport'
                                            fieldValue='transport'
                                        />
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <FloatingInput
                                            label='Price'
                                            labelId='price-float'
                                            placeholder='Price'
                                            onChange={(e) => handleChange('price', e.target.value)}
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
                                    {/* <Grid item xs={12} md={12}>
                                        <Typography variant="p" className="display-4">Transport Info</Typography>
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
                                                        dataSource={existedTransport}
                                                        colValue={[
                                                            {
                                                                key: 'transport',
                                                                name: 'Vehicle'
                                                            },
                                                            {
                                                                key: 'vehicleType',
                                                                name: 'Vehicle Type'
                                                            },
                                                            {
                                                                key: 'price',
                                                                name: 'Price'
                                                            },
                                                            {
                                                                key: 'seats',
                                                                name: 'Seats'
                                                            }

                                                        ]}
                                                    />
                                                </Box>
                                            </Box>
                                        )}
                                    </Grid> */}
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