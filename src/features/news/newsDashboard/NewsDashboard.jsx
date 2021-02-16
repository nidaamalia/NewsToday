import React from 'react';
import { Grid } from 'semantic-ui-react';
import NewsList from './NewsList';
import { useSelector } from 'react-redux';

export default function NewsDashboard(){

    const newsdata = useSelector(state => state.news)
    //const [newsdata, setNewsdata] = useState(sampleData);    
    return(
        <Grid>
            <Grid.Column width={10}>
                <NewsList newsdata={ newsdata }/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Column 1</h2>
            </Grid.Column>
        </Grid>
    )
}