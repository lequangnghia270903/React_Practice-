import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './component/Header';
import TableUser from './component/TableUsers';
function App() {
  return (
    <div className='app-containercontainer'>
      <Header/>
      <Container>
          <TableUser/>
      </Container>
      
    </div>
  );
}

export default App;
