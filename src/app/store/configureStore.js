import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import newsReducer from '../../features/news/newsReducer';

export function configureStore(){
    return createStore(newsReducer, devToolsEnhancer());
}