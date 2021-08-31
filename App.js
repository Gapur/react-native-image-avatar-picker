import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import { images } from './assets';

function App() {
  const [response, setResponse] = React.useState(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTitleText}>Avatar Picker</Text>
        </View>
      </SafeAreaView>
      <View style={styles.avatar}>
        <Image style={styles.avatarImage} source={images.avatar} />
        <TouchableOpacity style={styles.addButton}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const actions = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Take Video',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
    },
  },
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
    },
  },
  {
    title: `Select Image or Video\n(mixed)`,
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'mixed',
    },
  },
];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
  safeArea: {
    backgroundColor: '#62d1bc',
  },
  topBar: {
    height: 50,
    backgroundColor: '#62d1bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: '#ffffff',
    fontSize: 20,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '32%',
  },
  avatarImage: {
    height: 260,
    width: 260,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 104,
    bottom: 16,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },
});

export default App;
