import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SideBarMenuAlter } from './src/navigator/SideBarMenuAlter';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideBarMenuAlter />
      </AppState>
    </NavigationContainer>
  );
};


const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
