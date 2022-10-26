import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Head from 'next/head';
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Flex,
  Button,
  Container,
  Alert,
} from 'theme-ui';

export default function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Sending...');

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          return res.json();
        }
      })
      .then((jsonRes) => {
        console.log('Response succeeded!');
        setSubmitted(true);
      })
      .catch((err) => console.log(err));

    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section sx={styles.container} id="contact">
      <Container>
        {submitted ? (
          <div>Your message was sent.</div>
        ) : (
          <Box as="form" p={2} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Label htmlFor="name">Name</Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: 'Name is required.' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="name"
                    placeholder="What's your name?"
                    mb={3}
                  />
                )}
              />
              {errors.name && (
                <Alert variant="primary" mb={2}>
                  {errors.name.message}
                </Alert>
              )}
            </Box>
            <Box>
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid.',
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="What's your email?"
                    mb={3}
                  />
                )}
              />
              {errors.email && (
                <Alert variant="primary" mb={2}>
                  {errors.email.message}
                </Alert>
              )}
            </Box>
            <Box>
              <Label htmlFor="message">Message</Label>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: 'Message is required.' }}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="What can I help you with?"
                    rows={6}
                    mb={3}
                  />
                )}
              />
              {errors.message && (
                <Alert variant="primary" mb={2}>
                  {errors.message.message}
                </Alert>
              )}
            </Box>
            <Button type="submit">Submit</Button>
          </Box>
        )}
      </Container>
    </section>
  );
}

const styles = {
  container: {
    pt: ['100px', '100px', '105px', '106px', null, null, '110px', '112px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
  },
  forms: {
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      maxWidth: '250px',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
};
