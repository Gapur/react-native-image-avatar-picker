import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function DemoTitle({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: 'steelblue',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
