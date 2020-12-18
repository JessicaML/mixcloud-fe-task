import React from 'react';
import NotificationContainer from '../components/NotificationContainer';

// This default export determines where your story goes in the story list
export default {
  title: 'NotificationContainer',
  component: NotificationContainer,
};

const Template = (args) => <NotificationContainer {...args} />;

export const NotificationContainerStory = Template.bind({});

NotificationContainerStory.args = {

  data : [{
      key: "/cloud_atlas/",
      name: "Cloud Atlas",
      pictures: {
        thumbnail: "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/4/4/2/a/7fd6-13d2-45af-92f9-17914ad16267.jpg"
      },
      url: "https://www.mixcloud.com/cloud_atlas/",
      username: "cloud_atlas",
  },
  {
    key: "/hellointernet2/",
    name: "Hello Internet",
    pictures: {
      thumbnail: "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/2/8/6/d/80fd-f4bc-4810-a605-ba673e3fbdfb",
    },
    url: "https://www.mixcloud.com/hellointernet2/",
    username: "hellointernet2",
  },
  {
    key: "/Master_of_Instrumental/",
    name: "Master of Instrumental",
    pictures: {
      thumbnail: "https://thumbnailer.mixcloud.com/unsafe/50x50/profile/c/0/8/3/16b8-1119-4a55-a974-0235ee8ac0a3.png",
    },
    url: "https://www.mixcloud.com/Master_of_Instrumental/",
    username: "Master_of_Instrumental"
  }]
};