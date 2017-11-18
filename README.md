COMPS381F - A Google Firebase Web App Example

1. Create an app at console.firebase.google.com
2. Write down your "Project ID"
3. Modify the functionUrl variable in public/index.html

  If your Project ID is comps381f-b3ee9, functionUrl should be changed to:

    https://us-central1-comps381f-b3ee9.cloudfunctions.net/simpleInterest

4. Deploy the updated source code to Google Firebase:

   cd ~/firebase-simpleinterest
   firebase use project-id
   firebase deploy

5. Open the HOSTING URL in your web browser