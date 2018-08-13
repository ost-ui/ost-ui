import React from 'react';
import RouteConfig from './router/index'
import './style/resets.less';
import './style/common.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('NODE_ENV===>', process.env.NODE_ENV);
  }

  render() {
    return (
      <RouteConfig/>
    );
  }
}