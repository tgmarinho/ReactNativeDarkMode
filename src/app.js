import * as React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {dark, light, mapping} from '@eva-design/eva';
import {Home} from './containers/home';
import {StatusBar} from 'react-native';

const themes = {
  light,
  dark,
};

export default App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
      <StatusBar
        backgroundColor="blue"
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={themes[theme]}>
        <Home toggleTheme={toggleTheme} />
      </ApplicationProvider>
    </>
  );
};
