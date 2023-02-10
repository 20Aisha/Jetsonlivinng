

import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Share, Image, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import Video from 'react-native-video';
// import Footer from './Footer';
import { Checkbox, List, MD3Colors } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-paper';



export default function VideoScreen() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [checked, setChecked] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [isMute, setMute] = useState(false);

  let Url = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

  const muteVideo = () => setMute(!isMute);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `video share ${Url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          // result.activityType(Url)
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  return (

    <View style={styles.container}>


      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          headers: {
            Authorization: 'bearer some-token-value',
            'X-Custom-Header': 'some value'
          }
        }}
        muted={isMute}
        controls={true}
        
        // onPictureInPictureStatusChanged={true}
        // onRestoreUserInterfaceForPictureInPictureStop
        // fullscreenOrientation="landscape"
        // useNativeControls
        // resizeMode="contain"
        // isLooping
// onProgress={true}

        // fullscreenOrientation='true'
        // fullscreenAutorotate={true}
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <View style={styles.video}>
        <Video
          mute={isMute}
          height={300}
          play={true}
          videoId={'84WIaK3bl_s'}
        />
      </View> */}

      <List.Section style={{ width: '100%', }}>
        <List.Subheader>Some title</List.Subheader>
        <List.Item title="loerm ipsum dollar magnam"
          left={() => <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }} />}
        />
        <List.Item title="loerm ipsum dollar magnam"
          left={() => <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }} />}
        />
        <List.Item title="loerm ipsum dollar magnam"
          left={() => <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }} />}
        />
        <List.Item title="loerm ipsum dollar magnam"
          left={() => <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }} />}
        />
      </List.Section>

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>

      <Card>
        <View
          style={styles.headerIcon}
        >
          <TouchableOpacity>

            <MaterialIcons name="save-alt" size={34} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="record-circle-outline" size={34} />
          </TouchableOpacity >
          <TouchableOpacity onPress={() => muteVideo()}>
            <Octicons name={isMute ? "mute" : "unmute"} size={34} />
          </TouchableOpacity >
          <TouchableOpacity onPress={() => onShare()}>


            <FontAwesome name="share-square-o" size={34} />
          </TouchableOpacity >
          <TouchableOpacity >
            <MaterialIcons name="crop-landscape" size={34} />
          </TouchableOpacity >
        </View>
      </Card>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "-0%"
  },
  headerIcon: {
    display: "flex",
    flexDirection: "row",
    // flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
    // backgroundColor:"yellow",
    borderColor: "red",
    // shadowOpacity: 0.25,
    // shadowRadius: 16.84,
    // shadowColor: "#000",
    // elevation: 3,
    height: 50,
    alignItems: "center",
    // borderRadius: 5,
    // shadowColor: 'skyblue',

  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
    // alignItems: "flex-start"
  },
  buttons: {
    margin: 16
  },
  containerCheckbox: {
    flex: 1,
    alignItems: 'baseline',
    // justifyContent: 'flex-start',
    // marginBottom: 20,
    // flexDirection: 'row-reverse',
    width: "100%"
  },
});


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Button, View } from 'react-native';
// import { Video } from 'expo-av';
// import React from 'react';

// export default function VideoScreen() {
//     const video = React.useRef(null);
//     const secondVideo = React.useRef(null);
//     const [status, setStatus] = React.useState({});
//     const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

//     return (
//         <View style={styles.container}>
//             <Video
//                 ref={video}
//                 style={styles.video}
//                 source={{ uri: "https://media.graphassets.com/jyLnBuPTOaiOgZxP0fR3" }}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={setStatus}
//             />
//             <View style={styles.buttons}>
//                 <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
//                 <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
//             </View>
//             <Video
//                 ref={secondVideo}
//                 style={styles.video}
//                 source={require("./demo.mp4")}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={setStatusSecondVideo}
//             />
//             <View style={styles.buttons}>
//                 <Button title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
//                 <Button title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
//             </View>
//             <StatusBar style="auto" />
//         </View>
//     );
// }