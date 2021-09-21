import React, {createContext, useState, useEffect} from 'react';
import {useContext} from 'react/cjs/react.development';
import firebase from '../firebase/firebase';
import {Text, View} from 'react-native';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    firebase.auth().onAuthStateChanged(async firebaseUser => {
      console.log('In fireabse auth state change');
      if (firebaseUser) {
        let docRef = firebase
          .firestore()
          .collection('Users')
          .doc(firebaseUser.uid);

        docRef.get().then(async doc => {
            setUser(doc.data())
        });

      }else{
          console.log('null here')
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export {AuthContext};