import React from 'react';
import { Body, Card, CardItem, Left, Thumbnail, Text } from 'native-base';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default (props) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" }} />
                    <Body>
                        <Text style={{fontWeight:'bold'}}>BBC NEWS</Text>
                        <Text>{props.author}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" }}
                    style={{ height: hp('40%'), flex: 1 }} />
            </CardItem>
            <CardItem>
                <Body>
                    <Text style={{fontWeight:'bold'}}>BBC NEWS</Text>
                    <Text>Deskripsi lorem ipsum</Text>
                </Body>
            </CardItem>
        </Card>
    )
}