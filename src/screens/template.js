import { CircularProgress, Grid } from '@mui/material';
import { useState } from 'react';
import { MuiButton } from '../components/button/button';
import { MuiCheckBox, MuiCheckBoxGroup } from '../components/CheckBox/MuiCheckBox';
import { FloatingSelect, MuiSelect } from '../components/Dropdown/Dropdown';
import { FloatingInput, MuiInput } from '../components/input/input';
import MuiBackdropLoader from '../components/loader/MuiBackDrop';
import MuiDatePicker from '../components/MuiDatePicker/MuiDatePicker';
import MuiRadio, { MuiRadioGroup } from '../components/Radio/MuiRadioButton';
import MuiSwitch from '../components/Switch/MuiSwitch';
import { SetDate } from '../config/core/helperMethod';


function Template() {
    const [isLoading, setLoading] = useState(false)
    const handleToggle = () => setLoading(!isLoading)
    const handleClose = () => setLoading(false)
    const [data, setData] = useState({})
    const handleChange = (key, value) => {
        const newField = { [key] : value }
        setData({...data, ...newField})
    }
    const submit = () => {
        // console.log(SetDate(date));
        console.log(data);
    }

    return (
        <>
            <Grid container spacing={2} sx={{ m: 1 }}>
                <Grid item>
                    {/* <MuiDatePicker
                        label='date of birth'
                        // value={date}
                        // onChange={(e) => setDate(e.$d)}
                    /> */}
                </Grid>
                <Grid item>
                    <MuiInput
                    label='Hello World'
                    onChange={(e) => handleChange('MuiInput', e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <MuiSelect
                    label='Hello World'
                    dataSource={[
                        {
                            id: 'a',
                            option:"a"
                        },
                        {
                            id: 'b',
                            option:"b"
                        },
                        {
                            id: 'c',
                            option:"c"
                        },
                    ]}
                    onChange={(e) => handleChange('MuiSelect', e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <FloatingSelect
                    label='Hello World'
                    dataSource={[
                        {
                            id: 'a',
                            option:"a"
                        },
                        {
                            id: 'b',
                            option:"b"
                        },
                        {
                            id: 'c',
                            option:"c"
                        },
                    ]}
                    onChange={(e) => handleChange('FloatingSelect', e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <FloatingInput
                        label='Hello World'
                        placeholder='Hello World'
                        onChange={(e) => handleChange('FloatingInput', e.target.value)}
                        />
                </Grid>
                <Grid item>
                    <MuiSwitch
                    label='Hello World'
                    onChange={(e) => handleChange('switch', e.target.checked)}
                    />
                </Grid>
                <Grid item>
                    <MuiRadioGroup
                    dataSource={[
                        {
                            id: 'a',
                            option:"a"
                        },
                        {
                            id: 'b',
                            option:"b"
                        },
                        {
                            id: 'c',
                            option:"c"
                        },
                    ]}
                    label='Hello World'
                    onChange={(e) => handleChange('MuiRadioGroup', e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <MuiCheckBox
                    label='Hello World'
                    onChange={(e) => handleChange('MuiCheckBoxGroup', e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <MuiBackdropLoader
                    label='Loading'
                    open={isLoading}
                    handleToggle={handleToggle}
                    handleClose={handleClose}
                    />
                </Grid>
                <Grid item>
                    <CircularProgress/>
                </Grid>
                <Grid item>
                    <MuiButton
                        label='Submit'
                        onClick={submit}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Template;
