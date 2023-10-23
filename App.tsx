import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SideBarMenuAlter } from './src/navigator/SideBarMenuAlter';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <SideBarMenu /> */}
      <SideBarMenuAlter />
    </NavigationContainer>
  );
};
