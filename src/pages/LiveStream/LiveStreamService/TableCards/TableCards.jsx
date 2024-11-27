export default function TableCards() {
  const cardData = [
    {
      title: "Sunday Morning 04-02-23",
      deliveredBy: "Bible Baptist Church - Burlington/Alamance, NC",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Morning 05-07-2023 Rubbing Someone the Right Way",
      deliveredBy: "Bible Baptist Church - Burlington/Alamance, NC",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Morning 05-28-2023 Guest Preacher Steve Shook",
      deliveredBy: "Bible Baptist Church - Burlington/Alamance, NC",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "04-11-2023 Bro. Mike Bradsher's Funeral",
      deliveredBy: "Bible Baptist Church - Burlington/Alamance, NC",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Morning 04-09-23",
      deliveredBy: "Pastor Kevin Bunn",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Morning 04-16-23",
      deliveredBy: "Pastor Kevin Bunn",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Night 04-16-23",
      deliveredBy: "Pastor Kevin Bunn",
      date: "Sunday, 4th June 2023",
    },
    {
      title: "Sunday Morning 06-4-2023 There is One Nation Under God",
      deliveredBy: "Pastor Kevin Bunn",
      date: "Sunday, 4th June 2023",
    },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 p-8 flex flex-col gap-4"
        >
          <span className="text-base">{card.title}</span>
          <span className="text-base font-bold">Delivered By</span>
          <span className="text-base">{card.deliveredBy}</span>
          <span className="text-base font-bold">Date</span>
          <span className="text-base">{card.date}</span>
        </div>
      ))}
    </div>
  );
}
