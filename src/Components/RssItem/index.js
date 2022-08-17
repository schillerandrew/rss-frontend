import React, { useEffect, useState } from 'react';
import { Card, Text, Button, Group } from '@mantine/core';

import data from '../../data.json';

const axios = require('axios');

function RssItem() {
  // let rssItems = data;
  // console.log('HOWS THE DATA LOOKING', data);
  const [rssItems, setRssItems] = useState(data);

  useEffect(() => {
    const getFeeds = async () => {
      try {
        let request = await axios.get('http://localhost:3001/feeds');
        setRssItems(request.data[0].feedsArray[0].items);
      } catch (e) {
        console.error(e);
      }
    };
    getFeeds();
  }, []);

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
