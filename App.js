import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1 ,backgroundColor:"red"}}></View>
      <View style={{flex:1 ,backgroundColor:"green"}}></View>
      <View style={{flex:1 ,backgroundColor:"blue"}}></View>
    </View>
  );
};

// Web에서는 flexDirection의 default 값은 Row
// native에서는 flexDirection의 default 값은 Column

//native에서는 width나 height값을 대부분 적용하지 않는다
//native에서는 기본 default가 flexbox

//flex의 비율 값

export default App;