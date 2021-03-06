# COMPS381F - A Google Firebase Web App Example [Reference]

## Introduction
[Firebase](https://firebase.google.com/) is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014.

## Instructions
Follow the instructons below to deploy a simple **serverless**  Web App that calculates simple interest.  This Web app consists of a [React.js](https://reactjs.org/) front end and a [Google Firebase Cloud function](https://firebase.google.com/docs/functions/).

0. Update the Google Firebase tools to the latest version
   ```
   sudo npm install -g firebase-tools
   ```
1. Install NPM dependencies
   ```
   cd ~/firebase-simpleinterest/functions
   npm install
   ```
2. Create an app at `console.firebase.google.com` using your OUHK Google account
3. Write down your **Project ID**
4. Modify the `functionUrl` variable in `public/index.html`

   If your Project ID is **XXXXXXXX-YYYY**, `functionUrl` should be changed to:
   ```
   const functionUrl = 'https://us-central1-XXXXXXXX-YYYY.cloudfunctions.net/simpleInterest';
   ```
5. Deploy the updated source code to Google Firebase:
   ```
   cd ~/firebase-simpleinterest
   firebase login
   firebase use XXXXXXXX-YYYY
   firebase deploy
   ```
6. Open the **Hosting URL** in your web browser
   ```
   https://XXXXXXXX-YYYY.firebaseapp.com
   ```
