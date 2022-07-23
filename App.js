import React from 'react';
import {StyleSheet, View ,Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text>Seoul</Text>
      </View>
      <View style={styles.weather}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"red",
  },
  city:{
    flex:1,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center"
  },
  weather : {
    flex:3,
    backgroundColor:"green"
  }
})

// Web에서는 flexDirection의 default 값은 Row
// native에서는 flexDirection의 default 값은 Column

//native에서는 width나 height값을 대부분 적용하지 않는다
//native에서는 기본 default가 flexbox

//flex의 비율 값

export default App;