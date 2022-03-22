import './home.css'
import Card from 'react-bootstrap/Card'

import img1 from '../Images/img1.JPG'
import img2 from '../Images/img2.JPG'
import img3 from '../Images/img3.JPG'

function Home() {
  return (
    <div>
        <div className="heroContainer">
          <div className="heroText">
            <h1>Triton</h1>
            <h2>A new way to manage your time</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>

        </div>
        <div className="about-section">
          <div className="imageFlex">
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title className="text-center">Safety</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title className="text-center">Quality</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title className="text-center">Care</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis ullam laborum ratione iusto quod aliquam culpa similique nihil reiciendis incidunt, provident dicta iste atque, rerum cumque. Quisquam, laudantium asperiores.
          </div>
        </div>
    </div>
      
    
  )
}

export default Home