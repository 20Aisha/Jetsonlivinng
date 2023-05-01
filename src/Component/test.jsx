import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View, Button
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Clipboard from '@react-native-community/clipboard';
import { request, PERMISSIONS } from 'react-native-permissions';
const Test = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const viewShotRef = useRef(null);
  const startRecording = async () => {
    console.log("raza");
    try {
      console.log("raza");
      const granted = await request(PERMISSIONS.IOS.RECORD_AUDIO);
      if (granted === 'denied') {
        console.log('Permission to record audio was denied');
        return;
      }
      setIsRecording(true);
      console.log('Screen recording started');
    } catch (error) {
      console.error(error);
    }
  };
  const stopRecording = async () => {
    try {
      setIsRecording(false);
      console.log('Screen recording stopped');
      const snapshot = await viewShotRef.current.capture('video', {
        format: 'mp4',
        quality: 1,
        result: 'file',
      });
      const dir = RNFS.DocumentDirectoryPath;
      const fileName = 'ScreenRecording-' + new Date().toISOString() + '.mp4';
      const filePath = `${dir}/${fileName}`;
      console.log(filePath,"filePathfilePath");
      await RNFS.moveFile(snapshot, filePath);
      console.log('Screen recording saved to:', filePath);
      Clipboard.setString(filePath);
      console.log('File path copied to clipboard:', filePath);
      setFilePath(filePath);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView >

      <Button onPress={isRecording ? stopRecording : startRecording} title={isRecording ? 'Stop recording' : 'Start recording'} />

      <TouchableOpacity
        onPress={isRecording ? stopRecording : startRecording}
      >
        <Text >
          {isRecording ? 'Stop recording' : 'Start recording'}
        </Text>
      </TouchableOpacity>
      <ViewShot ref={viewShotRef}>
        {/* Your app content here */}
      </ViewShot>
      {filePath && (
        <View >
          <Text>{filePath}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Test;