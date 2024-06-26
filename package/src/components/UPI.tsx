"use client"
import { useState, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress, Grid } from '@mui/material';
import { isMobile } from 'react-device-detect';
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface UpiOptions {
  payeeVPA: string;
  payeeName: string;
  amount: number;
  note: string;
  transactionRefUrl?: string;
  transactionRef?: string;
  payeeMerchantCode?: string;
  minimumAmount?: string;
  currency?: string;
  transactionId?: string;
}

const UPI: React.FC<{ upiOptions: UpiOptions }> = ({ upiOptions }) => {
  const [upi, setUpi] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [qrvalue, setqrValue] = useState<string | null>('');
  useEffect(() => {
    let upistring = 'upi://pay?pa='
    upistring = upistring + upiOptions.payeeVPA
    if (upiOptions.payeeName) upistring = upistring + '&pn=' + upiOptions.payeeName
    if (upiOptions.amount) upistring = upistring + '&am=' + upiOptions.amount
    if (upiOptions.minimumAmount) upistring = upistring + '&mam=' + upiOptions.minimumAmount
    if (upiOptions.payeeMerchantCode) upistring = upistring + '&me=' + upiOptions.payeeMerchantCode
    if (upiOptions.transactionId) upistring = upistring + '&tid=' + upiOptions.transactionId
    if (upiOptions.transactionRef) upistring = upistring + '&tr=' + upiOptions.transactionRef
    if (upiOptions.note) upistring = upistring + '&tn=' + upiOptions.note
    setqrValue(upistring)
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
      {!qrvalue ? (
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd">
                <path d="M95.678 42.9L110 29.835l-6.784-13.516z" fill="#097939" />
                <path d="M90.854 42.9l14.322-13.065-6.784-13.516z" fill="#ed752e" />
                <path d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z" fill="#747474" />
              </svg>
            </span>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd">
                <path d="M95.678 42.9L110 29.835l-6.784-13.516z" fill="#097939" />
                <path d="M90.854 42.9l14.322-13.065-6.784-13.516z" fill="#ed752e" />
                <path d="M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z" fill="#747474" />
              </svg>
            </span>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="center">
            <QRCodeCanvas value={qrvalue} />
            {/* <img src={upi.qr} alt="UPI QR Code" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} /> */}
          </Grid>
          <Grid item xs={12} sm={8} display="flex" flexDirection="column" justifyContent="center">
            <h1 style={{ color: 'black' }}>₹{upiOptions.amount}</h1>
            <p style={{ color: 'black' }}>{upiOptions.note}</p>
            {isMobile && (
              <a href={upi.intent} style={{ textDecoration: "none" }}>
                <Button fullWidth style={{ textDecoration: 'none', marginBottom: '10px', marginTop: '10px' }} variant="contained">
                  Pay ₹{upiOptions.amount}
                </Button>
              </a>
            )}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <span style={{ color: 'black' }}>Scan QR using any UPI app or Click on "Pay" to open UPI App</span>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default UPI;