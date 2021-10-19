import './App.css'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import kidy from './images/kidy.jpeg'

function App() {
  return (
    <>
      <div className='App'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={kidy} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default App
