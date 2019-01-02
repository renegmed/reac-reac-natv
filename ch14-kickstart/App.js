import styles from './styles';
import React from 'react';
import { View, Text } from 'react-native';

export default() => (
  <View style={styles.container} >
    <View style={styles.box}>
      <Text style={styles.boxText}>I'm in a box</Text>
    </View>
  </View>
);
