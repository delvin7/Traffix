import React, { useState } from 'react';
import { View, Image, Pressable, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const openCamera = async (setImgUrl: React.Dispatch<React.SetStateAction<string>>, setShowSendButton: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImgUrl(result.assets[0].uri || '');
      setShowSendButton(true);
    } else {
      Alert.alert('Cancelled', 'You cancelled the camera.');
    }
  } catch (error) {
    console.error('Camera Error:', error);
    Alert.alert('Error', 'Failed to open the camera.');
  }
};

const OpenCamera: React.FC = () => {
  const [imgUrl, setImgUrl] = useState<string>('');
  const [showSendButton, setShowSendButton] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#005BB5' : '#007AFF',
          },
          styles.btnOpenCamera,
        ]}
        onPress={() => openCamera(setImgUrl, setShowSendButton)}
      >
        <Text style={styles.textBtn}>Open Camera</Text>
      </Pressable>

      <Image resizeMode="contain" style={styles.img} source={{ uri: imgUrl || 'https://placehold.co/300x300' }} />
      
      {showSendButton && (
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#28A745' : '#34C759',
            },
            styles.btnSend,
          ]}
          onPress={() => Alert.alert('Send Button Pressed', 'This button is currently disabled.')}
        >
          <Text style={styles.textBtn}>Send Photo</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  btnOpenCamera: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  btnSend: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OpenCamera;
