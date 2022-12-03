import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function MuiBackdropLoader(props) {
    const { label, open, handleToggle, handleClose,  onClick, type, value, variant, className, color, size } = props;

  return (
    <div>
      <Button className={className} variant={variant ?? 'contained'} color={color ?? 'secondary'} onClick={handleToggle}>{label}</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}