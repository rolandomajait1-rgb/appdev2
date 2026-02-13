import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}> just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>Big Blue, then Red</Text>
      <Text style={[styles.red, styles.bigBlue]}>Red, then Big Blue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  red: {
    color: 'red',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
})

export default StyleSection

