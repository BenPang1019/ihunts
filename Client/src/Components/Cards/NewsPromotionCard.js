import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

const NewsPromotionCard = props => {
  let { imgSrc, by, date, title, description } = props.data1;
  return (
    <div>
      {[
        'Trasnparent',
      ].map((variant) => (
        <Card bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ backgroundColor: 'transparent', border: 'none' }}
          className="m-2">
          <div class="card">
            <div class="card-body">
              <Card.Img className='np-card-image' src={imgSrc} />
              <div class="clearfix mb-3 mt-3">
                <span className='np-card-by '>{by}</span>
                <span className='np-card-date '>{date}</span>
              </div>
              <p class="np-card-title">{title}</p>
              <div className='np-card-description'>{description}</div>
              <a class="np-read-more " href="#">
                <span> &gt; Read More</span>
              </a>
            </div>
          </div>
        </Card>
      ))
      }
    </div>
  )
}

export default NewsPromotionCard;