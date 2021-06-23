import React from 'react';
import { axiosWithAuth } from '../Authorization/axiosAuth';


class ArticleList extends React.Component {
    state = {
        articles: [],
    }

    getArticles = () => {
        axiosWithAuth()
        .get('')
        .then(res => {
            this.setState({...this.state, friends: [...res.data]
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMound(){
        this.getArticles()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

}

export default ArticleList;