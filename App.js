import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.png') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.png') },
  { id: 6, imgSource: require('./assets/6.png') }
];

export default function App() {
  const centerImgData = 3
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require('./assets/avatar-icon.png')}
          />
        </View>
        <View style={styles.userInfo}>
          <Text>Minh Khiêm</Text>
          <Text>Developer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity>
              <View style={[styles.btn, styles.followBtn]}>
                <Text style={styles.btnLabel}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.btn, styles.sendBtn]}>
                <Feather name="send" color= 'black' size = {30}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View>
          <Text style={styles.countText}>217</Text>
          <Text style={styles.countLabelText}>Photos</Text>
        </View>
        <View>
          <Text style={styles.countText}>21k</Text>
          <Text style={styles.countLabelText}>Followers</Text>
        </View>
        <View>
          <Text style={styles.countText}>998</Text>
          <Text style={styles.countLabelText}>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.imageArea}>
        <View style={{ flexDirection: 'column' }}>
          {imgData.slice(0, centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image} key={item.id} />;
          })}
        </View>
        <View style={{ flexDirection: 'column' }}>
          {imgData.slice(centerImgData).map(item => {
            return <Image source={item.imgSource} style={styles.image} key={item.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.25,
    flexDirection: 'row',
  },
  avatarWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 30,
    marginTop:30,
    flex: 0.6,
    justifyContent: 'center',
  },
  btn: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followBtn: {
    marginRight:10,
    width: 120,
    backgroundColor: POLO_BLUE_COLOR,
  },
  senBtn: {
    marginRight: 15,
    width: 40,
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },
  btnLabel: {
    color: 'white'
  },
  countArea: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  countLabelText: {
    fontSize: 20,
    fontWeight: '200',
  },
  imageArea: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    marginLeft:10,
    marginTop:30,
    width: 110,
    height: 110,
  },
  image: {
    marginTop: 10,
    marginVertical:5,
    marginHorizontal: 5,
    width: 150,
    height: 150,
  }
});
