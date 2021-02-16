import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

export default function NewsDetailedSidebar(){
    return(
    <>
    <Segment
        textAlign="center"
        style={{border: 'none'}}
        attached="top"
        secondary
        inverted
        color="teal"
    >
        <h3>Recommendation</h3>
    </Segment>
    <Segment attached>
        <Item.Group relaxed divided>
            <Item style={{position: 'relative'}}>
                <Item.Image size="tiny" src='/assets/user.png'/>
                <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                        <span>Title 1</span>
                    </Item.Header>
                </Item.Content>
            </Item>
            <Item style={{position: 'relative'}}>
                <Item.Image size="tiny" src='/assets/user.png'/>
                <Item.Content verticalAlign="middle">
                    <Item.Header as="h3">
                        <span>Title 2</span>
                    </Item.Header>
                </Item.Content>
            </Item>
        </Item.Group>
    </Segment>
    </>        
    )
}