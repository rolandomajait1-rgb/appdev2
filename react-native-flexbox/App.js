import { StyleSheet, View } from 'react-native';
import React from 'react';
import AlignSelfSection from './components/AlignSelfSection';
import AlignContentSection from './components/AlignContentSection';
import FlexWrapSection from './components/FlexWrapSection';
import JustifyContentSection from './components/JustifyContentSection';
import AlignItemsSection from './components/AlignItemsSection';
import FlexDirectionSection from './components/FlexDirectionSection';
import FlexSection from './components/FlexSection';
import LayoutDirectionSection from './components/LayoutDirectionSection';


export default function App() {
  return (
    <View style={styles.container}>
      <AlignSelfSection />
      <AlignContentSection />
      <FlexWrapSection />
      <JustifyContentSection />
      <AlignItemsSection />
      <FlexDirectionSection />
      <FlexSection />
      <LayoutDirectionSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
