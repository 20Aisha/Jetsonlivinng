import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {
//   VideoSkipBack,
//   VideoPause,
//   VideoPlay,
//   VideoSkipForward,
// } from '../assets/icons';



const PlayerControls = props => {
  const {playing, onPlay, onPause, skipForwards, skipBackwards} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        {/* <VideoSkipBack /> */}
        <Ionicons name='play-skip-back-circle-sharp' size={24} color="yellow" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          // <VideoPause height="50" width="50" />
          <Ionicons name='pause' size={24} color="yellow"/>
        ) : (
          // <VideoPlay height="50" width="50" />
          <Ionicons name='play-circle-sharp' size={24} color="yellow"/>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
          <Ionicons name='play-skip-forward-circle-sharp' size={24} color="yellow"/>
        {/* <VideoSkipForward /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default PlayerControls;