import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

import {images} from './assets';

export default function App() {
  const [response, setResponse] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const onImageLibraryPress = React.useCallback(() => {
    const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setResponse);
  }, []);

  const uri = response?.assets && response.assets[0].uri;

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
          <Image
            style={styles.avatarImage}
            source={uri ? {uri} : images.avatar}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setVisible(true)}>
            <Image style={styles.addButtonIcon} source={images.addButton} />
          </TouchableOpacity>
          <Text style={styles.usernameText}>Gapur Kassym</Text>
        </View>
      </ImageBackground>
      <Modal
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        style={styles.modal}>
        <SafeAreaView style={styles.options}>
          <Pressable style={styles.option} onPress={onImageLibraryPress}>
            <Image style={styles.icon} source={images.image} />
            <Text>Library</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={onCameraPress}>
            <Image style={styles.icon} source={images.camera} />
            <Text>Camera</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
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
  icon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
