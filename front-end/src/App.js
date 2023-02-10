import { Container } from 'react-bootstrap';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import TablePage from './components/TablePage';
import { useState } from 'react';
import './index.css'

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [showTable, setShowTable] = useState(false);
  return (
    <Container>
      <FirstPage setShowSecondPage={setShowSecondPage} />
      {
        showSecondPage && (
          <SecondPage setShowTable={setShowTable}/>
        )
      }
      {
        showTable && (
          <TablePage />
        )
      }
    </Container>
  );
}

export default App;
