import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './todolist'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render('<TodoList />', div);
  ReactDom.unmountComponentAtNode(div);
});

it('is an unordered list', () => {
  const todoList = swallow(<TodoList />)

  const ul = <ul></ul>;
  expect(todoList.contains(ul).toEqual(true));
});
