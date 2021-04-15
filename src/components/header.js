import React from 'react';
import { Header } from 'react-native-elements';

const HeaderComp = (props) => {

    return (
        <Header
        containerStyle={{backgroundColor:'#d63031'}}
            leftComponent={{ icon: 'menu', color: 'white' }}
            centerComponent={{ text: "BBC NEWS", style: { color: 'white' } }}
            rightComponent={{ icon: 'home', color: 'white' }}
        />
    )
}

export default HeaderComp