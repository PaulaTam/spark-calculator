import '../css/CardGrid.css';
import { Card } from 'react-bootstrap';

const CardGrid = () => {

  const cardInfo = [
    { link: "/gbf", title: "GBF calculator" }
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Link href={card.link}>Go to calculator</Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return (<div className="grid">{cardInfo.map(renderCard)}</div>);
  
};

export default CardGrid;