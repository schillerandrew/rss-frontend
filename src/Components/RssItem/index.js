import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Text, Button, Group } from '@mantine/core';
import { withAuth0 } from '@auth0/auth0-react';

function RssItem(props) {
  const rssItems = useSelector(state => state.rssItems.list);
  // const [rssItems, setRssItems] = useState(data);

  // useEffect(() => {
  //   const getFeeds = async () => {
  //     try {
  //       let request = await axios.get('http://localhost:3001/feeds');
  //       console.log('REQUEST', request.data.items);
  //       setRssItems(request.data.items);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   getFeeds();
  //   // const processFeeds = () => {
  //   //   const feedsFromServer = getFeeds();
  //   //   console.log('FEEDS FROM SERVER', feedsFromServer);
  //   //   // setRssItems(feedsFromServer);
  //   // };
  //   // processFeeds();
  // }, []);

  // const getFeeds = async () => {
  //   try {
  //     let request = await axios.get('http://localhost:3001/feeds');
  //     console.log('REQUEST', request.data.items);
  //     setRssItems(request.data.items);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // console.log('DATA', data);
  console.log('rssITEMS', rssItems);

  return (
    <>
      {props.auth0.isAuthenticated
        ? rssItems.map((rssItem, index) => {
          return (
            <Card shadow='sm' p='lg' radius='md' key={`rssItem-${index}`} withBorder>
              <Group position='apart' mt='md' mb='xs'>
                {/* TITLE TEXT */}
                <Text weight={500}>{rssItem.title}</Text>
              </Group>
              {/* MIDDLE TEXT */}
              <Text size='sm' color='dimmed'>
                {rssItem.contentSnippet}
              </Text>
              {/* BOTTOM BUTTON */}
              <Button variant='light' color='blue' mt='md' radius='md'>
                {rssItem.link}
              </Button>
            </Card>
          );
        })
        : null}
    </>
  );
}

export default withAuth0(RssItem);
