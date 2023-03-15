import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Group111 from '../assets/Icons/Group111.png';
import Group110 from '../assets/Icons/Group110.png';
import Group109 from '../assets/Icons/Group109.png';
import Group108 from '../assets/Icons/Group108.png';
import Group107 from '../assets/Icons/Group107.png';
import Group106 from '../assets/Icons/Group106.png';
import Group105 from '../assets/Icons/Group105.png';
import Group104 from '../assets/Icons/Group104.png';
import Group96 from '../assets/Icons/Group96.png';
import Group97 from '../assets/Icons/Group97.png';
import Group98 from '../assets/Icons/Group98.png';
import Group99 from '../assets/Icons/Group99.png';
import Group100 from '../assets/Icons/Group100.png';
import Group101 from '../assets/Icons/Group101.png';
import Group102 from '../assets/Icons/Group102.png';
import Group103 from '../assets/Icons/Group103.png';

// import Footer from './Footer';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Gridscreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View>
                <View style={styles.viewcontainer}>
                    <View style={styles.views}>
                        <Text style={styles.color}>Vertical {'\n'}</Text>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreenv1')} style={{ paddingVertical: 8, }}>
                                <Image source={Group111} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen')} style={{ paddingVertical: 8, }}>
                                <Image source={Group110} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerasceen2')} style={{ paddingVertical: 8, }}>
                                <Image source={Group109} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen4')} style={{ paddingVertical: 8, }}>
                                <Image source={Group108} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen5')} style={{ paddingVertical: 8, }}>
                                <Image source={Group107} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen6')} style={{ paddingVertical: 8, }}>
                                <Image source={Group106} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen7')} style={{ paddingVertical: 8, }}>
                                <Image source={Group105} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Camerascreen8')} style={{ paddingVertical: 8, }}>
                                <Image source={Group104} resizeMode="cover" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.views}>
                        {/* <Text style={styles.colorHorizontal}>Horizontal{'\n'}</Text> */}
                        <Text style={styles.color}>Horizontal {'\n'}</Text>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('VertcalScreen1')} style={{ paddingVertical: 8, }}>
                                <Image source={Group96} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen2')} style={{ paddingVertical: 8, }}>
                                <Image source={Group97} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen3')} style={{ paddingVertical: 8, }}>
                                <Image source={Group98} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen4')} style={{ paddingVertical: 8, }}>
                                <Image source={Group99} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen5')} style={{ paddingVertical: 8, }}>
                                <Image source={Group100} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen6')} style={styles.ImageICon}>
                                <Image source={Group101} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen7')} style={{ paddingVertical: 8, }}>
                                <Image source={Group102} resizeMode="cover" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('VerticalScreen8')} style={{ paddingVertical: 8, }}>
                                <Image source={Group103} resizeMode="cover" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.closbtn}>
                    <Button
                        title="Close"
                        color="#1877F2"
                        style={styles.btn}
                        onPress={() => navigation.navigate('Home')}
                    >Close</Button>
                </View>
            </View>
            {/* <View style={{ display: "flex" }}>
                <Footer />
            </View> */}
        </View >
    )
}
const styles = StyleSheet.create({
    main: {
        // paddingTop: 20,
        // paddingBottom: 120,
        // paddingLeft: 30,
        // paddingRight: 30,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
    },
    viewcontainer: {
        // width: "90%",
        // height: "90%",
        backgroundColor: "white",
        padding: 10,
        elevation: 18,
        shadowColor: 'skyblue',
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        left: "5%",
        right: "10%",
        width: windowWidth / 1.2,
        height: windowHeight / 1.3,
        // backgroundColor: "red"
    },
    views: {
        width: "50%",
        height: "100%",
        padding: 20,
        // display: "flex",
        // flexDirection: "column",
        alignItems: "center",
    },
    color: {
        color: "#1877F2",
        fontSize: 19,
    },
    colorHorizontal: {
        color: "#1877F2",
        fontSize: 19,
    },
    subhor: {
        marginTop: 28,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    closbtn: {
        width: "30%",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 10,
    },
})