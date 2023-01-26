import RssItem from './Components/RssItem';
import Auth from './Components/Auth';

import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  // Aside,
  // MediaQuery,
  // Burger,
  Title,
  useMantineTheme,
} from '@mantine/core';
import FeedForm from './Components/FeedForm';

function App() {
  const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint='sm'
        asideOffsetBreakpoint='sm'
        navbar={
          <Navbar
            p='md'
            hiddenBreakpoint='sm'
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}>

          </Navbar>
        }
        // aside={
        //   <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        //     <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
        //       {/* <Text>Application sidebar</Text> */}

        //     </Aside>
        //   </MediaQuery>
        // }
        footer={
          <Footer height={10} p='md'>
            {/* Application footer */}
          </Footer>
        }
        header={
          <Header height={70} p='md'>
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              {/* <MediaQuery largerThan='sm' styles={{ display: 'none' }}> */}
              {/* <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              /> */}
              {/* </MediaQuery> */}
              <Title order={1}>RSS Reader</Title>
              {/* <Text>RSS Reader</Text> */}
            </div>
          </Header>
        }>
        {/* APP COMPONENTS GO HERE */}
        {/* <Title order={2} align='center'>
          Feeds
        </Title> */}
        {/* <Text>OUR APP</Text> */}
        <FeedForm />
        <Auth />
        <RssItem />
      </AppShell>
    </>
  );
}

export default App;
