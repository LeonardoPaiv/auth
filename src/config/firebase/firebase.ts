import admin from "firebase-admin";

import serviceAccount from "./serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: "https://lab-arqui-a583a-default-rtdb.firebaseio.com"
});

export default admin;