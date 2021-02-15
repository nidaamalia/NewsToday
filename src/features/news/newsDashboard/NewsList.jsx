import React from 'react';
import NewsListItem from './NewsListItem';

export default function NewsList({newsdata}){
    return(
        <>
            {newsdata.map(nd => (
                <NewsListItem nd = {nd} key={nd.id} />
            ))}
            
        </>
    )
}