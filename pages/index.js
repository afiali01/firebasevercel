import {useState} from 'react';
import router, { useRouter } from 'next/router'
import useSWR from 'swr'
import styled from 'styled-components'
import {Button} from 'ui/buttons';
import {List, ListItem} from 'classcomp/present'

const Wrapper = styled.div`
        padding: 6rem 0 0;
        text-align: center;
        button{
            width: 40%;
        }
        p{
            font-size: 4.25rem;
        }
`;

//Dumb presentational
//tempating render data+temp
//smart logic
//template render data+temp code listeners

const fetcher = (...args) => fetch(...args).then(res => res.json())


function index(props) {
    const [isValidUser, setValidUser] = useState(false)
    const rounter = useRouter()

    function onRequestToSignIn(){
        //firebase login logic returns a promise
        //user, error
        //user dashboard protected route
        setValidUser(true)
    
    }

    if(isValidUser){
        router.push('http://www.apple.ca')
    }

    return (
        <Wrapper>
            <Button onClick={onRequestToSignIn}>Login</Button>
        </Wrapper>
    )
}
export default index