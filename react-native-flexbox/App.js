import { StyleSheet, View } from 'react-native';
import React from 'react';
import FlexWrapSection from './components/FlexWrapSection';

export default function App() {
  return (
    <View style={styles.container}>
      <FlexWrapSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
