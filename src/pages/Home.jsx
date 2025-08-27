import logo from '../assets/logo.png';
import About from "./About";
import Contact from "./Contact";
import Services from './Services';

const Home = () => {
  return (
    <>
        <div className="home-section b1 py-5" id="home">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center text-lg-start">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src={logo}
                  alt="Track Moving Spares Logo"
                  className="img-fluid logo-image"
                  style={{ maxWidth: '300px' }}/>     
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-theme-yellow">Track Moving Spares</h1>
                <h2 className="text-theme-orange mt-3">A Group of Perfect Earth Moving</h2>
                <p className="text-theme-silver mt-4 fs-5">
                  All high quality replacement spares for JCB, Hitachi, Komatsu, Mini Excavators, Rock Breakers & Lubricants available.
                </p>
              </div>
            </div>
          </div>
        </div>
        <About/>
        <Services/>
        <Contact/>
    </>
  );
};

export default Home;