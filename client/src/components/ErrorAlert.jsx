import React from 'react';
import { Alert, AlertTitle, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ErrorAlert = ({ message, onClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        className="mb-6"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
};

export default ErrorAlert;
