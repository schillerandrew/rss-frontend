import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Text, Group, Title, Space } from '@mantine/core';
import { withAuth0 } from '@auth0/auth0-react';
import { Anchor } from '@mantine/core';

function RssItem(props) {
  const rssItems = useSelector((state) => state.rssItems.list);

  return (
    <>
      {props.auth0.isAuthenticated
        ? <>
          <Title order={2} align='center'>
            Feeds
          </Title>
          <Space h="sm" />
        </>
        : null}

      {props.auth0.isAuthenticated
        ? rssItems.map((rssItem, index) => {
          return (
            <Card
              shadow='sm'
              p='lg'
              radius='md'
              key={`rssItem-${index}`}
              withBorder>
              <Group position='apart' mt='md' mb='xs'>
                {/* TITLE TEXT */}
                <Text weight={500}>
                  <Anchor href={rssItem.link} target='_blank'>
                    {rssItem.title}
                  </Anchor>
                </Text>
              </Group>
              <Text size='xs'> {rssItem.isoDate.split('T')[0]}</Text>
              {/* MIDDLE TEXT */}
              <Group position='apart' mt='md' mb='xs'>
                <Text size='sm' color='dimmed'>
                  {rssItem.contentSnippet}
                </Text>
              </Group>
            </Card>
          );
        })
        : null}
    </>
  );
}

export default withAuth0(RssItem);
