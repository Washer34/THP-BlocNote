import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import MarkdownInput from './components/MarkdownInput.jsx';
import LeftDisplay from './components/LeftDisplay.jsx'



const App = () => {

  return (
    <div>
      <MarkdownInput />
    </div>
  );

};

ReactDOM.render(<App />, document.getElementById('root'));
