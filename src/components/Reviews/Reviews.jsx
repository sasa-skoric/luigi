import "./Reviews.css";

import Person1 from "../../assets/22.jpg";
import Person2 from "../../assets/23.jpg";
import Person3 from "../../assets/24.jpg";
import Person4 from "../../assets/25.jpg";

import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="reviews_component container">
      <h2 className="text-center my-5 text-uppercase fw-bold fs-1">Reviews</h2>

      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium maxime veritatis consectetur corrupti excepturi
                  molestias.
                </CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center ">
              <img
                className="img-fluid rounded-circle mx-3 shadow"
                src={Person1}
                alt="img"
              />

              <CardTitle className="text-success">Marry Simons</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium maxime veritatis consectetur corrupti excepturi
                  molestias.
                </CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center ">
              <img
                className="img-fluid rounded-circle mx-3 shadow"
                src={Person2}
                alt="img"
              />

              <CardTitle className="text-success">Jay Lerny</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium maxime veritatis consectetur corrupti excepturi
                  molestias.
                </CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center ">
              <img
                className="img-fluid rounded-circle mx-3 shadow"
                src={Person3}
                alt="img"
              />

              <CardTitle className="text-success">Tim Rawlu</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium maxime veritatis consectetur corrupti excepturi
                  molestias.
                </CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center ">
              <img
                className="img-fluid rounded-circle mx-3 shadow"
                src={Person4}
                alt="img"
              />

              <CardTitle className="text-success">Richa Garry</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
