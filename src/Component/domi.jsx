import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler, ToastAndroid,StyleSheet,FlatList,ScrollView,SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';



const Domi = () => {
let data=[
    {
        id:1,
        name:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        name_1:"",
        time:"1"
    },
    {
        id:2,
        name:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        name_1:"Clemson",
        time:"2"
    },
    // {
    //     id:3,
    //     name:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    //     name_1:"Clemson",
    //     time:"3"
    // },
    // {
    //     id:4,
    //     name:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    //     name_1:"Clemson Sc",
    //     time:"4"
    // },
]


    return (
    <SafeAreaView>
        <FlatList data={data}
        keyExtractor={(item,index)=>`${index}`}
        renderItem={({item,index})=>{
            return(
                <ScrollView style={{marginTop:10}}>
<Card>
<View>
        <Text>
            {item.name_1}
        </Text>
    </View>
<VideoPlayer
 video={{uri:item.name}}
// autoplay={true}
// defaultMuted={false}
// disableFullscreen={true}
// resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
// fullScreenOnLongPress={true}
// controls={fa}    

videoHeight={500}
fullscreen={false}
pictureInPicture={true}
showDuration={true}
// onSeek={true}

// repeat={true}
// videoWidth={100}

/>
</Card>
                </ScrollView>
            )
        }}
        />

    </SafeAreaView>
    
        );
    };
    export default Domi;
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     {/* {showVideo ? (
    //         <Video
    //             source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    //             style={{ width: '100%', height: '100%' }}


    //         />
    //     ) : (
    //       <Video
    //             source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    //             style={{ width: '100%', height: '100%' }}

                
    //         />
    //     )} */}
    //      <Video
    //             source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
    //             style={{ width: '100%', height: '100%' }}

                
    //         />
    // </View>