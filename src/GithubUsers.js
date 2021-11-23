import React, { useEffect, useState } from 'react';
const url='https://api.github.com/users';


const GithubUsers = () => {
    const [members, setMember] = useState([]);

    const getMembers = async ()=>{
        const response = await fetch(url);
        const members =await response.json();
        setMember(members);

    };

//using useEffect to target all users
    useEffect(()=>{
        getMembers();
    },[]);

    return (
        <>
            <h1>Github Users using API</h1>
            <ul className='users'>
            {members.map((memb) => {
                    const {id,avatar_url,login,html_url} = memb;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} className='btn'>Visit Profile</a>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        </>
    )
}

export default GithubUsers;
