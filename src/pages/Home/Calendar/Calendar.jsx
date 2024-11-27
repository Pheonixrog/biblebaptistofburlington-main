export default function Calendar() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[130rem]">
        <div>
          {/* Heading Section */}
          <div className="text-center mx-auto w-[644px] sm:w-full sm:px-8">
            <h2 className="text-[5.4rem] font-black sm:text-[3.2rem]">
              Church Calendar
            </h2>
            <p className="text-[#605757] text-[1.8rem] font-semibold leading-relaxed sm:text-[1.2rem]">
              Check our church calendar – it&apos;s the roadmap to good times.
              Days of worship, hangouts, and doing good shine in Carolina blue.
              Don&apos;t miss out!
            </p>
          </div>

          {/* Calendar iframe */}
          <div className="flex justify-center">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=bbcofburlington%40gmail.com&ctz=America%2FNew_York"
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar"
              className="lg:w-4/5 lg:h-[60rem] sm:w-[90%] sm:h-[45rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
