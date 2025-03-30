import { useState, FormEvent } from 'react';
import { TextField, Button, Snackbar, Typography, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
// import { validateEmail } from '../utils/helpers.js'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  console.log(name);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_h1b3wmg';
    const templateID = 'template_b9bt2pa';
    const myPublicKey = 'ueDzNgKv-cIkc0o_j';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Dylan',
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, myPublicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Your message has been submitted!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  const handleInputChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else setMessage(value);
  };

  return (
    <Box>
      <Typography
        variant='h5'
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        We'd love to hear from you!
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: 'white',
          marginTop: 2,
          textAlign: 'center',
          mb: 4,
        }}
      >
        Contact us below for more information about booking, prices, and
        availability
      </Typography>
      <form onSubmit={sendEmail}>
        <TextField
          fullWidth
          label='Name'
          variant='outlined'
          name='name'
          value={name}
          onChange={handleInputChange}
          margin='normal'
          slotProps={{
            input: { style: { color: 'black' } },
          }}
          sx={{
            color: 'black',
            '.MuiOutlinedButton-notchedOutline': {
              borderColor: 'white',
            },
            '.MuiInputLabel-root': {
              color: 'black',
              borderRadius: '10px',
            },
            '.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
                borderRadius: '10px',
                backgroundColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          label='Email'
          variant='outlined'
          type='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          margin='normal'
          slotProps={{
            input: { style: { color: 'black' } },
          }}
          sx={{
            '.MuiOutlinedButton-notchedOutline': {
              borderColor: '#E7D4AB',
            },
            '.MuiInputLabel-root': {
              color: 'black',
            },
            '.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
                borderRadius: '10px',
                backgroundColor: 'white',
              },
            },
            input: {
              color: 'black',
            },
          }}
        />
        <TextField
          fullWidth
          label='Message'
          variant='outlined'
          multiline
          rows={8}
          name='message'
          margin='normal'
          value={message}
          onChange={handleInputChange}
          slotProps={{
            input: { style: { color: 'black' } },
          }}
          sx={{
            '.MuiOutlinedButton-notchedOutline': {
              borderColor: 'white',
            },
            '.MuiInputLabel-root': {
              color: 'black',
            },
            '.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7',
                borderRadius: '10px',
                backgroundColor: 'white',
              },
            },
          }}
        />
        <Button
          variant='outlined'
          size='large'
          type='submit'
          sx={{
            marginTop: 2,
            color: 'black',
            borderColor: 'white',
            backgroundColor: 'white',
            minWidth: 150,
            fontWeight: 'bold',
          }}
        >
          Submit
        </Button>
      </form>
      {errorMessage && (
        <Snackbar open={!!errorMessage} autoHideDuration={6000}>
          <div>{errorMessage}</div>
        </Snackbar>
      )}
      {successMessage && (
        <Snackbar open={!!successMessage} autoHideDuration={6000}>
          <div>{successMessage}</div>
        </Snackbar>
      )}
    </Box>
  );
}
