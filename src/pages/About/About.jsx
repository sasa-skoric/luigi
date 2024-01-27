import "./About.css";

import AboutImg1 from "../../assets/1.jpg";
import AboutImg2 from "../../assets/2.jpg";

import ImageGallery from "../../components/ImageGallery";
import Reviews from "../../components/Reviews/Reviews";

const About = () => {
  return (
    <div className="about_page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          officia nesciunt sint, sunt expedita dolorum assumenda itaque tempora
          debitis, quaerat nostrum alias id soluta. Voluptas debitis nam dolores
          qui, eius ratione quibusdam, repellat blanditiis totam voluptatibus
          corrupti amet eaque dolor!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus doloremque dolorem ipsa fugiat amet fuga aliquid ex
          dolor ab aspernatur fugit, et expedita veniam, a quos cum sequi
          delectus eligendi, id repellat. Placeat, deserunt! Omnis, quibusdam
          nemo necessitatibus perspiciatis dicta dolores fugiat provident
          repellat officia minus, quaerat adipisci aperiam maiores doloremque,
          delectus corrupti cum. Labore a laudantium iusto voluptatum tenetur
          rerum, deleniti inventore dicta voluptatem excepturi vero, officiis
          ipsam necessitatibus!
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid my-4"
              loading="lazy"
              src={AboutImg1}
              alt="img"
            />
          </div>

          <div className="col-lg-6">
            <img
              className="img-fluid my-4"
              src={AboutImg2}
              alt="img"
              loading="lazy"
            />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          possimus unde fugit reprehenderit modi. Accusamus eaque harum quis
          facere enim molestias hic ab quam recusandae, ea ducimus blanditiis.
          Provident a aut delectus, labore iste voluptatum suscipit maxime
          officia facilis reiciendis deleniti fugiat repudiandae adipisci odio
          id molestiae sint excepturi amet veritatis esse qui voluptatem aliquid
          nihil! Cupiditate laudantium facilis cum iste non sunt expedita
          dignissimos saepe, molestiae incidunt praesentium tenetur, minus
          molestias in ut similique, necessitatibus delectus libero quibusdam
          voluptatibus.
        </p>
      </div>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
};

export default About;
