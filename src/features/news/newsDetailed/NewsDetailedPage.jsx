import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import NewsDetailedComment from './NewsDetailedComment';
import NewsDetailedHeader from './NewsDetailedHeader';
import NewsDetailedInfo from './NewsDetailedInfo';
import NewsDetailedSidebar from './NewsDetailedSidebar';

export default function NewsDetailedPage({match}){
    
    //console.log(match.params.id)
    const newsdata = useSelector(state => state.news.find(n => n.id))
    console.log(newsdata)
    return(
        <Grid>
            <Grid.Column width={10}>
                <NewsDetailedHeader nd={newsdata} />
                <NewsDetailedInfo nd={newsdata} />
                <NewsDetailedComment/>
            </Grid.Column>
            <Grid.Column width={6}>
                <NewsDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}