import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <div className="py-5 bg-light" id="about">
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
                Thanks to our loyal customers, we expanded in 2014 under the name <strong>Track Moving Spares</strong>, supplying parts for machines like <strong>Hitachi, KOMATSU, JS, Volvo, Hyundai, All Mini Excavaters, Rock Breakers and Lubricants</strong>.
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
                  <img
                    src= "/src/assets/E1.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/E2.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/E3.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/E4.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/K1.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/K2.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/K3.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/K4.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/A2.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/A3.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src= "/src/assets/A4.jpg"
                    alt="Company Branch"
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '600px', width: '1200px' }}
                  />
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