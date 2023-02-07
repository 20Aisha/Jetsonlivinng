import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Footer from './Footer';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function CalenderScreen() {

    const navigation = useNavigation();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    Moment.locale('en');
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
            backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
            // height: 100,
            // width:"50%",
            elevation: 15,
            borderRadius: 10,
            backgroundColor: "white",
            marginVertical: 10,
            marginHorizontal: 20,
            // paddingHorizontal: 10,
            // flexDirection: 'row',
            // alignItems: 'center',
        },
        textStyle: {
            marginTop: 10,
        },
        titleStyle: {
            textAlign: 'center',
            fontSize: 20,
            margin: 20,
        },
        btncontainer: {
            display: "flex",
            flexDirection: "row",

            marginVertical: 10,
            marginHorizontal: 20,
            marginBottom: 10
            // marginTop: '8%'
            //  marginLeft:"20%",
            // marginRight:30,
        },
        btnHeader: {
            borderRadius: 4,
            backgroundColor: "#22709E",
            minWidth: '21%',
            marginTop: 4,
            marginLeft: 'auto',
            color: 'skyBlue',
            shadowColor: 'gray',
            borderRadius: 10,
            elevation: 4,
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            padding: "2%",
            marginRight: 5,
            color: 'white',
            height: 40,
            alignSelf: 'center',


        },
        btnClose: {
            backgroundColor: "#22709E",
            // minWidth: '21%',
            marginTop: 4,
            marginLeft: 'auto',
            color: 'skyBlue',
            shadowColor: 'gray',
            borderRadius: 10,
            elevation: 4,
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            padding: "2%",
            marginRight: 5,
            color: 'white',
            height: 40,
            alignSelf: 'center'
        }
    });
    return (
        <SafeAreaView
            style={styles.container}
        >

            <View
            // style={styles.container}
            >
                <Text style={styles.titleStyle}>
                    Calendar
                </Text>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}

                    weekdays={
                        [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thur',
                            'Fri',
                            'Sat',
                            'Sun'
                        ]}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="skyblue"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                    }}
                    onDateChange={onDateChange}

                />
                <View style={styles.btncontainer}>
                    <View>
                        <Text style={styles.btnHeader}>
                            <Text>
                                Selected Start Date :{selectedStartDate ? Moment(Sdt).format('MMMM Do, YYYY') : ''}
                            </Text>
                        </Text>
                        <Text style={styles.btnHeader} >
                            <Text style={styles.textStyle}>
                                Selected End Date : {selectedEndDate ? Moment(Edt).format('MMMM Do, YYYY') : ''}
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.btnClose} onPress={() => navigation.navigate('VideoScreen')}>Done</Text>
                    </View>
                </View>



            </View>
            {/* <Footer /> */}
        </SafeAreaView>

    );
}