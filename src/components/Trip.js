import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indoneshia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeat Asia and
        Oceanic between the Indian and Pacific oceans.It consits of over 17,000
        islands, including sumatra, Java, Sulaiwesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malasia"
          text="Malaysia, country of Southeast Asia, lying just north of the Equator, that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat), which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, officially French Republic, French France or République Française, country of northwestern Europe. Historically and culturally among the most important nations in the Western world, France has also played a highly significant role in international affairs, with former colonies in every corner of the globe. "
        />
      </div>
    </div>
  );
}

export default Trip;
