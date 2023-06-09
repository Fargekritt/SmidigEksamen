// Event Component
const Event = ({ imgSrc, title, date }) => {
  return (
    <div className="event">
      <div className="image-wrapper">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

// Events Wrapper Component
const UpcomingEvents = () => {
  const events = [
    {
      imgSrc:
        "https://www.munchmuseet.no/globalassets/foto-munch/late-night/050_kil-2474.jpg?mode=crop&quality=75&w=1400&h=700&crop=0,912,10944,6384",
      title: "Late Night på MUNCH",
      date: "09.06.2023 kl. 20.00",
    },
    {
      imgSrc:
        "https://www.munchmuseet.no/globalassets/foto-formidling/barnas-kunstdag/amr07569.jpg?mode=crop&quality=75&w=1400&h=700&crop=0,200,2386,1393",
      title: "MINIMUNCH: Barnas kunstdag",
      date: "10.06.2023 kl. 11.00 - 14.30",
    },
    {
      imgSrc:
        "https://www.munchmuseet.no/globalassets/edvard-munch-foto/edvard-munchs-film.jpg?mode=crop&quality=75&w=1400&h=700&crop=0,32,1908,986",
      title: "Kunstprat for medlem: Munch-serien",
      date: "21.06.2023 kl. 18.00",
    },
    {
      imgSrc:
        "https://www.munchmuseet.no/globalassets/foto-munch/eksterior/dsc_8161.jpg?mode=crop&quality=75&w=1400&h=700&crop=0,900,1800,1800",
      title: "Ung feiring sommer",
      date: "24.06.2023 kl. 16.30",
    },
    // Add more events as needed
  ];

  return (
    <div className="events-wrapper">
      <h2>Arrangementer</h2>
      {events.map((event, index) => (
        <Event
          key={index}
          imgSrc={event.imgSrc}
          title={event.title}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default UpcomingEvents;
