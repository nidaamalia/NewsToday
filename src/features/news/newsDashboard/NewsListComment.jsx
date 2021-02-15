import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default function NewsListComment(){
    return(
        <List.Item>
            <Image size='mini' circular src='/assets/user.png'/>
        </List.Item>
    )
}