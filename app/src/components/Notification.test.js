import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';

const props = {
  follower: {
    name: 'follower-name',
    pictures: {
      thumbnail: 'img-name',
    },
  },
};

describe('Notification', () => {
  it('displays follower name', () => {
    render(<Notification {...props} />);

    expect(screen.getAllByText('follower-name')).toHaveLength(1);
  });

  it('renders with the fadeIn className', () => {
    render(<Notification {...props} />);

    expect(screen.getAllByTestId('Container')[0]).toHaveClass('fadeIn');
  });
});

describe('if fadeOut is set', () => {
  it('adds the fadeOut className', () => {
    render(<Notification {...props} fadeOut="fadeOut" />);

    expect(screen.getAllByTestId('Container')[0]).toHaveClass('fadeOut');
    expect(screen.getAllByTestId('Container')[0]).not.toHaveClass('fadeIn');
    expect(screen.getAllByTestId('Container')[0]).not.toHaveClass('slideUp');
  });
});

describe('if slideUp is set', () => {
  it('adds the slideUp className', () => {
    render(<Notification {...props} slideUp="slideUp" />);

    expect(screen.getAllByTestId('Container')[0]).toHaveClass('slideUp');
    expect(screen.getAllByTestId('Container')[0]).not.toHaveClass('fadeIn');
    expect(screen.getAllByTestId('Container')[0]).not.toHaveClass('fadeOut');
  });
});
