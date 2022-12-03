import React from "react";
import { Box, Button, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import { getData } from "../../../config/firebaseMethods";
import { useEffect } from "react";
import { useState } from "react";
import { MuiButton } from "../../../components/button/button";
import MuiSkeleton from "../../../components/SkeletonLoader/MuiSkeleton";
import { useNavigate } from 'react-router-dom'

export default function BookingCard() {

    const [isLoading, setLoading] = useState(true)
    const [existedTransport, setTransport] = useState([])

    const navigate = useNavigate()
    const jumpToLogin = () => {
        navigate('./login')
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
    return <>
        <Grid container justifyContent='center' minHeight="auto">
            <Grid item xs={10} md={10}>
                <Box sx={{ backgroundColor: '#eee', p: 4, mt: 5 , borderRadius: '5px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <Typography variant="p" className="display-4">Available Transports</Typography>
                                </Grid>
                                {isLoading ? (
                                    <>
                                        <Grid item md={4}>
                                            <CardContent>
                                                <MuiSkeleton />
                                            </CardContent>
                                        </Grid>
                                        <Grid item md={4}>
                                            <CardContent>
                                                <MuiSkeleton />
                                            </CardContent>
                                        </Grid>
                                        <Grid item md={4}>
                                            <CardContent>
                                                <MuiSkeleton />
                                            </CardContent>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        {existedTransport && existedTransport.length > 0 ? existedTransport.map((e, i) => {
                                            return <Grid key={i} item md={4}>
                                                <Paper elevation={3} sx={{
                                                    backgroundColor: '#407ba7',
                                                    color: '#fff'
                                                }}>
                                                    <CardContent>
                                                        <Typography variant="h4" component="div">
                                                            {e.transport}
                                                        </Typography>
                                                        <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                                                            {e.vehicleType}
                                                        </Typography>
                                                        <Typography variant="body1">
                                                            No of Seats: {e.seats}
                                                        </Typography>
                                                        <Typography variant="body1">
                                                            Prices: {e.price}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <MuiButton
                                                            variant='outlined'
                                                            label='Book Now'
                                                            color="light"
                                                            size='small'
                                                            onClick={jumpToLogin}
                                                        />
                                                    </CardActions>
                                                </Paper>

                                            </Grid>
                                        }) : null}
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid >
    </>
}