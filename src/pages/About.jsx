import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <div className="py-3 bg-light" id="about">
      <div className="container">
        <h1 className="text-primary text-center fw-bold mb-4">About Us</h1>
        <div className="row align-items-center justify-content-center text-center text-lg-start">
          <div className="col-lg-6">
            <p className="text-dark lead mb-4">
              Established in 2011 at Ettumanoor, <strong>Perfect Earth Moving Parts</strong> began its journey by addressing the spare part challenges of our own JCB machines. The struggle to find reliable and affordable parts inspired us to start a venture dedicated to providing quality spares.
            </p>
            <p className="text-dark lead mb-4">
              In a market flooded with counterfeit products, sourcing genuine parts at reasonable rates was a major hurdle. Through persistence and research, we partnered with reputable suppliers across India and abroad, ensuring trust and quality.
            </p>
            <p className="text-dark lead mb-4">
              Thanks to our loyal customers, we expanded in 2014 under the name <strong>Track Moving Spares</strong>, catering to machines like Hitachi, KOMATSU, JS, Volvo, Hyundai, All Mini Excavaters, Rock Breakers and Lubricants.
            </p>
            <p className="text-dark lead mb-4">
              Today, our footprint extends beyond Ettumanoor with branches in Erattupetta (Panakkapalam), Karukachal (Nethalloor), and Kaduthuruthy (Appanchira), all within Kottayam District. Our journey has been powered by a passionate team, our valued customers, and above all, the grace of God.
            </p>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <Carousel fade indicators={false} controls={true}>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Company Branch"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/src/assets/about4.jpg"
                  alt="Spare Parts Display"
                  className="d-block w-100 rounded shadow-sm"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;