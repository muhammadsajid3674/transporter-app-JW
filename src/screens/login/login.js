import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MuiCustomizedButtons from '../../components/button/MuiCustomButtom'
import { MuiInput, MuiPasswordField } from '../../components/input/input'
import { handleLogIn } from '../../config/firebaseMethods'
import loginImg from '../../images/login.png';
import '../../App.css';
import MuiBackdropLoader from '../../components/loader/MuiBackDrop'

function Login() {

    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    // fields data push
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const [helperText, setHelperText] = useState("")

    const handleSubmit = () => {
        setLoading(true)
        handleLogIn({ email, password }, 'User')
            .then((success) => {
                setLoading(false)
                if (success.category === 'user') {
                    navigate(`/user`)
                } else if (success.category === 'admin') {
                    navigate(`/admin`)
                } else if (success.category === 'transporter') {
                    navigate(`/transporter`)
                }
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
                console.log(error)
            })
    }
    // fields data push
    return (
        <>
            <Grid container alignItems='center' sx={{ backgroundColor: '#eee' }}>
                <Grid item md={5} xs={12}>
                    <Box className='text-center'>
                        <img src={loginImg} className='img-fluid' />
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Box className='cusHeightLogin' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', p: 4, minHeight: "100vh" }}>
                        <Grid container justifyContent='center'>
                            <Grid item md={6}>
                                <Box className='text-center mb-2'>
                                    <Typography variant='h3' className='text-center pb-3'>Login</Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item md={12} xs={12}>
                                        <MuiInput
                                            label='Email'
                                            name='email'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                            error={error}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <MuiPasswordField
                                            label="Password"
                                            labelId="password-login"
                                            onChange={(e) => setPassword(e.target.value)}
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
                                    {/* <MuiBackdropLoader
                                        label='Login'
                                        open={isLoading}
                                        className="px-5"
                                        handleToggle={handleSubmit}
                                    /> */}
                                    {isLoading ? <CircularProgress /> :
                                        <MuiCustomizedButtons
                                            label="Login"
                                            className="px-5"
                                            onClick={handleSubmit}
                                        />
                                    }
                                </Box>
                                <Typography variant='subtitle1' className='text-center'>Haven't Register? <Link to='/signup' style={{ color: 'grey' }}>Register Now</Link></Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login