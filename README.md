COMPS381F - A Google Firebase Web App Example

1. Install NPM dependencies
- cd ~/firebase-simpleinterest/functions
- npm install
2. Create an app at console.firebase.google.com
3. Write down your "Project ID"
4. Modify the functionUrl variable in public/index.html
- If your Project ID is **comps381f-b3ee9**, functionUrl should be changed to:
- https://us-central1-comps381f-b3ee9.cloudfunctions.net/simpleInterest
5. Deploy the updated source code to Google Firebase:
- cd ~/firebase-simpleinterest
- firebase use project-id
- firebase deploy
6. Open the HOSTING URL in your web browser