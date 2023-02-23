import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_WEB_CLIENT_ID} from '@env';

// import setting from '../../../android/app/google-services.json';
GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

export async function logoutGoogle() {
  await GoogleSignin.signOut();
  await auth().signOut();
}

export async function loginGoogle() {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}
