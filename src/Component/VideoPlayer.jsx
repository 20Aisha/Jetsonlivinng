import React, { useState, useEffect, useRef } from 'react';
import Video from 'react-native-video';
import {
  View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Share, Text, Button, SafeAreaView
} from 'react-native';
import PipHandler, { usePipModeListener } from 'react-native-pip-android';
import Orientation from 'react-native-orientation-locker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressBar from './ProgressBar';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import { Checkbox, List, MD3Colors } from 'react-native-paper';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

// import PlayerControls from './PlayerControls';


const windowHeight = Dimensions.get('window').width * (12 / 16);
const windowWidth = Dimensions.get('window').width;

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

const VideoPlayer = () => {

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


  const ref = useRef();
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
              source={{
                uri:
                  'https://rr2---sn-npoeenly.googlevideo.com/videoplayback?expire=1676429476&ei=Q_TrY8vDO5KhtQeTm6vACQ&ip=64.145.76.74&id=o-APsLrg5ZE8rmKIVS6Gl0tiQ6CqNKfCOgnLHEtNKZM6zq&itag=18&source=youtube&requiressl=yes&spc=H3gIhjJTF9cbfWDm-vXeGo5BfsfpKoY&vprv=1&mime=video%2Fmp4&ns=CSEzMo4RKTyuNAnUNePJxBUL&cnr=14&ratebypass=yes&dur=119.652&lmt=1664575038351521&fexp=24007246&c=WEB&txp=5538434&n=NuvJz1WVDVALhA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAItMS4aFyHPiBjHGlIY1m_Se-EDi-IyVbKZCanF7bOo4AiEAkltXYET2DFUFzDho3WVZQtt9ETHh1ZK7jZXSkB4ds9E%3D&redirect_counter=1&cm2rm=sn-a5me7y7s&req_id=c89c80940248a3ee&cms_redirect=yes&cmsv=e&mh=Ea&mip=119.73.96.2&mm=34&mn=sn-npoeenly&ms=ltu&mt=1676407482&mv=m&mvi=2&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAO4qm7zUMwdwWifnIU47rEZ591uvN-OOGTz3ki3jX45nAiAsJfDofN7j4vinxmAdROBzQGwOJzyAqG8T4Ks3DunXyg%3D%3D',
                // 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
              }}
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

                  <TouchableOpacity onPress={() => onShare()}
                  // style={styles.fullscreenShare}
                  >
                    <FontAwesome name="share-square-o" size={34} color="gray" />
                  </TouchableOpacity >

                  <TouchableOpacity onPress={takeScreenShot}
                  // style={styles.fullscreenShare}
                  >
                    <MaterialCommunityIcons name="monitor-screenshot" size={34} color="gray" />
                  </TouchableOpacity >

                  {/* <TouchableOpacity onPress={() => PipHandler.enterPipMode(300, 214)}
                  // style={styles.fullscreenShare}
                  >
                    <MaterialCommunityIcons name="picture-in-picture-bottom-right" size={34} color="gray" />
                  </TouchableOpacity > */}

                  <TouchableOpacity
                    // style={styles.timeLeft} 
                    onPress={() => muteVideo()}>
                    <Octicons name={isMute ? "mute" : "unmute"} size={34} color="gray" />
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={handleFullscreen}
                  // hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  // style={styles.fullscreenButton}
                  // style={styles.fullscreenButton}
                >
                  {fullscreen ? <MaterialCommunityIcons name='fullscreen-exit' size={35} color="gray" /> : <MaterialCommunityIcons name='fullscreen' size={34} color="gray" />}
                </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                  onPress={() => PipHandler.enterPipMode(300, 214)}
                  style={styles.box}>
                  <Text>Click to Enter Pip Mode</Text>
                </TouchableOpacity> */}

                {/* <PlayerControls
                onPlay={handlePlay}
                onPause={handlePlayPause}
                playing={play}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              /> */}
                {/* <Text 
              style={styles.timeLeft} */}

                {/* <TouchableOpacity style={styles.timeLeft} onPress={() => muteVideo()}>
                <Octicons name={isMute ? "mute" : "unmute"} size={34} color="gray" />
              </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.LanScapLeft}    onPress={handleFullscreen}>
              {fullscreen ? <MaterialCommunityIcons name='fullscreen-exit' size={34} color="gray"/> : <MaterialCommunityIcons name='fullscreen' size={34} color="gray"/>}
              </TouchableOpacity > */}


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
        {/* <Text> End Screen Shot</Text> */}
      </ViewShot>


      {/* <Button title="Picture IN Picture" onPress={takePicture} /> */}

      <List.Section >
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

export default VideoPlayer;