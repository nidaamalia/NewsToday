import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar(){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo'style={{ borderRadius:'50%', marginRight: '15px' }}></img>
                    NewsToday
                </Menu.Item>
                <Menu.Item name='News' />
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' 
                    style={{ marginLeft:'0.5em' }}></Button>
                </Menu.Item>                
            </Container>
        </Menu>
    )
}