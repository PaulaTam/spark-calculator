import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
import '../css/CardGrid.css';
import '../css/Backgrounds.css';
import { thumbnails } from "../../images/index.js";
import { Link } from 'react-router-dom';

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
          <Card.Title>
            <Link class="title" to={card.link}>{card.title}</Link>
          </Card.Title>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    )
  }

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add('card_grid_bg');
}, []);

  return (
    <div class="card-grid">
      {cardInfo.map(renderCard)}
    </div>
    );
  
};

export default CardGrid;