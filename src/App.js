import React, { Component } from 'react';
import data from './seed.json';

import IndexBar from './components/IndexBar';
import Article from './components/Article';
import './App.css';

// Create a Map containing the articles (the keys are section labels)
const populateArticleMap = articles => {
  const collection = new Map();

  articles.forEach(article => {
    const label = article.title[0].toUpperCase();
    if (collection.has(label)) {
      collection.get(label).push(article);
    } else {
      collection.set(label, [article]);
    }
  });

  return collection;
};

class App extends Component {
  constructor() {
    super();

    /*
      This code is responsible for setting up our data store.
      We read in the data from seed.json and place it in this Map object.

      The Map is a data structure that stores key-value pairs. In this instance,
      the keys are section labels (first letter of the title) and the values are
      arrays of the articles that appear in each section. Note that the section
      is determined by the first letter of the article's title.

      The Map does return keys in the order they are created, but the original
      article store is not in order, so you will need to sort both the section
      headings and the titles when you display them.
    */

    this.collection = populateArticleMap(data);
  }

  render() {
    // TODO: Implement the main component for your application
    return <h1>Replace with your code...</h1>;
  }
}

export default App;
export { populateArticleMap }; // To facilitate testing
