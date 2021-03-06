import React from 'react';
import renderer from 'react-test-renderer';
import Grid, { Column } from '../../elements/Grid';
import 'jest-styled-components';

const grid = renderer.create(<Grid />).toJSON();
const column = renderer.create(<Column />).toJSON();

test('Grid renders correctly', () => {
  expect(grid).toMatchSnapshot();
  expect(grid).toHaveStyleRule('margin', '30px 0');
});

test('Column renders correctly', () => {
  expect(column).toMatchSnapshot();
  expect(column).toHaveStyleRule('padding', '0 40px 10px 40px');
  expect(column).toHaveStyleRule('border-top', '1px solid #000');
  expect(column).toHaveStyleRule('padding-top', '40px');
  expect(column).toHaveStyleRule('margin-top', '50px');
});
