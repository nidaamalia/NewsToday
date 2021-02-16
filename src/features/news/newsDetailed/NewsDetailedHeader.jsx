import React from 'react';
import { Header, Image, Item, Segment } from 'semantic-ui-react';

const newsImageStyle = {
    filter: 'brightness(30%)'
};

const newsImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

export default function NewsDetailedHeader(){
    return(
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/drinks.jpg`} fluid style={newsImageStyle} />

                <Segment basic style={newsImageTextStyle} >
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content='Event Title'
                                    style={{color: 'white'}}
                                />
                                <p>Event Date</p>
                                <p>
                                    Hosted by <strong>Bob</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>        
    )
}