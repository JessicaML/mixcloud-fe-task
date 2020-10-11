import React from 'react';
import Notification from '../Notification';

// This default export determines where your story goes in the story list
export default {
  title: 'Notifications',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  follower : {
      key: "/cloud_atlas/",
      name: "Cloud Atlas",
      pictures: {
        thumbnail: "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg"
      },
      url: "https://www.mixcloud.com/cloud_atlas/",
      username: "cloud_atlas",
  }

};