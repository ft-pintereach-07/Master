import React from 'react';
import { axiosWithAuth } from '../Authorization/axiosAuth';
import AddArticle from './AddArticle';


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
                <AddArticle getArticles={this.getArticles} articles={this.state.articles}/>

                {this.state.articles.map((article) => {
                    return(
                        <div className='article-list'>
                            <p className='title'>{article.title}</p>
                            <p className='author'>{article.author}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default ArticleList;