import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut} from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
    const[user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })

    console.log('click')
    }

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    //observe user auth state
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                //user signed out
            }
        }
        );
    },[]);

    return {
        user,
        auth,
        signInUsingGoogle,
        logOut,
        setUser
    }

};

export default useFirebase;


