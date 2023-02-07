import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import laungimage from '../assets/lounge.jpg';
import Footer from './Footer';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import { Feather } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { SimpleLineIcons } from '@expo/vector-icons';


export default function Recording() {

    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            {/* header */}
            <View style={styles.headingconatiner}>
                <Feather name="arrow-left" size={24} color="#1877F2" onPress={() => navigation.navigate('Home')} />
                <Text style={styles.heading}>Recordings</Text>
                <AntDesign name="setting" size={24} color="#1877F2" onPress={() => navigation.navigate('SettingScreen')} />
            </View>


            <View style={styles.setdisplayofpage}>

                {/* body */}
                <View style={styles.bodyconatiner}>
                    <Text style={styles.headingcam}>Select Camera</Text>

                    {/* <Text > */}
                    <TouchableOpacity  style={styles.card} onPress={() => navigation.navigate('CalenderScreen')}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View >
                                <Text style={styles.headingtwo} onPress={() => navigation.navigate('CalenderScreen')}> Living room</Text>
                                <Text style={styles.paragray}>  Camera 1
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </TouchableOpacity >
                    {/* </Text> */}
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CalenderScreen')}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo} onPress={() => navigation.navigate('CalenderScreen')}>
                                    Bed room
                                </Text>
                                <Text style={styles.paragray}>
                                    Camera 2
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CalenderScreen')}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo} >
                                    Front
                                </Text>
                                <Text style={styles.paragray}>
                                    Camera 3
                                </Text>
                            </View>
                            <View style={styles.spotto}></View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CalenderScreen')}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo} >
                                    Back area
                                </Text>
                                <Text style={styles.paragray}>
                                    Camera 4
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('CalenderScreen')}>
                        <Image
                            style={styles.cardimg}
                            source={laungimage}
                        />

                        <View style={styles.cardbody} >
                            <View>
                                <Text style={styles.headingtwo}>
                                    Garage
                                </Text>
                                <Text style={styles.paragray}>
                                    Camera 5
                                </Text>
                            </View>
                            <View style={styles.spotto}>
                            </View>
                        </View>
                    </TouchableOpacity>





                </View>



            </View>
            <Footer />
        </View >
    )
}

const styles = StyleSheet.create({

    main: {
        // paddingTop: 40,
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    setdisplayofpage: {
        display: "flex",
        flexDirection: "column",
        flex: 15,
        padding: 25,
    },
    headingconatiner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginLeft: 25,
        marginRight: 25,
    },
    bodyconatiner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        flex: 8,
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
    paragray: {
        color: "gray",
        fontWeight: "700"
    },
    card: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    cardimg: {
        height: "100%",
        width: "35%",
        borderBottomLeftRadius: 10,
        //  borderBottomRightRadius: 15,
        borderTopLeftRadius: 10,
        // borderTopRightRadius: 15,
        //    marginTop:"4%",
        //    marginLeft:"1%"
    },
    cardbody: {
        height: "100%",
        width: "65%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 9,
        shadowColor: 'skyblue',
    },
    spotto: {
        height: 10,
        width: 10,
        backgroundColor: "green",
        borderRadius: 50,
    },

})