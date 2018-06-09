import * as React from 'react';
import { withApollo, compose } from 'react-apollo';
import withData from '../lib/withData';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;
interface IProps {};
interface IState {};

class HomePage extends React.Component<IProps, IState> {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout>

      </Layout>
    );
  }
}

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
)(HomePage);
