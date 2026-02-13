import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import StyleSection from './components/StyleSection';
import FixedDimensionsSection from './components/FixedDimensionsSection';
import FlexDimensionsSection from './components/FlexDimensionsSection';
import PercentageDimensionsSection from './components/PercentageDimensionsSection';

export default function App() {

  return (
    <View style={styles.container}>

      <StyleSection />
      <FixedDimensionsSection />
      <FlexDimensionsSection />
      <PercentageDimensionsSection />
    </View>
  );
}
