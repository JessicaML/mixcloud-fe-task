See app/README.md for response info.

# Mixcloud Coding Challenge

This folder contains a layout focussed coding challenge.

## The Challenge

The goal of this exercise is to implement a small front-end feature in the context of a react web application. We're looking to see how you reason about building a feature in react and how well it represents the design assets provided.

To achieve this, you'll be using a public mixcloud API endpoint to load a list of users that are being followed by a given user.

For each of these users, a growl/toaster-style notification displaying they have just gone live should be shown.

Growl notifications typically pop up in a corner of the screen and are displayed for a set amount of time or until the user dismisses them.

They stack until a given amount of notifications is shown. When the oldest one at the top is no longer displayed for whichever reason, the next one is displayed at the bottom of the stack and so forth, until there are no notifications left.

For the purpose of this exercise we are assuming all of these notifications are live and available when the user first loads the page.

We are also not concerned with browser compatibility; recent versions of Chrome and Firefox are fine.

### Endpoint

https://api.mixcloud.com/spartacus/following?limit=10

### Assets

Within this folder, you should find:

- A video demonstrating the interactions in the desired implementation;
- An `assets/` folder containing the SVG assets you'll need.

Additionally, there is an high-fidelity figma prototype available at:
https://www.figma.com/file/AGBgnQ7CFCOiRmuq4RYVEO/Growl-Notifications?node-id=0%3A1

## Acceptance Criteria

- When the user loads the page, the notifications should load without any further user interaction;
- When a notification is shown, it should be displayed for a maximum of 5 seconds when there is no user interaction;
- When a notification is shown, when the user clicks the dismiss icon then it should be dismissed immediately;
- When a notification is showing, it should fade in for `250ms` to 100% opacity and a `10px` offset from the top;
- When a notification is hiding, fade out for `250ms` to 0% opacity and back to the original position;
- When multiple notifications exist, they should stack, with newest one displaying at the the top of the list;
- When more than _three_ notifications exist, then the three most recent should be displayed;
- When more than _three_ notifications exist, when one is dismissed, the next most recent one should appear at the bottom of the list;
- When more than _one_ notification exists, when one is dismissed, the remaining notifications should slide up;
- The user name should be truncated to one line;
- Clicking the notification should link to the user's live stream, at `/live/:username/` in a new tab. This does not need to lead to a real page.

## Boilerplate

A boilerplate is provided (in `/app`). It contains everything needed to run a basic reactJS development environment, including eslint.
We've included `styled-components` as a base dependency as this is what we use internally; feel free to set up an alternative if you prefer building your styles in different way.
You can install any packages you think you'll need to achieve the desired result, but please don't use something that will do all the work for you.
You're welcome to use Google but don't copy and paste code.
Ideally your code should pass linting.

### Installation

Install the dependencies using npm. From the project's directory (`/app`), run:

```
$ npm install
```

and then run the development environment:

```
$ npm start
```

A web server will be running at http://localhost:3000/

### Tests

There is a basic test setup included. Tests are optional; feel free to add some if you have time or prefer working that way.

## Sending it back

When you're done, delete the `node_modules` folder, zip everything up, and send it over. Please include any additional instructions we need to run the project.
