import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const axios = require('axios');

const FeedForm = (props) => {
  const form = useForm({
    initialValues: {
      rssFeedUrl: ''
    }
  });

  const handleSubmit = (event) => {
    let payload = event;
    const sendDataToServer = async () => {
      try {
        console.log('PAYLPOAD', payload);
        let res = await axios.get(`http://localhost:3001/feeds?url=${payload.rssFeedUrl}`);
        console.log('HANDLE SUBMIT', res);
      } catch (error) {
        console.error(error);
      }
    };
    sendDataToServer();
  };

  return (
    <>
      {props.auth0.isAuthenticated ? (
        <>
          <Box sx={{ maxWidth: 300 }} mx='auto'>
            <form
              onSubmit={form.onSubmit((values) => {
                // console.log(values);
                handleSubmit(values);
              })}>
              <TextInput
                // required
                label='Add Feed'
                placeholder='Enter RSS feed URL'
                {...form.getInputProps('rssFeedUrl')}
              />

              <Group position='right' mt='md'>
                <Button type='submit'>Submit</Button>
              </Group>
            </form>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default withAuth0(FeedForm);
