import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardRB() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardRB;