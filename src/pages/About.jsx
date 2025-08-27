import Carousel from 'react-bootstrap/Carousel';

// ✅ Import images from src/assets
import A2 from '../assets/A2.jpg';
import A3 from '../assets/A3.jpg';
import A4 from '../assets/A4.jpg';
import E1 from '../assets/E1.jpg';
import E2 from '../assets/E2.jpg';
import E3 from '../assets/E3.jpg';
import E4 from '../assets/E4.jpg';
import K1 from '../assets/K1.jpg';
import K2 from '../assets/K2.jpg';
import K3 from '../assets/K3.jpg';
import K4 from '../assets/K4.jpg';

const About = () => {
  return (
    <div className="py-5 b2" id="about">
      <div className="container">
        <h1 className="text-primary text-center fw-bold mb-5">About Us</h1>
        <div className="row align-items-center justify-content-center text-center text-lg-start g-5">
          {/* Text Section */}
          <div className="col-lg-6">
            <div className="p-2 rounded shadow-sm">
              <p className="text-dark lead mb-4 text-justify">
                Established in 2011 at Ettumanoor, <strong>Perfect Earth Moving Parts</strong> began its journey by addressing the spare part challenges of our own <strong>JCB</strong> machines. The struggle to find reliable and affordable parts inspired us to start a venture dedicated to providing quality spares.
              </p>
              <p className="text-dark lead mb-4 text-justify">
                In a market flooded with counterfeit products, sourcing genuine parts at reasonable rates was a major hurdle. Through persistence and research, we partnered with reputable suppliers across India and abroad, ensuring trust and quality.
              </p>
              <p className="text-dark lead mb-4 text-justify">
                Thanks to our loyal customers, we expanded in 2014 under the name <strong>Track Moving Spares</strong>, supplying parts for machines like <strong>JCB, Hitachi, KOMATSU, JS, Volvo, Hyundai, All Mini Excavators, Rock Breakers and Lubricants</strong>.
              </p>
              <p className="text-dark lead mb-0 text-justify">
                Today, our footprint extends beyond Ettumanoor with branches in <strong>Erattupetta (Panakkapalam)</strong>, <strong>Karukachal (Nethalloor)</strong>, and <strong>Kaduthuruthy (Appanchira)</strong>, all within Kottayam District. Our journey has been powered by a passionate team, our valued customers, and above all, the grace of God.
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="rounded shadow-sm overflow-hidden">
              <Carousel fade indicators={false} controls={true}>
                <Carousel.Item>
                  <img src={E1} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={E2} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={E3} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={E4} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={K1} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={K2} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={K3} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={K4} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={A2} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={A3} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={A4} alt="Company Branch" className="d-block w-100" style={{ objectFit: 'cover', height: '600px', width: '1200px' }} />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;