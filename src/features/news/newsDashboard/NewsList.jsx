import React from 'react';
import NewsListItem from './NewsListItem';

export default function NewsList(props){
    return(
        <>
            {props.newsdata.map(nd => (
                <NewsListItem nd = {nd} key={nd.id} />
            ))}
            
        </>
    )
}