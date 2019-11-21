import React from 'react';

import Header from './Header';
import Content from './Content';
import Loading from './Loading';

import anime from 'animejs-hooks';

function App() {
  const [loading, setLoading] = React.useState(true)
  const onLoad = () => {
    // replace with large_bg for testing purposes. (2 occurences)
    document.body.style.backgroundImage = `url("images/bg.jpg")`
    setTimeout(() =>setLoading(false), 100);
  }
  return (
    // Important to leave React.Fragment as is, for correct z-Index of Blob and Header
    loading ?
      <React.Fragment>
        <img src="images/bg.jpg" style={{ display: 'none' }} onLoad={onLoad} alt="haules" />
        <Loading onLoad={onLoad} />
      </React.Fragment>
      :
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
  );
}

export default App;

