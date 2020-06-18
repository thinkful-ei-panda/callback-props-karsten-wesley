import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

// this is the test case
describe('<List />', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <List
        key="1"
        header="Test header"
        cards={[
          { id: 'a', title: 'First card', content: 'lorem ipsum' },
          { id: 'd', title: 'Second card', content: 'lorem ipsum' },
          { id: 's', title: 'Third card', content: 'lorem ipsum' },
        ]}
      />,
      div
    );

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders list as expected', () => {
    const list = renderer
      .create(
        <List
          key="1"
          header="Test header"
          cards={[
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'd', title: 'Second card', content: 'lorem ipsum' },
            { id: 's', title: 'Third card', content: 'lorem ipsum' },
          ]}
        />
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
