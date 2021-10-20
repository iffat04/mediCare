import  { useEffect, useState } from 'react';
import { getAuth,updateProfile, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider ,onAuthStateChanged ,signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
    const[user,setUser]=useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //////////sign in with google///////////////
    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
          
        })

    console.log('click')
    }

    ///////////register with email and password ///////////
    const registerd = (email,password,name) =>{
        createUserWithEmailAndPassword(auth, email, password)
       
        .then((result) => {
            // Signed in 
            //setUser(result.user); 
            console.log(result.user);
        })
        .then(()=>{
            setdisplayname(name);
        })
        .then(()=>{
            signInwithEmail(email,password);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    /////set displayname////
    const setdisplayname =(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
              
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    //////signin with email password/////
    const signInwithEmail = (email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    ////////////log out//////////////
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
        setUser,
        registerd,
        signInwithEmail
    }

};

export default useFirebase;


