import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
  );
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without error', () => {
  const wrapper = setup();
  // eslint-disable-next-line testing-library/await-async-query
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders alert button', () => {
  const wrapper = setup();
  // eslint-disable-next-line testing-library/await-async-query
  const button = findByTestAttr(wrapper, 'alert-button');
  expect(button.length).toBe(1);
});


