// Event Component
const Event = ({ imgSrc, title, date }) => {
  return (
    <div className="event">
      <img src={imgSrc} alt={title} />
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
      imgSrc: "https://picsum.photos/200",
      title: "Arrangement 1",
      date: "09.06.2023 kl. 20.00",
    },
    {
      imgSrc: "https://picsum.photos/300",
      title: "Arrangement 2",
      date: "09.06.2023 kl. 20.00",
    },
    {
      imgSrc: "https://picsum.photos/400",
      title: "Arrangement 3",
      date: "09.06.2023 kl. 20.00",
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
