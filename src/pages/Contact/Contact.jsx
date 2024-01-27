import "./Contact.css";
import { Form } from "react-bootstrap";

import ContactInfo from "../../components/ContactInfo";
import Reviews from "../../components/Reviews/Reviews";

import MapImg from "../../assets/21.png";

const Contact = () => {
  return (
    <div className="contact_page">
      <header className="mt-5">
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <h1 className="text-light">Contact</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <ContactInfo />

            <div className="mt-2 mb-3 d-flex justify-content-center align-items-center">
              <img className="img-fluid w-75" src={MapImg} alt="img" />
            </div>
          </div>

          <div className="mt-5 col-lg-6 d-flex align-items-center justify-content-center">
            <Form>
              <Form.Group className="row mb-3">
                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="first-name">First Name</Form.Label>

                  <Form.Control type="text" id="first-name" />
                </div>

                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="last-name">Last Name</Form.Label>

                  <Form.Control type="text" id="last-name" />
                </div>
              </Form.Group>

              <Form.Group className="row mb-3">
                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="email-address">E-mail</Form.Label>

                  <Form.Control type="email" id="email-address" />
                </div>

                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="phone-number">Phone Number</Form.Label>

                  <Form.Control type="tel" id="phone-number" />
                </div>
              </Form.Group>

              <Form.Group className="row mb-3">
                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="date">Date</Form.Label>

                  <Form.Control type="date" id="date" />
                </div>

                <div className="col-md-6 mb-2">
                  <Form.Label htmlFor="guest-number">
                    Number of Guests
                  </Form.Label>

                  <Form.Control type="number" id="guest-number" />
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label htmlFor="comments">Comments</Form.Label>

                <Form.Control type="textarea" id="comments" />
              </Form.Group>

              <button type="submit" className="btn btn-success w-100  ">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </div>
  );
};

export default Contact;
