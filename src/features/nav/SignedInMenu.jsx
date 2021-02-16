import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

export default function SignedInMenu({signOut}){
    return(
        <Menu.Item position='right'>
            <Dropdown pointing='top left' text='username'>
                <Dropdown.Menu>
                    <Dropdown.Item text='My profile' icon='user' />
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}