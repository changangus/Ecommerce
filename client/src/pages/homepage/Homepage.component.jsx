import React from 'react';
import Directory from '../../components/directory/Directory.component';
import { HomePageContainer } from './Homepage.styles';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory /> 
    </HomePageContainer>
  )
};

export default Homepage;
