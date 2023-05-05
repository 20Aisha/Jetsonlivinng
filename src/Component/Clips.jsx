import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Footer from './Footer';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import laungimage from '../assets/lounge.jpg';
import animal from '../assets/pat.png';
import car from '../assets/car.png';
import { useNavigation } from '@react-navigation/native';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
// import { Feather } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
export default function Clips() {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            {/* header */}
            <View style={styles.headingconatiner}>
                {/* <SimpleLineIcons name="arrow-left" size={24} color="#1877F2" /> */}
                <Feather name="arrow-left" size={24} color="#1877F2" onPress={() => navigation.navigate('Home')} />
                <Text style={styles.heading}>Clips</Text>
                <AntDesign name="setting" size={24} color="#1877F2" onPress={() => navigation.navigate('SettingScreen')} />
            </View>
            <View style={styles.setdisplayofpage}>
                <View style={styles.bodyconatiner}>
                <View style={styles.card}>
                        <Image style={styles.cardimgicon} source={animal} />
                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>Animal</Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!2
                                </Text>
                            </View>
                            <View style={styles.spotto}></View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.cardimgicon}  source={car} />
                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>Car</Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!
                                </Text>
                            </View>
                            <View style={styles.spotto}></View>
                        </View>
                    </View>
                    <View style={styles.card}>
                    <Image style={styles.cardimgicon} source={animal} />
                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Person
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!3
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                    <Image style={styles.cardimgicon}  source={car} />
                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                 All Clips
                                </Text>
                                <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!4
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                    {/* <Image style={styles.cardimgicon} source={animal} /> */}
                        <View style={styles.cardbody2} >
                    <AntDesign       style={styles.Ahmed} name="plus" size={24} color="black"  />
                            <View>
                                <Text style={styles.headingtwo344}>Create Your Own Clip  </Text>
                                {/* <Text style={styles.paragray}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor!5
                                </Text> */}
                            </View>
                            {/* <View style={styles.spotto}></View> */}
                        </View>
                    </View>
                </View>
            </View>
            {/* <Footer /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    Ahmed:{
// backgroundColor : "red",
marginLeft : 20 ,
    },
    main: {
        paddingTop: 40,
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    setdisplayofpage: {
        display: "flex",
        flexDirection: "column",
        flex: 9,
        padding: 25,
    },
    headingconatiner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
    },
    bodyconatiner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 8,
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: "700",
        color: "#1877F2",
    },
    headingcam: {
        fontSize: 20,
        fontWeight: "700",
    },
    headingtwo: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1877F2",
    },
    headingtwo344: {
        fontSize: 20,
        marginRight : 80,
        fontWeight: "700",
        color: "#1877F2",
    },
    paragray: {
        color: "gray",
        fontWeight: 'bold'
    },
    card: {
        display: "flex",
        flexDirection: "row",
        height: "20%",
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        padding: 0
    },
    cardimg: {
        height: "80%",
        width: "35%",
        marginTop: "1.5%",
        marginLeft: "-0.5%",
        marginRight: "1%",
        elevation: 15,
        borderRadius: 10,
    },
    cardimgicon: {
        height: "50%",
        width: "15%",
        padding:"4%",
        marginTop: "5%",
        marginLeft: "1.5%",
        marginRight: "1%",
        elevation: 15,
        borderRadius: 10,
        // backgroundColor:"skyblue"
    },
    cardbody: {
        height: "100%",
        width: "65%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
// backgroundColor : "red",
    },
    cardbody2: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
// backgroundColor : "red",
    },
    spotto: {
        height: 10,
        width: 10,
        backgroundColor: "green",
        borderRadius: 50,
    },
})





