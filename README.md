# message-scrub

## Overview

message-scrub is meant to be a simple way to send messages via a template of your choice to people staying at a hotel. This has been optimized for mobile, tablet, and desktop viewing experiences on Google Chrome (2020).
- [Modal Usage](https://ant.design/components/modal/)
- [Colour scheme](https://i.pinimg.com/originals/b2/08/7c/b2087ca8dee38f96d7ac8b332014655c.png)
- [Fonts](https://fonts.google.com/): Fira Sans, Josefin Sans, Oxygen

## Installation
> Note: This was created with Node v12.16.1 and npm 6.13.4 on Windows 10.
Open a terminal in a location where you wish to run the application and do the following:
```sh
git clone 
cd message-scrub
npm i
npm run start
```
Open localhost on your machine on port 8080. Page will update automatically with saved changes.

## Future Improvements
| Feature | Explanation |
| ------ | ------ |
| Header links | Scrub should be able to view all messages previously sent, have a dedicated view of the Guest list, and a way to quickly chat with technical support to troubleshoot any usability or perforamnce issues. |
| New Hotel Profile | While this may be better suited for a backend client, Scrub could also feature an option to create a new Hotel Profile from the home screen. This would open a Modal and have the user enter all of the same object information that _Companies.json_ contains. |
| Template List | Use Custom TemplateThis is clickable but will crash the application if you attempt to generate a message at the end. It is included as a demonstration that in the future, you will be able to implement messages that you can send en masse that are not strictly greetings. Likewise, the option to load in a new set of templates will also be an option, though clicking this button at this time will do nothing. |
| greetingString() | Currently does not account for Hotel Profile's timezones. In this example, timestamps are close together and would range from 8pm-11pm based on specific time zones, therefore the greetingString(timestamp) will always return "Good evening". For the current logic flow to account for timezones, the argument that's passed into this function would have to already account for the selected hotel's time offset. |
| Guest List | There is a Select All button that works and can change to a Deselect All button. It is not properly set up to work, so although the checkboxes will appear checked, they will not affect the actual data being read. While this button does nothing currently, another goal lies in having the Load button be able to bring up a new set of Guests. This could be done by specifying a new local file, the address of an API, or filtering down from a list that always contains all Guests from the hotels under the Hotel Profiles. |
| Deployment | I favour making an expressJS server to allow for deployment to heroku, but this was made from an old webpack configuration and is not compatible with my current expressJS set up. The page will be deployed in the near future. |

Love,
KevM