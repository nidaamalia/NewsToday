import React from 'react';
import { Grid } from 'semantic-ui-react';
import NewsDetailedComment from './NewsDetailedComment';
import NewsDetailedHeader from './NewsDetailedHeader';
import NewsDetailedInfo from './NewsDetailedInfo';
import NewsDetailedSidebar from './NewsDetailedSidebar';

export default function NewsDetailedPage(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <NewsDetailedHeader />
                <NewsDetailedInfo />
                <NewsDetailedComment />
            </Grid.Column>
            <Grid.Column width={6}>
                <NewsDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}