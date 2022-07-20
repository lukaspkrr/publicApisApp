import React, { useCallback, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { store, persistor } from '~/store';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import {
  dark,
  light,
  usePersistState,
  ThemeToggleContext,
} from '~/styles/themes';
import { navigationRef } from './services/NavigationService';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', dark);

  const toggle = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  const preferences = useMemo(
    () => ({
      toggleTheme: toggle,
    }),
    [toggle],
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeToggleContext.Provider value={preferences}>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={
                theme.title === 'light' ? 'dark-content' : 'light-content'
              }
            />
            <NavigationContainer ref={navigationRef}>
              <Routes />
            </NavigationContainer>
          </ThemeProvider>
        </ThemeToggleContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
