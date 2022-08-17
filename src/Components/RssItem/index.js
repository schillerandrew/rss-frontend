import React, { useEffect } from 'react';
import { Card, Text, Button, Group } from '@mantine/core';

import data from '../../data.json';

const axios = require('axios');

function RssItem() {
  let rssItems = data;

  // rssItems.push(rssItemtest);

  // useEffect(() => {
  //   (async () => {
  //     var feed = await parse(
  //       CORS_PROXY + 'https://www.reddit.com/r/MurderedByWords/.rss'
  //     );

  //     for (let i = 0; i < 3; i++) {
  //       feed.items[i].statusRead = false;
  //       // rssItems.push(feed.items[i]);
  //       // rssItems.push(rssItemtest);
  //     }
  //   })();

  //   console.log(rssItems);
  // }, []);

  const getFeeds = async () => {
    // const get = {
    //   method: 'GET',
    //   baseURL: 'http://localhost:3001',
    //   url: '/feeds',
    // }
    try {
      let request = await axios.get('http://localhost:3001/feeds');
      console.log('REQ', request);
      return request;
    } catch (e) {
      console.error(e);
    }
  };

  getFeeds();

  return (
    <>
      {rssItems.map((rssItem) => {
        return (
          <Card shadow='sm' p='lg' radius='md' key={rssItem.id} withBorder>
            <Group position='apart' mt='md' mb='xs'>
              {/* TITLE TEXT */}
              <Text weight={500}>{rssItem.title}</Text>
            </Group>
            {/* MIDDLE TEXT */}
            <Text size='sm' color='dimmed'>
              TEXT TO INPUT!!!!!!!!!!
            </Text>
            {/* BOTTOM BUTTON */}
            <Button variant='light' color='blue' mt='md' radius='md'>
              {rssItem.statusRead}
            </Button>
          </Card>
        );
      })}
    </>
  );
}

export default RssItem;
