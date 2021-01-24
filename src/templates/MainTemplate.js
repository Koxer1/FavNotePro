/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/theme/GlobalStyle';
import { theme } from '../components/theme/mainTheme';
import PageContext from '../context/index';

class MainTemplate extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['notes', 'twitters', 'articles'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
