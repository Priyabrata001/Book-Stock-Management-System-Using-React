import React from 'react';


function CompanyContact() {

  return (
    <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="company-info">
              <h3>Company Name</h3>
              <p>Cognizant</p>
            </div>
          </div>
          <div className="company-contact">
      <div className="row">
          <div className="col">
            <div className="contact-us-forgot-password">
              <h3>Contact Us if You Forget Password</h3>
              <p>If you forget your password, please contact our customer care team for assistance.</p>
             </div>
          </div>
        </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><span>Phone:</span> +1 (123) 456-7890</p>
              <p><span>Email:</span> info@cognizant.com</p>
              <p><span>Address:</span> 500 Frank W. Burr Blvd, Teaneck, NJ 07666, USA</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-company">
              <h3>About Cognizant</h3>
              <p>Cognizant is an American multinational corporation that provides IT services, including digital, technology, consulting, and operations services. Headquartered in Teaneck, New Jersey, Cognizant is ranked 194th on the Fortune 500 list as of 2022.</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default CompanyContact;
