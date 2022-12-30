import React from 'react';
import {
  AppContainer,
  GlobalStyle,
} from './AppStyled';
import Header from './Header';
import Stories from './Stories';
import Feed from './Feed';
import FeedPost from './FeedPost';

function App() {
  
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <Stories />
      <Feed />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
      <FeedPost name='Ryan Pontes' time='10:00' content='Site incrivel' />
    </AppContainer>
    </>
  );
}

export default App;
