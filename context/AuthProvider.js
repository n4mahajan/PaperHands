import React, {createContext, useState, useEffect} from 'react';
import {useContext} from 'react/cjs/react.development';
import firebase from '../firebase/firebase';
import {Text, View} from 'react-native';

const AuthContext = createContext();

const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = useState();
  const [balance,setBalance]=useState(null)
  const [stocks,setStocks]=useState(null)
  const [transactionHistory, setTransactionHistory] = useState([])
  const [lastPortfolioValue, setLastPortfolioValue] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async firebaseUser => {
      console.log('In firebase auth state change');
      if (firebaseUser) {
        console.log('past if statement')
        let docRef = firebase
          .firestore()
          .collection('Users')
          .doc(firebaseUser.uid);

        docRef.get().then(async doc => {
            setUser({
              name:doc.data().name,
              uid:firebaseUser.uid,
            })
        });

      firebase
      .firestore()
      .collection('Users')
      .doc(firebaseUser.uid)
      .onSnapshot(documentSnapshot => {
        const b = documentSnapshot.data().balance;
        setBalance(b);
      });

      firebase
      .firestore()
      .collection('Users')
      .doc(firebaseUser.uid)
      .onSnapshot(documentSnapshot => {
        const b = documentSnapshot.data().stocks;
        setStocks(b);
      });

      firebase
      .firestore()
      .collection('Users')
      .doc(firebaseUser.uid)
      .onSnapshot(documentSnapshot => {
        const b = documentSnapshot.data().transactionHistory;
        setTransactionHistory(b);
      });

     firebase
      .firestore()
      .collection('Users')
      .doc(firebaseUser.uid)
      .onSnapshot(documentSnapshot => {
        const b = documentSnapshot.data().lastPortfolioValue;
        setLastPortfolioValue(b);
      });

      }else{
          setUser(null)
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        balance,
        stocks,
        transactionHistory,
        lastPortfolioValue
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export {AuthContext};