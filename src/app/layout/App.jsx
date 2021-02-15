import Navbar from '../../features/nav/Navbar';
import NewsDashboard from '../../features/news/newsDashboard/NewsDashboard';
import './styles.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
        <Navbar />
        <Container className='main'>
          <NewsDashboard />
        </Container>
    </>    
  );
}

export default App;
