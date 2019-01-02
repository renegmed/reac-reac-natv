import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';
import Box from './Box';

// Notice how the rendered JSX is much less verbose?
// The "<Box>" component encapsulates a lot of the
// extraneous style code.

export default() => (
  <View style={styles.container} >
    <Box>#1</Box>
    <Box>#2</Box>
    <Box>#3</Box>
  </View>
);
