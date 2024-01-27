import "./Menu.css";

import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

import BreakfastImg from "../../assets/5.jpg";
import LunchImg from "../../assets/20.jpg";
import DinnerImg from "../../assets/9.jpg";
import DessertImg from "../../assets/8.jpg";

const breakfast = [
  {
    id: 1,
    name: "English Breakfast",
    description:
      "smoked bacon , sausage, tomato, mushrooms, black pudding, baked beans, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "$8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "$11",
  },
];

const lunch = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "chicken breast, romaine lettuce, croutons, parmesan",
    price: "$15",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper",
    price: "$14",
  },
  {
    id: 3,
    name: "Pizza",
    description: "Chorizo, italian salami, tomatoes, mushrooms, olives",
    price: "$12",
  },
];

const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: "spicy beef, potatoes, carrots, cheese, sauce, spices",
    price: "$17",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "onion, carrot, celery, minced meat, spaghetti, parmesan",
    price: "$15",
  },
  {
    id: 3,
    name: "Chickpea Curry",
    description: "onion, chickpea, garlic, mushrooms, tomatoes, spices",
    price: "$12",
  },
];

const dessert = [
  {
    id: 1,
    name: "Lemon Cake",
    description: "flour, sugar, baking powder, lemon",
    price: "$9",
  },
  {
    id: 2,
    name: "Cinnamon Rolls",
    description: "flour, salt, sugar, cinnamon, sour cream, milk",
    price: "$11",
  },
  {
    id: 3,
    name: "Vegan Pancakes",
    description: "flour, sugar, baking powder, soya milk, blueberries",
    price: "$8",
  },
];

const Menu = () => {
  return (
    <div className="menu_page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Breakfast
          </h2>

          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                loading="lazy"
                className="dark_outline object-fit-cover img-fluid w-75 mt-4 mt-lg-0"
                src={BreakfastImg}
                alt="img"
              />
            </div>

            <div className="col-lg-6 d-flex-column justify-content-around">
              {breakfast.map((item, index) => {
                return (
                  <div key={item.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {item.name}
                        </CardTitle>

                        <CardText className="text-center fs-5">
                          {item.description}
                        </CardText>

                        <CardText className="text-center fs-3 fw-bold text-success ">
                          {item.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch py-5 bg-dark">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Lunch
          </h2>

          <div className=" row ">
            <div className=" col-lg-6 d-flex-column justify-content-around">
              {lunch.map((item, index) => {
                return (
                  <div key={item.id}>
                    <Card className=" text-light bg-dark border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {item.name}
                        </CardTitle>

                        <CardText className="text-center fs-5">
                          {item.description}
                        </CardText>

                        <CardText className="text-center fs-3 fw-bold text-success ">
                          {item.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <img
                loading="lazy"
                className="light_outline object-fit-cover img-fluid w-75 mt-4 mt-lg-0"
                src={LunchImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dinner
          </h2>

          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                loading="lazy"
                className="dark_outline object-fit-cover img-fluid w-75 mt-4 mt-lg-0"
                src={DinnerImg}
                alt="img"
              />
            </div>

            <div className="col-lg-6 d-flex-column justify-content-around">
              {dinner.map((item, index) => {
                return (
                  <div key={item.id}>
                    <Card className="border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {item.name}
                        </CardTitle>

                        <CardText className="text-center fs-5">
                          {item.description}
                        </CardText>

                        <CardText className="text-center fs-3 fw-bold text-success ">
                          {item.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="dessert py-5 bg-dark">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dessert
          </h2>

          <div className=" row ">
            <div className=" col-lg-6 d-flex-column justify-content-around">
              {dessert.map((item) => {
                return (
                  <div key={item.id}>
                    <Card className=" text-light bg-dark border-0">
                      <CardBody>
                        <CardTitle className="text-center fs-3">
                          {item.name}
                        </CardTitle>

                        <CardText className="text-center fs-5">
                          {item.description}
                        </CardText>

                        <CardText className="text-center fs-3 fw-bold text-success ">
                          {item.price}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <img
                loading="lazy"
                className=" light_outline object-fit-cover img-fluid w-75 mt-4 mt-lg-0"
                src={DessertImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
