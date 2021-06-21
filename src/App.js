import React from 'react';

// Components
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import { ReadAll } from './Components/ReadAll/Readall'
import { Create } from './Components/Create/Create'
import { DeleteAll } from './Components/DeleteAll/Deletall'
import { About } from './Components/About/About'

// Assets
import logo from './Img/logo.png'

// Styles 
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/App.scss';


function App() {
  return (
    <>
      <div className='logoBar'>
        <img className='logoImg' src={logo} alt='Logo do anime Dragon Ball Z' />
      </div>

    
      <Navbar className='justify-content-center' expand='sm'>
        <Nav>
          <Nav.Link id='link-style' href='/'>Início</Nav.Link>
          <Nav.Link id='link-style' href='/create'>Criar</Nav.Link>
          <Nav.Link id='link-style' href='/delete-all'>Deletar tudo</Nav.Link>
          <Nav.Link id='link-style' href='/about'>Sobre</Nav.Link>
          
          
        </Nav>
      </Navbar>

      <Container className='app-container'>
        <Row>
          <Col>
            <Switch>
              <Route path='/' exact={true} component={ReadAll}></Route>
              <Route path='/create' component={Create}></Route>
              <Route path='/delete-all' component={DeleteAll}></Route>
              <Route path='/about' component={About}></Route>
            </Switch>

          </Col>
        </Row>
      </Container>
    </>    
  );
}

export default App;