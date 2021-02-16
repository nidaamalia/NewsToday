import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function Navbar(){
    
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handlelSignOut(){
        setAuthenticated(false);
        history.push('/');
    }

    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo'style={{ borderRadius:'50%', marginRight: '15px' }}></img>
                    NewsToday
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/news' name='News' />
                {authenticated ? <SignedInMenu signOut={handlelSignOut} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}
            </Container>
        </Menu>
    )
}