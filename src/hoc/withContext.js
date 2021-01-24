import React from 'react';
import PageContext from '../context/index';

const withContext = (Component) =>
  function contexComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };

export default withContext;
