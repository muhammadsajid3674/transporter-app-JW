import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, pushData } from '../../../config/firebaseMethods'
import CusDataTable from '../../../components/CusDataTable/CusDataTable';
import { MuiButton } from '../../../components/button/button';
import { FloatingSelect } from '../../../components/Dropdown/Dropdown';
import { FloatingInput } from '../../../components/input/input';

function AvailableTransport() {
    const [formSubmit, setFormSubmit] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [existedTransport, setTransport] = useState([])
    const [transportEdit, setTransportEdit] = useState(false)

    const handleChange = (key, value) => {
        let newField = { [key]: value }
        setData({ ...data, ...newField })
    }
    const editTransport = (e) => {
        setTransportEdit(true)
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
                                <Typography variant='p' className='display-4'>Avalaible Transports</Typography>
                                <Grid item xs={12} md={12}>
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
                                                    onClickEditRow={(e) => editTransport(e)}
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
                                </Grid>
                            </Box>
                            {transportEdit && <Grid item xs={12} md={12}>
                                <Box sx={{ backgroundColor: '#fff', p: 4, my: 2, borderRadius: '5px' }}>
                                    <Grid container className='mt-2' spacing={2}>
                                        <Grid item xs={10} md={4}>
                                            <FloatingInput
                                                label='Vehicle'
                                                labelId='vehicle-float'
                                                placeholder='Vehicle'
                                                onChange={(e) => handleChange('transport', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={10} md={4}>
                                            <FloatingSelect
                                                label='Vehicle Type'
                                                labelId='vehicleType-float'
                                                placeholder='Vehicle Type'
                                                onChange={(e) => handleChange('vehicleType', e.target.value)}
                                                dataSource={[
                                                    {
                                                        id: 'bus',
                                                        option: 'Bus'
                                                    },
                                                    {
                                                        id: 'car',
                                                        option: 'Car'
                                                    },
                                                    {
                                                        id: 'bike',
                                                        option: 'Bike'
                                                    },
                                                ]}
                                            />
                                        </Grid>
                                        <Grid item xs={10} md={4}>
                                            <FloatingInput
                                                label='No of Seats'
                                                labelId='seats-float'
                                                placeholder='No of Seats'
                                                onChange={(e) => handleChange('seats', e.target.value)}
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
                                                    label='Update'
                                                // onClick={submitData}
                                                />
                                            )}
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Grid>
                            }
                        </Grid >
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default AvailableTransport