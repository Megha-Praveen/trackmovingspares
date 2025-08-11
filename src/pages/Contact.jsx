import A1 from '../assets/A1.jpg';
import E1 from '../assets/E1.jpg';
import K1 from '../assets/K1.jpg';
import P1 from '../assets/P1.jpg';

const Contact = () => {
  const branchData = [
    {
      title: "Main Branch",
      image: E1,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7865.681483184077!2d76.54113866989162!3d9.694630500000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d5593feec9a1%3A0xb9605a90b55d716f!2sTrackmoving%20Spares!5e0!3m2!1sen!2sin!4v1747058837923!5m2!1sen!2sin",
      address:
        "Ettumanoor - Ernakulam Road, Near Popular JCB Showroom, Kanakkary, Ettumanoor, Kottayam, Kerala, 686 632",
      phone: "9747081004, 9746362700",
      email: "trackmoving@gmail.com",
      time: "Mon - Sat: 8:30 AM - 6:30 PM",
    },
    {
      title: "Erattupetta Branch",
      image: P1,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.780858083474!2d76.75912886388018!3d9.699735892616433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cb006f7f2861%3A0xbacc6d6a76e236be!2sTrack%20Moving%20Spares!5e0!3m2!1sen!2sin!4v1747060143354!5m2!1sen!2sin",
      address: "Njallampuzha Building, Panakkapalam Jn., Erattupetta.",
      phone: "7558087321",
      time: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      title: "Karukachal Branch",
      image: K1,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7869.937638191342!2d76.6288238935791!3d9.511438500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062e2bacaee48d%3A0xcfb23daf8e97bee1!2sTRACK%20MOVING%20SPARES!5e0!3m2!1sen!2sin!4v1747059930681!5m2!1sen!2sin",
      address: "Vazhoor Road, Near Nethalloor Jn., Karukachal.",
      phone: "8078541071",
      time: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
    {
      title: "Kaduthuruthy Branch",
      image: A1,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7863.757369203303!2d76.4613337935791!3d9.776331500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d70007e21a1b%3A0xcd86240b1dba357a!2sTrack%20Moving%20Spares!5e0!3m2!1sen!2sin!4v1747059992671!5m2!1sen!2sin",
      address:
        "Chempalayil building, near Haya super market, Appanchira, Kaduthuruthy, 686604.",
      phone: "9495576632",
      time: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="py-5 b1 text-light" id="contact">
      <div className="container">
        <h1 className="text-center text-primary fw-bold mb-5">Contact Us</h1>

        {branchData.map((branch, index) => (
          <div className="row mb-5 g-4 align-items-center" key={index}>
            <div className="col-lg-4 text-center">
              <img
                src={branch.image}
                alt={branch.title}
                className="img-fluid rounded shadow"
                style={{ height: "300px", objectFit: "cover" }}/>
            </div>
            <div className="col-lg-4 text-center">
              <iframe
                src={branch.mapSrc}
                style={{ height: "300px", width:"100%"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.title} Location`}
              ></iframe>
            </div>
            <div className="col-lg-4">
              <div className="text-light">
                <h5 className="fw-bold mb-3">{branch.title}</h5>
                <p>
                  <i className="fa-solid fa-location-dot text-warning me-2"></i>
                  {branch.address}
                </p>
                <p>
                  <i className="fa-solid fa-phone text-warning me-2"></i>
                  {branch.phone}
                </p>
                {branch.email && (
                  <p>
                    <i className="fa-solid fa-envelope text-warning me-2"></i>
                    {branch.email}
                  </p>
                )}
                <p>
                  <i className="fa-solid fa-clock text-warning me-2"></i>
                  {branch.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;