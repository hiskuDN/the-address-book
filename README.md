# The AddressBook

* This project is a React/PHP based Address Book that uses ReactJS for frontend and pure PHP for the backend
* Author: Hiskias Dingeto
* Contact me at: hiskias.melke1@gmail.com

## Running Config
* To run this app please follow the following guidelines:
    * Go to the directory _bwe/client_ and run `npm install` or `yarn install`, if you don't have NPM or Yarn, 
    download and install them
    * Go to the directory _bwe/client_ and run `npm start` or `yarn start` to start the client side
    * Import the database from _bwe/database_ to sql
    * Run PHP using XAMPP or another way
    * Install CORS plugin on your browser for testing and enable it on the website which will
    be launched on localhost/3000
    * Requests are sent on localhost/3000/servers/api/controller/... to change that go to
    __bwe/client/src/_dbconfig/routes.ts__ and change the path

NOTE: Do not forget to use CORS bypassing plugin on the browser since the local development build uses http protocol not https.
The webapp won't work if the CORS plugin in the browser isn't installed. Refer this link
if facing difficulties: 

* Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en
* Firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/