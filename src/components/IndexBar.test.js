import React from 'react';
import { shallow, mount } from 'enzyme';

import { populateArticleMap } from '../App';
import IndexBar from './IndexBar';

const articles = [
  {
    title: 'Alpha Centauri',
    extract: 'An alien diplomat with an enormous egg shaped head',
    edited: '2017-05-08'
  },
  {
    title: 'Dominators',
    extract: 'Galactic bullies with funny robot pals.',
    edited: '2017-05-08'
  },
  {
    title: 'Cybermen',
    extract:
      'Once like us, they have now replaced all of their body parts with cybernetics',
    edited: '2017-05-08'
  },
  {
    title: 'Auton',
    extract: 'Platic baddies driven by the Nestine consciousness',
    edited: '2017-05-08'
  },
  {
    title: 'Dalek',
    extract: 'Evil little pepperpots of death',
    edited: '2017-05-08'
  }
];
const collection = populateArticleMap(articles);

describe('IndexBar title bar', () => {
  // We need to 'mount' instead of 'shallow' to ensure child components are rendered and
  // we can interact with the DOM. Use our mock callback to test it is invoked correctly.
  let listBar;

  beforeEach(() => {
    listBar = mount(<IndexBar collection={collection} select={jest.fn} />);
  });

  test('Renders sorted section list', () => {
    expect(listBar).toContainExactlyOneMatchingElement('div#section-list');

    const sectionList = listBar.find('div#section-list li');
    expect(sectionList.map(li => li.text())).toEqual(
      Array.from(collection.keys()).sort()
    );
  });
});
