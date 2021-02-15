import React from 'react';
import { Grid } from 'semantic-ui-react';
import NewsList from './NewsList';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <NewsList newsdata={ sampleData }/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Column 1</h2>
            </Grid.Column>
        </Grid>
    )
}