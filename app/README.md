# Mixcloud Coding Challenge Response

## How to run:

`$ yarn install`
`$ yarn start`
`$ yarn storybook`
`$ yarn test`


## Summary of changes:

Please find a video demo the the root directory. 

- Adds storybook to build the component.
- Fetches the new followers from the API provided. 
- Pass the followers data to the NotificationContainer component. 

- On page mount, save the first 3 followers to `activeNotifs` and the rest to `waitingNotifs`.

- If there are waitingNotifs, replace the active notifs with the next 3 waiting notifs after a 5 second timeout. 
- Else if there are activeNotifs, remove all active notifs with the next 3 waiting notifs after a 5 second timeout. 
- Add the fadeOut class to any notifications which will be removed with a timeout of 250ms (animates opacity to 0 and adds a 10px offset). 

- Map over each follower and pass to Notification.

- Adds an onClick handler to the close button of each notification.

- The onClick calls a removeOrReplaceNotif utils function which:
1. adds the slideUp class to the notification (animates height to 0 so that notifications below appear to 'slide up').

2. Removes the notification from the activeNotifs state after a 250ms timeout (giving time out animate transition out of the DOM).

2. Or replaces the notification with another from the waitingNotifs state.


## What I would add with more time:

- There is still a slight glitch in the animation when a user clicks away a notification. I would try to make this animation smoother. 
- Move logic from NotificationsContainer into a utils file.
- Test all the utils functions. 
- Add a test for NotificationsContainer. 
- Use msw and SetUpServer from React Testing Library to mock and test the fetch. 
- Add a setInterval to the API fetch to ensure that new notifications are displayed in the browser. I would add these notification the the start of the waitingNotifications array if the data prop changes in NotificationsContainer. 
- Experiment with some libraries, e.g. ReactTransitionGroup/CSSTransitionGroup. 

