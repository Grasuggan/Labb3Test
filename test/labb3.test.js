import React from 'react'
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { CURRENT_COURSE_QUERY, Course } from '../pages/courses/[course]';

const mocks = [
    {
        request: {
          query: CURRENT_COURSE_QUERY,
          variables: {
            name: 'JavaScript',
          },
        },
        result: {
          data: {
            course: { name: 'JavaScript' },
          },
        },
      },
]; // We'll fill this in next

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Course name="JavaScript" />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('JavaScript');
});