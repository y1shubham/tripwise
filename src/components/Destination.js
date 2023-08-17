import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal Lake, lake in southwestern Luzon, Philippines, occupying a
            volcanic crater with a maximum width of 15 miles (24 km), at less
            than 10 feet (3 metres) above sea level. It has an area of 94 square
            miles (244 square km) and is the country’s third largest lake.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1} />
          <img alt="img" src={Mountain2} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
