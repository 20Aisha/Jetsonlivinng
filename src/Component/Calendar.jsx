import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';


const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;


export default function CalenderScreen() {

    Moment.locale('en');

    const navigation = useNavigation();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    let Sdt = selectedStartDate;
    let Edt = selectedEndDate;

    console.log(Moment(Sdt).format('MMMM Do, YYYY H:mma'));
    console.log(Moment(Edt).format('MMMM Do, YYYY H:mma'));

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            elevation: 15,
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 20,
            // backgroundColor: '#fff',
            backgroundColor: "#F9F9F9",
            // width: width / 3,
            height: height / 2.5

            // paddingHorizontal: 10,
            // flexDirection: 'row',
            // alignItems: 'center',

            // alignItems: 'center',
            // justifyContent: 'center',
            // height: 100,
            // width:"50%",

        },
        textStyle: {
            marginTop: 10,
            color: "white",
        },
        titleStyle: {
            textAlign: 'center',
            fontSize: 20,
            margin: 20,

        },
        btncontainer: {
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 20,
            marginVertical: 10,
            marginBottom: 10,
            // marginTop: '8%'
            // marginRight:30,
            //  marginLeft:"20%",
        },
        btnHeader: {
            height: 40,
            marginTop: 4,
            elevation: 4,
            marginRight: 5,
            borderRadius: 4,
            borderRadius: 10,
            padding: "2%",
            color: 'white',
            minWidth: '21%',
            display: "flex",
            marginLeft: 'auto',
            alignSelf: 'center',
            shadowColor: 'skyblue',
            // alignItems: "center",
            justifyContent: 'center',
            backgroundColor: "#22709E",
        },
        btnClose: {
            // minWidth: '21%',
            height: 40,
            marginTop: 4,
            elevation: 4,
            marginRight: 5,
            borderRadius: 10,
            padding: "2%",
            color: 'white',
            display: "flex",
            // color: 'skyBlue',
            // marginLeft: 'auto',
            // shadowColor: 'gray',
            // alignSelf: 'center',
            // alignItems: "center",
            // justifyContent: 'center',
            backgroundColor: "#22709E",
        }
    });
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.titleStyle}>Calendar</Text>

                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}

                    weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                    months={['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    scaleFactor={375}
                    onDateChange={onDateChange}
                    // selectedDayColor="#66ff33"
                    // todayBackgroundColor="skyblue"
                    // selectedDayTextColor="#000000"

                    todayBackgroundColor="white"
                    selectedDayColor="#0F4B63"
                    selectedDayTextColor="black"
                    textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                    }}
                />
                <View style={styles.btncontainer}>
                    <View>
                        <Text style={styles.btnHeader}>
                            <Text style={styles.textStyle}> Selected Start Date :{selectedStartDate ? Moment(Sdt).format('MMMM Do, YYYY') : ''} </Text>
                        </Text>
                        <Text style={styles.btnHeader} >
                            <Text style={styles.textStyle}>  Selected End Date : {selectedEndDate ? Moment(Edt).format('MMMM Do, YYYY') : ''}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.btnClose} onPress={() => navigation.navigate('VideoPlayer')}>Done</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    );
}