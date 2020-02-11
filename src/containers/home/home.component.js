import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';

const StarIcon = styles => <Icon fill="#f1f505" name="star" />;

export const Home = props => (
  <Layout style={styles.container}>
    <Text category="h4">Welcome to UI Kitten</Text>
    <Button onPress={props.toggleTheme} icon={StarIcon}>
      Toggle Dark Mode 🌚
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
