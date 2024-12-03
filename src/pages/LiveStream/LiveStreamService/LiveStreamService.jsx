export default function LiveStreamService() {
  const services = [
    {
      day: "Sunday",
      time: "Morning Service 11:00 AM",
    },
    {
      day: "Sunday",
      time: "Evening Service 6:00 PM",
    },
    {
      day: "Wednesday",
      time: "Evening Service 7:00 PM",
    },
  ];

  return (
    <section className="my-40">
      <div className="max-w-[130rem] mx-auto px-8">
        {/* Live Session */}
        <div>
          <a
            href="https://rumble.com/c/c-5913852"
            target="_blank"
            className="inline-flex items-center justify-center gap-4 bg-gray-900 text-white py-6 px-6 font-['Mulish'] text-lg font-semibold no-underline"
          >
            Click here to view BBC live stream
          </a>
        </div>

        {/* Recordings */}
        <div className="mt-12">
          <h2 className="mt-8 mb-8 font-black text-[3.2rem] text-[#242121]">
            We are live at
          </h2>

          {/* Service Cards */}
          <div className="flex sm:flex-col justify-between items-start gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full border border-[#F3F3F3] flex flex-col items-center p-12"
              >
                <h4 className="text-xl mb-4">{service.day}</h4>
                <p>{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
