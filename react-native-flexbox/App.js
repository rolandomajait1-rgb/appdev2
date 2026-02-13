import { StyleSheet, View } from 'react-native';
import React from 'react';
import FlexSection from './components/FlexSection';

export default function App() {
  return (
    <View style={styles.container}>
      <FlexSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
