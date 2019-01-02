import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';
import Box from './Box';

// Renders a single row with two boxes that stretch
// from top to bottom.

export default() => (
  <View style={styles.container} >
    <Box>#1</Box>
    <Box>#2</Box> 
  </View>
);
