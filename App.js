import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {images} from './assets';

export default function App() {
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
      <ImageBackground
        style={styles.imageBackground}
        source={images.whatsappBackground}>
        <View style={styles.avatar}>
          <Image style={styles.avatarImage} source={images.avatar} />
          <TouchableOpacity style={styles.addButton}>
            <Image style={styles.addButtonIcon} source={images.addButton} />
          </TouchableOpacity>
          <Text style={styles.usernameText}>Gapur Kassym</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

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
  imageBackground: {
    flex: 1,
  },
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 104,
    bottom: 40,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
