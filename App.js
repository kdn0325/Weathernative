import React, { useEffect, useState } from 'react';
import {StyleSheet, View ,Text, ScrollView , Dimensions} from 'react-native';
import * as Location from 'expo-location';

const {width : SCREEN_WIDTH} = Dimensions.get('window');
//현재 가로수치를 가져오는 API호출

const API_KEY = "3ed1feaed67190811a8d11c4857feb3a";

const App = () => {
  const [ok , setOk] = useState(true);
  const [city,setCity] = useState("Loading...");
  //도시 정보를 가져오는 상태값

  const [days,setDays] = useState([]);

  const getWeather = async() =>{
    const {granted} = await Location.requestForegroundPermissionsAsync();
    //사용자에게 위치에 대한 권한을 부여하도록 요청합니다.
    if(!granted){
      setOk(false);
    };
    //허가를 받지 않았다면 setOk를 false로 바꿔줌 => 권한 요청 거절
   const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5});

   //위도, 경도를 불러옴
   //https://docs.expo.dev/versions/v45.0.0/sdk/location/#locationoptions
   const location = await Location.reverseGeocodeAsync({latitude,longitude}, {useGoogleMaps:false});

   //위치를 우편 주소로 역 지오코딩합니다.
  // https://docs.expo.dev/versions/v45.0.0/sdk/location/#locationgeocodeasyncaddress-options
   setCity(location[0].city);
   const response =  await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`);
   const json = await response.json();
   console.log(json);
  }
  useEffect(()=>{
    getWeather();
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} indicatorStyle={'white'} contentContainerStyle={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
  },
  city:{
    flex:1.2,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center"
  },
  cityName:{
    fontSize: 38,
    fontWeight: "500",    
  },
  weather : {
    // flex:3, == > flex 스타일보다 커야함
    backgroundColor:"green"
  },
  day : {
    // flex:1,
    width:SCREEN_WIDTH,
    alignItems:'center',
  },
  temp : {
    marginTop:50,
    fontSize:178,
  },
  desc : {
    marginTop:-30,
    fontSize:80,
  },
})

// Web에서는 flexDirection의 default 값은 Row
// native에서는 flexDirection의 default 값은 Column

//native에서는 width나 height값을 대부분 적용하지 않는다
//native에서는 기본 default가 flexbox

//flex의 비율 값

//React Native에서 스크롤이 자동이 아님 ==> ScrollDown을 사용하려면 <ScrollView> prop를 사용해야함

// <ScrollView horizontal> == > 가로 스크롤 

// <Container Style>

// Toggling dev menu => Show element inspector => 요소 인스펙터 화면을 실행 가능

// Dimensions => 현재 화면 크기를 얻을 수 있는 API
// https://reactnative.dev/docs/dimensions

//pagingEnabled => 페이지 스크롤링 페이지를 만들어줌

// https://reactnative.dev/docs/scrollview#pagingenabled

//showsVerticalScrollIndicator => 세로 스크롤바 숨김 (기본값=true) false로 바꿔줌
//showsHorizontalScrollIndicator => 가로 스크롤바 숨김 (기본값=true) false로 바꿔줌

//indicatorStyle={color} => 스크롤바 색상 변경 (ios에서만 가능)

//requestForegroundPermissionsAsync => 사용자에게 위치에 대한 권한을 부여하도록 요청합니다.
//https://docs.expo.dev/versions/v45.0.0/sdk/location/#locationproviderstatus

//Location.getCurrentPositionAsync{옵션} => 사용자의 현재 위치를 1회성으로 전달하도록 요청

export default App;