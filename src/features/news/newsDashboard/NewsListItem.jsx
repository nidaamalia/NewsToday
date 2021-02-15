import React from 'react';
import { Button, Icon, Item, ItemHeader, List, Segment } from 'semantic-ui-react';
import NewsListComment from './NewsListComment';

export default function NewsListItem({nd}){
    //times conversion
    var d = new Date(nd.publishTimeUnix);
    var dcon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    //console.log(dcon)
    return(        
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src="/assets/user.png" alt='thumbnail'/>
                        <Item.Content>
                            <Item.Header content={nd.title} />
                            <Item.Description>
                                {nd.publisher}
                            </Item.Description>                        
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {dcon}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <NewsListComment />
                    <NewsListComment />
                    <NewsListComment />
                </List>
            </Segment>
            <Segment clearing>
                <div>News Description</div>
                <Button color='blue' floated='right' content='View'></Button>
            </Segment>
        </Segment.Group>
    )
}