import '../css/CardGrid.css';
import { Card, Container } from 'react-bootstrap';

const CardGrid = () => {

  const cardInfo = [
    { link: "/gbf", title: "GBF calculator" },
    { link: "/genshin", title: "Genshin Calculator"},
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Link href={card.link}>Click Here</Card.Link>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
      {cardInfo.map(renderCard)}
    </>
    );
  
};

export default CardGrid;