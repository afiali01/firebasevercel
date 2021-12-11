import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import {auth} from 'libs/firebase'

function useAuth() {
    const [user, setUser] = useState(null)

    //  useEffect is similar to when a component mounts
    useEffect(()=>{
        const authChange = onAuthStateChanged(auth, (clientCredential)=>{
            if(clientCredential){
                setUser(clientCredential)
            }else{
                setUser(null)
            }
        })

        //  Similar to when a component unmounts
        return () => authChange()

    }, [])

    return user

}



export {useAuth}