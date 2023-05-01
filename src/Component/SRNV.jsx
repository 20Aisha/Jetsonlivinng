import React, { useState, useEffect, useRef } from 'react';
import {
  View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Share, Text, Button, SafeAreaView
} from 'react-native';
import Video from 'react-native-video';
import ProgressBar from './ProgressBar';
import ViewShot from 'react-native-view-shot';
import Octicons from 'react-native-vector-icons/Octicons';
import Orientation from 'react-native-orientation-locker';
import CameraRoll from '@react-native-community/cameraroll';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Checkbox, List, MD3Colors } from 'react-native-paper';
import PipHandler, { usePipModeListener } from 'react-native-pip-android';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Peer } from "peerjs";
import { startRecording, stopRecording } from 'react-native-record-screen';
import { usePreventScreenCapture } from 'expo-screen-capture';
// import ScreenRecorder from 'react-native-record-screen';
// import RecordScreen, { RecordingStartResponse } from 'react-native-record-screen';
// import RNRecordScreen from 'react-native-record-screen';
// import { RecordScreen, stopRecording } from 'react-native-record-screen';
import {
  CaptureProtection,
  CaptureProtectionModuleStatus,
} from 'react-native-capture-protection';

import RecordScreen from 'react-native-record-screen';



const windowHeight = Dimensions.get('window').width * (12 / 16);
const windowWidth = Dimensions.get('window').width;
// const screenRecorder = new RecordingStartResponse();

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

const SRNV = () => {

  const ref = useRef();
  const videoRef = React.createRef();
  const inPipMode = usePipModeListener();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControl, setShowControl] = useState(true);
  const [isMute, setMute] = useState(false);
  const [checked, setChecked] = useState(false);
  let Url = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
  // const peer = new Peer("https://burickg.ddns.net:8846/live/7d244d7fe465802738fa38efc849c144-1.m3u8");

  // const conn = peer.connect("https://burickg.ddns.net:8846/live/7d244d7fe465802738fa38efc849c144-1.m3u8");
  // conn.on("open", () => {
  //   conn.send("hi!");
  // });
  // console.log(peer, "peerpeerpeer");
  // console.log(conn, "connconnconnconn");
//   useEffect(() => {
//     CaptureProtection.addEventListener(({ status, isPrevent }) => {
//       console.log(
//         'CaptureProtection => ',
//         CaptureProtectionModuleStatus[status],
//         isPrevent
//       );
//     });
//   }, []);


  
  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  if (inPipMode) {
    return (
      <View style={styles.container}>
        <Text>PIP Mode</Text>
      </View>
    );
  }

  // console.log(isMute, "isMute")
  const muteVideo = () => setMute(!isMute);

  const handleOrientation = orientation => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullscreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullscreen(false);
      StatusBar.setHidden(false);
    }
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const handlePlay = () => {
    setTimeout(() => setShowControl(false), 500);
    setPlay(true);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 15);
    setCurrentTime(currentTime - 15);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 15);
    setCurrentTime(currentTime + 15);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  const handleFullscreen = () => {
    if (fullscreen) {
      Orientation.unlockAllOrientations();
    } else {
      Orientation.lockToLandscapeLeft();
    }
  };

  const onLoadEnd = data => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = data => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

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

  const takeScreenShot = () => {
    ref.current.capture().then(uri => {
      CameraRoll.save(uri, { type: "photo", album: "QR codes" });
      alert("Took screenshot");
    });
  };




  // const handleRecord = () => {
  const handleRecord = async () => {
    try {
      const options = {
        fileName: 'file://var/mobile/Containers/Data/Application/{ApplicationUUID}/Documents/Replays/my_file_name.mp4',
        // fileName: '../node_modules/react-native/android/my_file_name.mp4',
        app: 'com.myapp',
      };
      const result = await RecordScreen.startRecording(options);
      // const result = await CaptureProtection.preventScreenRecord();;
      console.log('Recording started:', result);
      const allowScreenRecord = await CaptureProtection.preventScreenRecord(true);
      console.log('Recording started:', allowScreenRecord);
    } catch (error) {
      console.log('Error recording:', error);
    };
    // RecordScreen.startRecording({
    //   fileName: 'myrecording.mp4',
    //   microphoneEnabled: true,
    //   videoBitrate: 4000000,
    //   videoResolution: '720',
    // });

    const preventStatus = await CaptureProtection.getPreventStatus();
    // CaptureProtection.allowScreenRecord()
    if (preventStatus?.record) {
      // screen record is prevent
      console.log("Start===>", preventStatus);
    }
    if (preventStatus?.screenshot) {
      console.log("Start===>", preventStatus);
      // console.log("Start===>");
      // screenshot is prevent
    }
    console.log("Start===>");

    CaptureProtection.allowScreenRecord({
      crop: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 180,
        x: 0,
        y: 80,
        fps: 24,
      },
    }).then((res) => console.log(res, "response")).catch((error) => console.error(error, "error"))

    const isScreenRecord = await CaptureProtection.isScreenRecording();

    if (isScreenRecord) {
      // user already recoding

      console.log(isScreenRecord,"isScreenRecord");
    }
    

    CaptureProtection.addEventListener(({ status, isPrevent }) => {
        console.log(
          'CaptureProtection => ',
          CaptureProtectionModuleStatus[status],
          isPrevent
        );
      });
  
    // CaptureProtection.allowScreenRecord(({ status, isPrevent }) => {
    //   if (
    //     status == CaptureProtectionModuleStatus.RECORD_DETECTED_START &&
    //     isPrevent?.record
    //   ) {
    //     Alert.alert('Warning', 'record detected');
    //     console.log(isPrevent, "raza");
    //   }
    // })

    // await CaptureProtection.preventScreenRecord();
    // await CaptureProtection.allowScreenRecord();
    // RecordScreen.startRecording("gallery")
  }

  async function StopScreenRecord() {
    //   // recording stop

    // const res = RecordScreen.stopRecording().then((res) => console.log(res, "<=====res")).catch((error) =>
    //   console.warn(error)
    // );
    // if (res) {
    //   const url = res;
    //   console.log(url, "video response");
    // }
    // RecordScreen.stopRecording().then((filePath) => {
    //   console.log(`Recording saved to ${filePath}`);
    // }).catch((error) => {
    //   console.error(error);
    // });
    // console.log("End===>");
    CaptureProtection.preventScreenRecord().then((res) => console.log(res, "<=====res")).catch((error) =>
      console.warn(error)
    );
    // const res = await RecordScreen.stopRecording().catch((error) =>
    //   console.warn(error)
    // );

    // if (res) {
    //   const url = res.result.outputURL;
    //   console.log(url);
    // }
    // console.log(res);
  }
  // const isRecording = screenRecorder.isRecording();

  return (
    <View style={fullscreen ? styles.fullscreenContainer : styles.container}>
      <ViewShot
        ref={ref}
        options={{
          fileName: 'file-name', // screenshot image name
          format: 'jpg', // image extention
          quality: 0.9 // image quality
        }}>
        {/* <Text> Start Screen Shot</Text> */}

        <TouchableOpacity onPress={handleControls}>
          <>
            <Video
              ref={videoRef}
              source={require("./videoplayback.mp4")}
              style={fullscreen ? styles.fullscreenVideo : styles.video}
              controls={false}
              resizeMode={'contain'}
              onLoad={onLoadEnd}
              onProgress={onProgress}
              onEnd={onEnd}
              paused={!play}
              muted={isMute}
              pictureInPicture={true}
            />

            {showControl && (
              <View style={styles.controlOverlay}>


                <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}
                  style={styles.fullscreenShare}
                >
                  <MaterialCommunityIcons name="picture-in-picture-bottom-right" size={34} color="gray" />
                </TouchableOpacity >

                <View
                  style={styles.IconScreen}
                >

                  <TouchableOpacity onPress={() => onShare()} >
                    <FontAwesome name="share-square-o" size={34} color="gray" />
                  </TouchableOpacity >

                  <TouchableOpacity onPress={takeScreenShot}>
                    <MaterialCommunityIcons name="monitor-screenshot" size={34} color="gray" />
                  </TouchableOpacity >

                  {/* <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}
                  // style={styles.fullscreenShare}
                  >
                    <MaterialCommunityIcons name="picture-in-picture-bottom-right" size={34} color="gray" />
                  </TouchableOpacity > */}

                  <TouchableOpacity
                    onPress={() => muteVideo()}>
                    <Octicons name={isMute ? "mute" : "unmute"} size={34} color="gray" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleFullscreen}
                  >
                    {fullscreen ? <MaterialCommunityIcons name='fullscreen-exit' size={35} color="gray" /> : <MaterialCommunityIcons name='fullscreen' size={34} color="gray" />}
                  </TouchableOpacity>
                </View>
                <ProgressBar
                  currentTime={currentTime}
                  duration={duration > 0 ? duration : 0}
                  onSlideStart={handlePlayPause}
                  onSlideComplete={handlePlayPause}
                  onSlideCapture={onSeek}
                  onPlay={handlePlay}
                  onMute={muteVideo}
                  onPause={handlePlayPause}
                  playing={play}
                  skipBackwards={skipBackward}
                  skipForwards={skipForward}
                />

              </View>
            )}
          </>
        </TouchableOpacity>

      </ViewShot>


      <List.Section >
      
        <Button
          onPress={handleRecord}
          title="Start Learn More"
          color="#841584"
        />

        <Button
          onPress={StopScreenRecord}
          title="Stop Learn More"
          color="#841584"
        />

       <Button
        title="set Record Protect Screen by Text"
        onPress={() => {
          CaptureProtection.setScreenRecordScreenWithText?.('TEST!');
        }}
      />
      <Button
        title="set Record Protect Screen by Image"
        onPress={() => {
          CaptureProtection.setScreenRecordScreenWithImage?.(
            require('../assets/splashScreen2.jpg')
          );
        }}
      />
      <Button
        title="allow Record"
        onPress={() => {
          CaptureProtection.allowScreenRecord();
        }}
      />
      <Button
        title="prevent Record"
        onPress={() => {
          CaptureProtection.preventScreenRecord();
        }}
      />
      <Button
        title="allow Screenshot"
        onPress={() => {
          CaptureProtection.allowScreenshot();
        }}
      />
      <Button
        title="prevent Screenshot"
        onPress={() => {
          CaptureProtection.preventScreenshot();
        }}
      />
      </List.Section>
      {/* <Button onPress={StartScreenRecord}>Start Recording</Button> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebebeb',
  },
  fullscreenContainer: {
    flex: 1,
    // backgroundColor: '#ebebeb',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  video: {
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: 'skyblue',
    // color: "red",
  },
  fullscreenVideo: {
    flex: 1,
    height: height,
    width: width,
    // backgroundColor: 'skyblue',
    color: "red"
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    // flex: 1,
    // flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
    // marginTop: 30,
    // margin:10,
    // padding:10,
    // justifyContent:"space-evenly"
    // backgroundColor:"red"
  },
  IconScreen: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'stretch',
    paddingRight: 10,
    // marginTop: 30,
    // margin:10,
    // padding:10,
    justifyContent: "space-evenly"
    // backgroundColor:"red"
  },
  fullscreenShare: {
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    // backgroundColor:"red"
  },
  timeLeft: {
    // flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
    bottom: -93,
    zIndex: 1,
    left: "66%"
    // justifyContent:"flex-start",
  },
  LanScapLeft: {
    // flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
    bottom: -58,
    zIndex: 1,
    left: "81%"
    // justifyContent:"flex-start",
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
});

export default SRNV;