import { Card } from 'react-bootstrap';
import '../css/CardGrid.css';
import '../css/Backgrounds.css';
import { thumbnails } from "../../images/index.js";

export const cardInfo = [
  { name: "Granblue Fantasy", link: "/gbf", title: "GBF calculator", img: thumbnails.gbf_img},
  { name: "Genshin Impact", link: "/genshin", title: "Genshin Calculator", img: thumbnails.genshin_img},
  { name: "Project Sekai", link: "/prosekai", title: "Project Sekai Calculator", img: thumbnails.pjsekai_img},
];

const CardGrid = () => {

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