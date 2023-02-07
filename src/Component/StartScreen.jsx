import React, { useEffect, useState } from 'react';
import splashScreen2 from '../assets/splashScreen2.png';
import { ImageBackground, StyleSheet, Text, Image, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup';


export default function StartScreen() {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(false);
        setTimeout(() => {
            setloading(true) // 1
        }, 5000);
    }, [])



    return (

        <View style={{ flex: 1 }}>
            {loading ? <Signup /> : <ImageBackground resizeMode="cover" source={require('../assets/splashScreen2.png')} style={{ flex: 1, justifyContent: "center" }} />}
        </View>
    )
}

