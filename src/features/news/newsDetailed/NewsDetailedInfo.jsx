import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export default function NewsDetailedInfo(){
    return(
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column>
                        <p>News Description</p>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>        
    )
}