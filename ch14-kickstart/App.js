import styles from './styles';
import React from 'react';
import { View } from 'react-native';
import Box from './Box';
import StatusBar from './StatusBar';
 

// Renders a single row with two boxes that stretch
// from top to bottom.
export default() => (
  <View style={styles.container} >
    <StatusBar />
    <Box>#1</Box>
    <Box>#2</Box>
  </View>
);
