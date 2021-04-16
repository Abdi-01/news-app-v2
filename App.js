import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route, BackButton } from 'react-router-native'
import Home from './src/pages/home';
import NewsDetail from './src/pages/newsDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <SafeAreaProvider>
        {/* // NativeRouter = mengakomodir routing dari react-router-native  */}
        <NativeRouter>
          {/* BackButton : mengembalikan dari page yg aktif ke page sebelumnya */}
          <BackButton>
            <Route path="/" component={Home} exact />
            <Route path="/detail" component={NewsDetail} />
          </BackButton>
        </NativeRouter>
      </SafeAreaProvider>
    );
  }
}

export default App;


  // <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
  //   {/* <Text>Halo, JCWM-BDG 0506</Text>
  //   <TextInput placeholder="Password" keyboardType="number-pad"/> */}
  //   <View style={{ width: 50, height: 50, backgroundColor: 'red' }}>
  //   </View>
  //   <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}>
  //   </View>
  //   <View style={{ width: 50, height: 50, backgroundColor: 'green' }}>
  //   </View>
  // </View>