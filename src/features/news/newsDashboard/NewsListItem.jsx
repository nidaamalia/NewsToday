import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';

export default function NewsListItem({nd}){
    //times conversion
    var d = new Date(nd.publishTimeUnix);
    var dcon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    //console.log(dcon)
    var t = "https://obs.line-scdn.net/".concat(nd.thumbnail.hash)
    return(        
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>                        
                        <Item.Content>
                            <Item.Header content={nd.title} style={{ marginBottom: '15px' }}/>
                            <Item.Image size='medium' src={t} alt='thumbnail'/>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment clearing>
                <span style={{ marginRight: '5px' }}>
                    <Icon name='newspaper outline' /> {nd.publisher}                    
                </span>
                <span>
                    <Icon name='clock' /> {dcon}
                </span>
                <span>
                    <Button as={Link} to={`/news/${nd.id}`} color='teal' floated='right' content='View'></Button>
                </span>
            </Segment>
        </Segment.Group>
    )
}