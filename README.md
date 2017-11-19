#COMPS381F - A Google Firebase Web App Example

1. Install NPM dependencies
```
cd ~/firebase-simpleinterest/functions
npm install
```
2. Create an app at `console.firebase.google.com`
3. Write down your **Project ID**
4. Modify the `functionUrl` variable in `public/index.html`

If your Project ID is **XXXXXXXX**, `functionUrl` should be changed to:
```
const functionUrl = 'https://us-central1-XXXXXXXX.cloudfunctions.net/simpleInterest';
```
5. Deploy the updated source code to Google Firebase:
```
cd ~/firebase-simpleinterest
firebase use <Project ID>
firebase deploy
```
6. Open the **Hosting URL** in your web browser
