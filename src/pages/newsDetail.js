import { Body, Card, CardItem } from 'native-base';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { heightPercentageToDP } from 'react-native-responsive-screen';

class NewsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("cek props detail berita", this.props.location)
        let { berita } = this.props.location.state
        return (
            <ScrollView>
                <Card style={{ flex: 1 }}>
                    <CardItem>
                        <Body>
                            <Text h3>{berita.title}</Text>
                            <Text>Publish : {berita.publishedAt}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Image source={{ uri: berita.urlToImage }} style={{ flex: 1, height: heightPercentageToDP("30%") }} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{berita.description}</Text>
                            <Text>{berita.content}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}

export default NewsDetail;