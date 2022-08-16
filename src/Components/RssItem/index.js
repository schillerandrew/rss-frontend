import React from 'react';
import { Card, Text, Button, Group } from '@mantine/core';
// import '../../../node_modules/rss-parser/dist/rss-parser.min.js';
// let Parser = require('rss-parser');
// let parser = new Parser();
const { parse } = require('rss-to-json');
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

(async () => {
  var feed1 = await parse(
    CORS_PROXY + 'https://www.reddit.com/r/MurderedByWords/.rss',
  );

  console.log(feed1);
  console.log('CATEGORY');
  for (let i = 0; i < 3; i++) {
    feed1.items[i].statusRead = false;
    console.log(`${[i + 1]}. ${feed1.items[i].title}`);
    console.log(feed1.items[i].statusRead);
  }
})();

function RssItem() {
  return (
    <>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        {/* HEADER TEXT */}
        <Group position='apart' mt='md' mb='xs'>
          <Text weight={500}>Norway Fjord Adventures</Text>
        </Group>
        {/* MIDDLE TEXT */}
        <Text size='sm' color='dimmed'>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>
        {/* BOTTOM BUTTON */}
        <Button variant='light' color='blue' mt='md' radius='md'>
          Book classic tour now
        </Button>
      </Card>
    </>
  );
}

export default RssItem;
