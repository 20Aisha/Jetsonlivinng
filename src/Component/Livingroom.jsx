import React, { useState, useEffect, useRef } from 'react';
import Video from 'react-native-video';
import {
  View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Share, Text, Button, Image, SafeAreaView, ImageBackground
} from 'react-native';
import ProgressBar from './ProgressBar';
import ViewShot from 'react-native-view-shot';
import alexaGrey from '../assets/alexaGrey.png'
import { useNavigation } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import Octicons from 'react-native-vector-icons/Octicons';
import CameraRoll from '@react-native-community/cameraroll';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PipHandler, { usePipModeListener } from 'react-native-pip-android';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const windowHeight = Dimensions.get('window').width * (12 / 16);
const windowWidth = Dimensions.get('window').width;

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

const Livingroom = () => {

  const ref = useRef();
  const navigation = useNavigation();
  const videoRef = React.createRef();
  const inPipMode = usePipModeListener();
  const [play, setPlay] = useState(false);
  const [isMute, setMute] = useState(false);
  const [duration, setDuration] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControl, setShowControl] = useState(true);

  let Url = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

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
              paused={play}
              muted={isMute}
              pictureInPicture={true}
            />

            {showControl && (
              <View style={styles.controlOverlay}>


                {/* <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}
                  style={styles.fullscreenShare}
                >
                  <MaterialCommunityIcons name="picture-in-picture-bottom-right" size={34} color="gray" />
                </TouchableOpacity > */}

                <View style={styles.IconScreen}>
                  <Text style={{ color: "white", marginTop: "2%" }}><FontAwesome name="edit" size={30} color="white" />  ANSWERN THE DOOR </Text>
                  <Text style={{ color: "white", marginTop: "2%" }}><FontAwesome name="edit" size={30} color="white" /> DETER</Text>
                  <Text style={{ color: "white", marginTop: "2%" }}> <FontAwesome name="edit" size={30} color="white" /> PACKAGE IS HERE</Text>
                  <Text style={{ color: "white", marginTop: "2%" }}><FontAwesome name="edit" size={30} color="white" /> EMERGENCY</Text>

                  {/* <TouchableOpacity onPress={() => onShare()}
                  // style={styles.fullscreenShare}
                  >
                    <FontAwesome name="share-square-o" size={34} color="gray" />
                  </TouchableOpacity > */}

                  {/* <TouchableOpacity onPress={takeScreenShot}
                  // style={styles.fullscreenShare}
                  >
                    <MaterialCommunityIcons name="monitor-screenshot" size={34} color="gray" />
                  </TouchableOpacity > */}

                  {/* <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}
                  // style={styles.fullscreenShare}
                  >
                    <MaterialCommunityIcons name="picture-in-picture-bottom-right" size={34} color="gray" />
                  </TouchableOpacity > */}

                  {/* <TouchableOpacity
                    // style={styles.timeLeft} 
                    onPress={() => muteVideo()}>
                    <Octicons name={isMute ? "mute" : "unmute"} size={34} color="gray" />
                  </TouchableOpacity> */}

                  <TouchableOpacity
                    onPress={handleFullscreen}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={styles.fullscreenButton}
                  >
                    {fullscreen ? <MaterialCommunityIcons name='fullscreen-exit' size={35} color="gray" /> : <MaterialCommunityIcons name='fullscreen' size={34} color="gray" />}
                  </TouchableOpacity>
                </View>

                {/* <ProgressBar
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
                /> */}

              </View>
            )}
          </>
        </TouchableOpacity>
      </ViewShot>

      <View style={styles.bodyconatiner}>


        <View style={styles.options}>
          <TouchableOpacity
            onPress={isMute ? handlePlay : handlePlayPause}>
            <AntDesign name={play ? "playcircleo" : "pause"} size={34} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => muteVideo()}>
            <Octicons name={isMute ? "mute" : "unmute"} size={34} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleFullscreen}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} >
            {fullscreen ? <MaterialCommunityIcons name='fullscreen-exit' size={35} color="gray" /> : <MaterialCommunityIcons name='fullscreen' size={34} color="gray" />}
          </TouchableOpacity>
        </View>


        <View style={styles.historybox}>
          <Text style={styles.para} onPress={() => navigation.navigate('Recording')}>24 hour recording video</Text>
        </View>

        <View style={styles.moreoptions}>
          <TouchableOpacity onPress={takeScreenShot}>
            <AntDesign name="camera" size={40} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Gridscreen')}>
            <Image source={alexaGrey} size={28} style={{ width: 50, height: 50 }} />
          </TouchableOpacity >

          <TouchableOpacity onPress={() => onShare()}
          // style={styles.fullscreenShare}
          >
            <FontAwesome name="share-square-o" size={34} color="gray" />
          </TouchableOpacity >

          <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)} style={styles.fullscreenShare}>
            <FontAwesome5 name="images" size={40} color="gray" />
          </TouchableOpacity>

          <FontAwesome5 name="video" size={40} color="gray" />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ebebeb',
  },
  fullscreenContainer: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    position: 'absolute',
    // backgroundColor: '#ebebeb',
  },
  video: {
    width: windowWidth,
    height: windowHeight,
    // color: "red",
    // backgroundColor: 'skyblue',
  },
  fullscreenVideo: {
    flex: 1,
    color: "red",
    width: width,
    height: height,
    // backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 15,
    marginTop: 30,
    textAlign: 'justify',
    marginHorizontal: 20,
  },

  fullscreenButton: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: "space-evenly"
    // margin:10,
    // padding:10,
    // flexDirection: 'row',
    // backgroundColor:"red"
  },
  IconScreen: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    paddingRight: 10,
    // marginTop: 30,
    // margin:10,
    // padding:10,
    // justifyContent:"space-between",
    // flexWrap:"wrap-reverse"
    // backgroundColor:"red"
  },
  textcolor: {
    color: "green"
  },

  fullscreenShare: {
    // flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // backgroundColor:"red"
  },
  timeLeft: {
    // flex: 1,
    zIndex: 1,
    left: "66%",
    bottom: -93,
    fontSize: 16,
    paddingLeft: 10,
    color: '#FFFFFF',
    // justifyContent:"flex-start",
  },
  LanScapLeft: {
    // flex: 1,
    zIndex: 1,
    left: "81%",
    bottom: -58,
    fontSize: 16,
    paddingLeft: 10,
    color: '#FFFFFF',
    // justifyContent:"flex-start",
  },
  controlOverlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },

  bodyconatiner: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // flex: 8,
  },

  options: {
    // height: "20%",
    padding: 10,
    elevation: 7,
    borderRadius: 50,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "80%",
    display: "flex",
    shadowColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    // margin: 10, 
  },
  moreoptions: {
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: windowWidth - 4,
    // backgroundColor: "yellow",


  },
  historybox: {
    // height: "8%",
    // width: "60%",
    // display: "flex",
    // flexDirection: "row",
    padding: 8,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    bordercolor: "#1877F2",
    justifyContent: "space-evenly",
  },
  para: {
    color: "gray",
    fontSize: 15,
  },

});

export default Livingroom;