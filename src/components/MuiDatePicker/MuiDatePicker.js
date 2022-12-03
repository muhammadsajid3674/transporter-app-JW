import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        custom: {
            light: '#0c4b74',
            main: '#0c4b74',
            dark: '#0c4b74',
            contrastText: '#fff',
        }
    },
});

export default function MuiDatePicker(props) {

    const { label, variant, onChange, name, id, color, helperText, error, disabled, required, min, max, type, value, placeholder } = props;

    return (
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={label}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
    );
}