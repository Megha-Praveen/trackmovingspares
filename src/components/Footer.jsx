import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="b1 text-dark py-5">
      <div className="container">
        <div className="row">

          {/* Main Branch Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-primary mb-3"><img src={logo}  alt="Logo"  width="45"  height="45"  className="me-2 rounded-circle border-2 border-primary"/> Track Moving Spares</h4>
            <p className="mb-1 text-light">A Group of Perfect Earth Moving</p>
            <p className="mb-1 text-light">All high quality replacement spares for JCB, Hitachi, Komatsu, Mini Excavaters, Rock Breakers & Lubricants available.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-primary mb-3">Main Branch</h5>
            <p className='text-light'>
              <i className="fa-solid fa-location-dot text-primary me-2"></i>
              <strong>Address:</strong> Ettumanoor - Ernakulam Road, Near Popular JCB Showroom, Kanakkary, Ettumanoor, Kottayam, Kerala, 686632.
            </p>
            <p className='text-light'>
              <i className="fa-solid fa-phone text-primary me-2"></i>
              <strong>Phone:</strong> 9747081004, 9746362700
            </p>
            <p className='text-light'>
              <i className="fa-solid fa-envelope text-primary me-2"></i>
              <strong>Email:</strong> trackmoving@gmail.com
            </p>
            <p className='text-light'>
              <i className="fa-solid fa-clock text-primary me-2"></i>
              <strong>Hours:</strong> Mon - Sat: 8:30 AM - 6:30 PM
            </p>
          </div>

          {/* Branches Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary mb-3">Branches</h5>
            <ul className="list-unstyled">
              <li className="mb-3 text-light">
                <i className="fa-solid fa-location-dot text-primary me-2"></i>
                Njallampuzha Building, Panakkapalam Jn., Erattupetta<br />
                <i className="fa-solid fa-phone text-primary me-2"></i>
                7558087321
              </li>
              <li className="mb-3 text-light">
                <i className="fa-solid fa-location-dot text-primary me-2"></i>
                Vazhoor Road, Near Nethalloor Jn., Karukachal<br />
                <i className="fa-solid fa-phone text-primary me-2"></i>
                8078541071
              </li>
              <li className="mb-3 text-light">
                <i className="fa-solid fa-location-dot text-primary me-2"></i>
                Chempalayil Building, near Haya Super Market, Appanchira, Kaduthuruthy, 686604<br />
                <i className="fa-solid fa-phone text-primary me-2"></i>
                9495576632
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-top border-secondary my-3" />

        {/* Footer Bottom */}
        <div className="text-center">
          <small className="text-light">
            &copy; 2011 <span className="text-primary">Track Moving Spares</span>. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;