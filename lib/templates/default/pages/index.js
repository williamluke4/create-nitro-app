// @flow
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import Head from '../components/head';
import Nav from '../components/nav';

const muiTheme = getMuiTheme({ userAgent: 'all' });

const tilesData = [
  {
    img: 'https://cdn-images-1.medium.com/max/1184/1*WhjZoHI8UoeYlVt0g9B-7Q.png',
    title: 'Next JS',
    subtitle: '',
    featured: true,
  },
  {
    img: 'https://www.styled-components.com/static/meta.png',
    title: 'Styled Components',
    subtitle: 'Visual primitives for the component age.',
  }, {
    img: 'https://material-ui-next.com/static/brand.png',
    title: 'Material-UI',
    subtitle: 'React components that implement Google\'s Material Design',
  },
];

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  justify-content: 'space-around';
  margin:5px 10%;
`;

export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Head title="Home" />
      <Nav />
      <style jsx>{`
      .gridList {
        width: 40em;
        overflow-y:'hidden';
      }
    `}
      </style>
      <GridWrapper>
        <Paper zDepth={1} style={{ padding: '50px', width: '100%' }}>
          <GridList
            cols={2}
            cellHeight={200}
            padding={1}
            className="gridList"
          >
            {tilesData.map(tile => (
              <GridTile
                key={tile.img}
                title={tile.title}
                titleStyle={{ color: 'black', fontSize: '25px' }}
                subtitle={tile.subtitle}
                actionPosition="left"
                titlePosition="bottom"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img alt="Title" src={tile.img} />
              </GridTile>
      ))}
          </GridList>
        </Paper>
      </GridWrapper>
    </div>
  </MuiThemeProvider>
);
