const Services = () => {
  return (
    <div className="py-5 b1 text-light" id="services">
      <div className="container">
        <h1 className="text-center text-primary fw-bold mb-5">Explore Our Range</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h3 className="fw-bold mb-4 text-center">Quality Spares, Wide Selection</h3>
            <div className="row g-4">
              {[
                "Pin Bushes",
                "Under Carriage Parts",
                "Seal Kits",
                "Tooth & Adaptors",
                "Filters",
                "Breaker Chisels",
                "Lubricants"
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="p-4 rounded-4 shadow-sm text-center h-100 border border-primary bg-gradient bg-dark service-card">
                    <span className="fs-5 fw-bold d-block">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS for hover animation */}
      <style jsx>{`
        .service-card {
          transition: all 0.3s ease-in-out;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.03);
          background: linear-gradient(135deg, #0d6efd, #1a1a1a);
          border-color: #0d6efd;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.4);
        }
      `}</style>
    </div>
  )
}

export default Services