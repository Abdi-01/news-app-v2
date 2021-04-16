import React from 'react';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import { URLAPI, apiKey } from '../../helper'
import HeaderComp from '../components/header';
import Post from '../components/post';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        // this.getNews()
        this.getNewsAsync()
    }

    // syncronus
    getNews = () => {
        axios.get(URLAPI + `/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
            .then(res => {
                console.log("data from news-api :", res.data)
                this.setState({ news: res.data.articles })
            }).catch(err => {
                console.log(err)
            })
    }

    // asyncronus
    getNewsAsync = async () => {
        try {
            let get = await axios.get(URLAPI + `/top-headlines?sources=bbc-news&apiKey=${apiKey}`)
            console.log("data from news-api async :", get.data)
            this.setState({ news: get.data.articles })
        } catch (error) {
            console.log(error)
        }
    }

    // print postingan
    renderPost = () => {
        return this.state.news.map((value, index) => {
            return <Post berita={value} key={index} />
        })
    }

    render() {
        console.log("state news =========>", this.state.news)
        return (
            <View style={{ backgroundColor: 'gray', flex: 1 }}>
                <HeaderComp />
                <ScrollView>
                    {this.renderPost()}
                </ScrollView>
            </View>
        );
    }
}

export default Home;