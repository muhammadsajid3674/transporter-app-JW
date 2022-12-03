import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MuiCustomizedButtons from '../../components/button/MuiCustomButtom'
import { MuiSelect } from '../../components/Dropdown/Dropdown'
import { MuiInput, MuiPasswordField } from '../../components/input/input'
import { handleSignup } from '../../config/firebaseMethods'
import loginImg from '../../images/login.png';

function Signup() {

    const [isLoading, setLoading] = useState(false)
    // fields data push
    const [data, setData] = useState({})
    // const [category, setCategory] = useState("admin")
    const [error, setError] = useState(false)

    const handleChange = (key, value) => {
        const newField = { [key] : value }
        setData({...data, ...newField})
    }

    const handleSubmit = () => {
        setLoading(true)
        data.category = 'user'
        //Firebase Auth
        handleSignup(data, 'User')
            .then((success) => {
                setLoading(false)
                console.log(success);
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
                console.log(error);
            })
    }

    return (
        <>
        <Grid container alignItems='center' sx={{ backgroundColor: '#eee'}}>
                <Grid item md={5} xs={12}>
                    <Box className='text-center'>
                        <img src={loginImg} className='img-fluid'/>
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Box className='cusHeightLogin' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', p: 4, minHeight: "100vh"}}>
                        <Grid container justifyContent='center'>
                            <Grid item md={6}>
                                <Box className='text-center mb-2'>
                                    <Typography variant='h3' className='text-center pb-3'>Signup</Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <MuiInput
                                            label='User Name'
                                            onChange={(e) => handleChange('userName', e.target.value)}
                                            required={true}
                                            error={error}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <MuiInput
                                            label='Email'
                                            name='email'
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            required={true}
                                            error={error}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <MuiPasswordField
                                            label="Password"
                                            labelId="password-login"
                                            onChange={(e) => handleChange('password', e.target.value)}
                                            required={true}
                                            error={error}
                                            variant="filled"
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{
                                    textAlign: 'center',
                                    my: 2
                                }}>
                                    {isLoading ? <CircularProgress /> :
                                        <MuiCustomizedButtons
                                            label="Signup"
                                            className="px-5"
                                            onClick={handleSubmit}
                                        />
                                    }
                                </Box>
                                <Typography variant='subtitle1' className='text-center'>Create Account as Transporter <Link to='/transporterSignup' style={{ color: 'grey' }}>Register Now</Link></Typography>
                                <Typography variant='subtitle1' className='text-center'>Already have an account? <Link to='/login' style={{ color: 'grey' }}>Login</Link></Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Signup