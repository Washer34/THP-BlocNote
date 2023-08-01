import { useEffect, useState } from 'react';
import NoteDisplay from './NoteDisplay.jsx';
import LeftDisplay from './LeftDisplay.jsx';
import { Row, Col, Container } from 'react-bootstrap';

function MarkdownInput() {
  const [values, setValues] = useState({ title: '', content: '' });
  const [data, setData] = useState([])
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);


  useEffect(() => {
    const savedNote = localStorage.getItem('blocNote')
    if (savedNote) {
      setValues(JSON.parse(savedNote))
      setData([...data, values])
    }
  }, []);


  const handleChange = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSave = () => {
    const date = new Date().toLocaleTimeString();
    setData([...data, values])
    localStorage.setItem(date, JSON.stringify(values))
  };

  const openCard = (index) => {
    setSelectedCardIndex(index)
    setValues(data[index])
  }


  return (
    <Container fluid>
      <Row>
        <Col md={2} style={{ height: '100vh' }}>
          <LeftDisplay data={data} handleChange={handleChange} openCard={openCard}/>
        </Col>

        <Col md={10}>
          <Row style={{ height: '50%' }}>
              <NoteDisplay
                title={values.title}
                content={values.content}
              />
          </Row>
          <Row className="align-items-center justify-content-center" style={{ height: '50%' }}>
            <input style={{ width: '90%', height: '10%' }} value={values.title} onChange={handleChange('title')} />
            <textarea style={{ width: '90%', height: '70%' }} value={values.content} onChange={handleChange('content')} />
            <div className="col-11">
              <button type='submit' className='btn-custom' onClick={handleSave}>Sauvegarder</button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MarkdownInput;
