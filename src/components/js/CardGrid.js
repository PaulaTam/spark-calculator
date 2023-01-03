import { Card } from 'react-bootstrap';

const CardGrid = () => {
    return (
        <Card>
        <Card.Body>
          <Card.Title>GBF Calculator</Card.Title>
          <Card.Link href='/gbf'>Go to calculator</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default CardGrid;