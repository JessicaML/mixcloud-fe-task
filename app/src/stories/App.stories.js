import React from 'react';
import App from '../components/App';

// This default export determines where your story goes in the story list
export default {
  title: 'App',
  component: App,
};

const Template = (args) => <App />;

export const AppStory = Template.bind({});
