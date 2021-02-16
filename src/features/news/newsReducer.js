import {sampleData} from '../../app/api/sampleData';

const initialState = {
    news: sampleData
}

export default function newsReducer(state = initialState){
    return state;
}