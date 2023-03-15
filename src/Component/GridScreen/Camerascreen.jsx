import { ImageBackground, StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import laungimage from '../../assets/lounge.jpg';
import laung2image from '../../assets/lounge2.jpg';
import roomimage from '../../assets/room.jpg';
// import Footer from './Footer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Camerascreen() {


  const navigation = useNavigation();

  return (
    <View style={styles.setpage}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Livingroom')}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Lounge </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Gridscreen')}>
              <Image
                source={require('../../assets/alexaGrey.png')}
                style={styles.ImageIconStyle}
              />
            </TouchableOpacity >

            <View style={styles.dateandspotcontainer}>
              <View style={styles.spot}></View>
              <Text style={styles.datandtime}> Nov 15 09:30:31 </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Livingroom')}>
          <ImageBackground source={roomimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Room</Text>
            <View style={styles.dateandspotcontainer}><View style={styles.spot}></View><Text style={styles.datandtime}> Nov 15 09:30:31 </Text></View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Livingroom')}>
          <ImageBackground source={laungimage} resizeMode="cover" style={styles.image}>
            <Text style={styles.imgtxt}>Lounge</Text>
            <View style={styles.dateandspotcontainer}>
              <View style={styles.spot}></View>
              <Text style={styles.datandtime}> Nov 15 09:30:31 </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

      </View>
      {/* <View style={{ display: "flex" }}>
        <Footer />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  setpage: {
    // paddingTop: 40,
  },
  image:
  {
    height: windowHeight / 3,
    padding: 30,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 1
  },
  ImageIconStyle: {
    // padding: 10,
    // margin: 5,
    height: 50,
    width: 50,
    alignItems: "flex-end",
    // resizeMode: 'stretch',
    marginTop: "-10%",
    left: "88%"
  },
  spot:
  {
    height: 10,
    width: 10,
    backgroundColor: 'green',
    borderRadius: 5
  },
  imgtxt:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  datandtime:
  {
    color: 'white',
    fontSize: 12,

  },
  dateandspotcontainer:
  {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  flexdown:
  {
    flex: 1
  }
});
