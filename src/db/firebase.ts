import { Config } from "@/config/config";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";

const firebaseConfig = {
  apiKey: Config.firebase.apiKey,
  authDomain: Config.firebase.authDomain,
  databaseURL: Config.firebase.databaseURL,
  projectId: Config.firebase.projectId,
  storageBucket: Config.firebase.storageBucket,
  messagingSenderId: Config.firebase.messagingSenderId,
  appId: Config.firebase.appId,
  measurementId: Config.firebase.measurementId,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Exporta los servicios para usarlos en otros archivos
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});
