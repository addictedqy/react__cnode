import React from 'react';
import ReactDom from 'react-dom';

import Header from '../presntaional/header/header.jsx';
import Footer from '../presntaional/footer/footer.jsx';

class HeaderAndFooter extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default HeaderAndFooter