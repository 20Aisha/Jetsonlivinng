import React, { useState, useRef } from 'react';
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet, TouchableOpacity, Share, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Octicons from 'react-native-vector-icons/Octicons';

const ProgressBar = props => {
  // const {
  //   currentTime,
  //   duration,
  //   onSlideCapture,
  //   onSlideStart,
  //   onSlideComplete,
  // } = props;
  const { playing, onPlay, onPause, skipForwards, isMute, muteVideo, skipBackwards, currentTime,
    duration,
    onSlideCapture,
    onSlideStart,
    onSlideComplete, } = props;

  let Url = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

  const getMinutesFromSeconds = time => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
      }`;
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);
  // const [isMute, setMute] = useState(false);
  // const muteVideo = () => setMute(!isMute);

  const handleOnSlide = time => {
    onSlideCapture({ seekTime: time });
  };

  return (
    <View style={styles.wrapper}>

      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={'#F44336'}
        maximumTrackTintColor={'#FFFFFF'}
        thumbTintColor={'#F44336'}

      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>{position}</Text>

        <View style={styles.PlayerControl}>

          <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
            <AntDesign name='banckward' size={34} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
            <Ionicons name='play-skip-back-circle-sharp' size={34} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchable}
            onPress={playing ? onPause : onPlay}>
            {playing ? (
              <Ionicons name='pause' size={34} color="gray" />
            ) : (
              <Ionicons name='play-circle-sharp' size={34} color="gray" />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
            <Ionicons name='play-skip-forward-circle-sharp' size={34} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
            <AntDesign name='forward' size={34} color="gray" />
          </TouchableOpacity>

        </View>
        <Text style={styles.timeRight}>{fullDuration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // backgroundColor: "red",
    backgroundColor: '#000000c0',
    // height:""
  },
  PlayerControl: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  timeLeft: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  timeRight: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'right',
    paddingRight: 10,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default ProgressBar;