// Firebase imports
// Based on https://css-tricks.com/user-registration-authentication-firebase-react/

import { firebaseConfig } from '../../creds/firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}

