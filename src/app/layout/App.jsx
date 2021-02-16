import Navbar from '../../features/nav/Navbar';
import NewsDashboard from '../../features/news/newsDashboard/NewsDashboard';
import './styles.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import NewsDetailedPage from '../../features/news/newsDetailed/NewsDetailedPage';

function App() {
  return (
    <>
        <Navbar />
        <Container className='main'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/news' component={NewsDashboard} />
          <Route path='/news/:id' component={NewsDetailedPage} />                    
        </Container>
    </>    
  );
}

export default App;
