import '../css/CardGrid.css';
import { Card } from 'react-bootstrap';

const CardGrid = () => {

  const cardInfo = [
    { link: "/gbf", title: "GBF calculator", img: "../images/wall_of_crystals.png"},
    { link: "/genshin", title: "Genshin Calculator", img: "../images/genshin-wish.png"},
    { link: "/prosekai", title: "Project Sekai Calculator", img: "../images/pjsekai-crystals.png"},
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img src={card.img} alt="Card image" style={{opacity: .75}} />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Link href={card.link}>Click Here</Card.Link>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    )
  }

  return (
    <div class="card-grid">
      {cardInfo.map(renderCard)}
    </div>
    );
  
};

export default CardGrid;