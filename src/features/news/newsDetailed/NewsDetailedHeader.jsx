import React from 'react';
import { Header, Image, Item, Segment } from 'semantic-ui-react';

export default function NewsDetailedHeader({nd}){
    //times conversion
    var d = new Date(nd.publishTimeUnix);
    var dcon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    //console.log(dcon)
    var t = "https://obs.line-scdn.net/".concat(nd.thumbnail.hash)
    //console.log({newsdata})
    return(
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={t} fluid />

                <Segment basic  >
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={nd.title} 
                                    style={{marginBottom: '0.5em'}}                                  
                                />
                                <p>{dcon}</p>
                                <p>
                                    Published by <strong>{nd.publisher}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>        
    )
}