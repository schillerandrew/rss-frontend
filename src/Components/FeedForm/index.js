import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withAuth0 } from '@auth0/auth0-react';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getRssItems } from '../../Store/rssItem';

// const axios = require('axios');

const FeedForm = (props) => {
  const dispatch = useDispatch();
  const [rssItems, setRssItems] = useState([]);
  const form = useForm({
    initialValues: {
      rssFeedUrl: '',
    },
  });

  const handleSubmit = (event) => {
    let { rssFeedUrl } = event;
    dispatch(getRssItems(rssFeedUrl));
    // const sendDataToServer = async () => {
    //   try {
    //     // console.log('PAYLPOAD', payload);
    //     // let res = await axios.get(
    //     //   `http://localhost:3001/feeds?url=${payload.rssFeedUrl}`
    //     // );
    //     // console.log('HANDLE SUBMIT', res.data);
    //     // setRssItems(res.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // sendDataToServer();
  };

  /// REDUX pass to parent then rssItems
  // console.log('RsssITEMS', rssItems);

  // const getFeeds = async () => {
  //   try {
  //     let request = await axios.get('http://localhost:3001/feeds');
  //     console.log('REQUEST', request.data.items);
  //     // setRssItems(request.data.items);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

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
