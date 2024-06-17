import { useState, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress, Grid } from '@mui/material';
import upiqr from 'upiqr';

const UPI = ({ upiOptions }) => {
  const [upi, setUpi] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    upiqr({
      payeeVPA: upiOptions.payeeVPA,
      payeeName: upiOptions.payeeName,
      amount: upiOptions.amount,
      transactionNote: upiOptions.note,
      transactionRefUrl: upiOptions.transactionRefUrl,
      transactionRef: upiOptions.transactionRef,
      payeeMerchantCode: upiOptions.payeeMerchantCode,
      minimumAmount: upiOptions.minimumAmount,
      currency: upiOptions.currency,
      transactionId: upiOptions.transactionId,
    })
      .then((upi) => {
        console.log(upi.qr);
        console.log(upi.intent);
        setUpi(upi);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }, [upiOptions]);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">Error generating UPI QR Code: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      border={1}
      borderRadius={2}
      boxShadow={3}
      bgcolor="background.paper"
      m={2}
      boxSizing="border-box"
    >
      {!upi ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd">
                <path d="M95.678 42.9L110 29.835l-6.784-13.516z" fill="#097939" />
                <path d="M90.854 42.9l14.322-13.065-6.784-13.516z" fill="#ed752e" />
                <path d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z" fill="#747474" />
              </svg>
            </span>
          </Grid>
          <Grid item xs={12} sm={12} display="flex" justifyContent="center">
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd">
                <path d="M95.678 42.9L110 29.835l-6.784-13.516z" fill="#097939" />
                <path d="M90.854 42.9l14.322-13.065-6.784-13.516z" fill="#ed752e" />
                <path d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z" fill="#747474" />
              </svg>
            </span>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <img src={upi.qr} alt="UPI QR Code" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
          </Grid>
          <Grid item xs={12} sm={8} display="flex" flexDirection="column" justifyContent="center">
            <h1 style={{ color: 'black' }}>{upiOptions.amount}</h1>
            <p style={{ color: 'black' }}>{upiOptions.note}</p>
            <a href={upi.intent}>
              <Button style={{ textDecoration: 'none', marginBottom: '10px', marginTop: '10px' }} variant="contained">
                Pay {upiOptions.amount}
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>Scan QR using any UPI app or Click on "Pay" to open UPI App</span>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default UPI;