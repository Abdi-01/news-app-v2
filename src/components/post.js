import React from 'react';
import { Body, Card, CardItem, Left, Thumbnail, Text } from 'native-base';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Link } from 'react-router-native';

export default ({ berita }) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" }} />
                    <Body>
                        <Text style={{ fontWeight: 'bold' }}>{berita.source.name}</Text>
                        <Text>{berita.author}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: berita.urlToImage }}
                    style={{ height: hp('40%'), flex: 1 }} />
            </CardItem>
            <CardItem>
                <Body>
                    <Text style={{ fontWeight: 'bold' }}>{berita.source.name}</Text>
                    <Text style={{ textAlign: 'justify' }}>{berita.title}</Text>
                    <Link to={{ pathname: "/detail", state: { berita } }}>
                        <Text>Detail</Text>
                    </Link>
                </Body>
            </CardItem>
        </Card>
    )
}