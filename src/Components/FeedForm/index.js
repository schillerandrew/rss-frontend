import React from 'react';
import { useDispatch } from 'react-redux';
import { withAuth0 } from '@auth0/auth0-react';
import { TextInput, Button, Group, Box, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getRssItems } from '../../Store/rssItem';

// const axios = require('axios');

const FeedForm = (props) => {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      rssFeedUrl: '',
    },
  });

  const handleSubmit = (event) => {
    let { rssFeedUrl } = event;
    dispatch(getRssItems(rssFeedUrl));
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
              <Group>
                <TextInput
                  // required
                  // label='Add Feed (URL link to .xml file)'
                  placeholder='Add Feed (URL link to .xml file)'
                  {...form.getInputProps('rssFeedUrl')}
                />
                {/* <Group position='left' mt='md'> */}
                <Button type='submit'>Submit</Button>
              </Group>
              {/* </Group> */}
            </form>
          </Box>
          <Space h="md" />
        </>
      ) : null}
    </>
  );
};

export default withAuth0(FeedForm);
