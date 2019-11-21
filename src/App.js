import React from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  React.useEffect(() => {
    document.body.style.backgroundImage = `url("images/bg.jpg")`
  })
  return (
    // Important to leave React.Fragment as is, for correct z-Index of Blob and Header
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;

