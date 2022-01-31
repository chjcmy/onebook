import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import BookView from '../view/BookView';

@inject('ArticleStore')
@observer
class BookContainer extends Component {
  componentDidMount() {
    // this.props.ArticleStore.selectAll();
    this.props.ArticleStore.selectArticleBook(this.props.location.state.bookId);
  }

  onSetArticleProp = (name, value) => {
    this.props.ArticleStore.setArticleProp(name, value);
  };

  onAddArticle = () => {
    this.props.ArticleStore.addArticle();
  };

  onRemoveArticle = () => {
    this.props.ArticleStore.removeArticle();
  };

  onModifyArticle = () => {
    this.props.ArticleStore.modifyArticle();
  };

  onsetIndexProp = (id) => {
    this.props.ArticleStore.setIndexProp(id);
  }

  onsetArticleBook = (id) => {
    this.props.ArticleStore.selectArticleBook(id);
  }

  render() {
    const { articles } = this.props.ArticleStore;
    const bookId = this.props.location.state.bookId;
    const id = this.props.ArticleStore.index;

    return (
        <div>
          <BookView
              articles={articles}
              id={id}
              bookId={bookId}
              onSetArticleProp={this.onSetArticleProp}
              onAddArticle={this.onAddArticle}
              onRemoveArticle={this.onRemoveArticle}
              onModifyArticle={this.onModifyArticle}
              setIndexProp={this.onsetIndexProp}
          />
        </div>

    );
  }
}

export default BookContainer;
