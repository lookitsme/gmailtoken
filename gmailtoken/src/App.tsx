import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOYSHjaT0s3kMLxZ1SEMlFMRHtqKIoJxY",
  authDomain: "easyunsub-d9b18.firebaseapp.com",
  projectId: "easyunsub-d9b18",
  storageBucket: "easyunsub-d9b18.firebasestorage.app",
  messagingSenderId: "633879458908",
  appId: "1:633879458908:web:a1b746c26366563e6d2299",
  measurementId: "G-L5LW0LWS12"
};

function App() {
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Add necessary scopes for Gmail and Google services
  provider.addScope("https://www.googleapis.com/auth/gmail.modify");
  provider.addScope("https://mail.google.com/");
  provider.addScope("https://www.googleapis.com/auth/gmail.settings.basic");
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const handleGoogleSignIn = async () => {
    try {
      await auth.signOut();
      const result = await signInWithPopup(auth, provider);

      // Access user information
      const user = result.user;
      console.log("User Info:", user);

      // Access OAuth 2.0 token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign In with Google</button>;
}

export default App;

