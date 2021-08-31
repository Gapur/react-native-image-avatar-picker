import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function DemoResponse({children}) {
  if (children == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(children, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcecfb',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: 'black',
  },
});
