const data = [
  {
    title: "Wednesday Night Service 05-29-24",
    date: "May 29th, 2024",
    link: "https://rumble.com/v4yyf16-wednesday-night-service-05-29-24.html",
  },
  {
    title: "Sunday Night service 05-26-24",
    date: "May 26th, 2024",
    link: "https://rumble.com/v4yygbh-sunday-night-service-05-26-24.html",
  },
  {
    title: "Sunday Morning service 05-26-2024",
    date: "May 26th, 2024",
    link: "https://rumble.com/v4yyh8l-sunday-morning-service-05-26-2024.html",
  },
  {
    title: "Wednesday Night service/prayer meeting 05-22-24",
    date: "May 22nd, 2024",
    link: "https://rumble.com/v4yyi6q-wednesday-night-serviceprayer-meeting-05-22-24.html",
  },
  {
    title: "5-12-24 Today's service is conducted by Missionary Brent Rochester",
    date: "May 12th, 2024",
    link: "https://rumble.com/v4vv9b3-5-12-24-todays-service-is-conducted-by-missionary-brent-rochester.html",
  },
  {
    title: "Pastor Kevin Bunn 05-08-24 Wednesday Night",
    date: "May 8th, 2024",
    link: "https://rumble.com/v4vv8of-pastor-kevin-bunn-05-08-24-wednesday-night.html",
  },
  {
    title: "Wednesday Night Service 5-5-24 Bro Steve Shook",
    date: "May 5th, 2024",
    link: "https://rumble.com/v4vva7f-wednesday-night-service-5-5-24-bro-steve-shook.html",
  },
  {
    title: "Pastor Kevin Bunn 5-5-24 Sunday Night",
    date: "May 5th, 2024",
    link: "https://rumble.com/v4vv7qw-pastor-kevin-bunn-5-5-24-sunday-night.html",
  },
  {
    title: "Pastor Kevin Bunn 5-5-24",
    date: "May 5th, 2024",
    link: "https://rumble.com/v4vv5z3-pastor-kevin-bunn-5-5-24.html",
  },
  {
    title:
      "Bible Baptist Church Wednesday Night Bible Study The destruction of Sodom and Gomorrah",
    date: "May 1st, 2024",
    link: "https://rumble.com/v4swxsi-bible-baptist-church-wednesday-night-bible-study-the-destruction-of-sodom-a.html",
  },
  {
    title: "Singing Service 4-28-24 with Jubilation",
    date: "April 28th, 2024",
    link: "https://rumble.com/v4swwrt-singing-service-4-28-24-with-jubilation.html",
  },
  {
    title: "Pastor Kevin Bunn Sunday Morning 4-28-24",
    date: "April 28th, 2024",
    link: "https://rumble.com/v4swvqr-pastor-kevin-bunn-sunday-morning-4-28-24.html",
  },
  {
    title: "Pastor Kevin Bunn Bible Baptist Church 04-24-2024",
    date: "April 24th, 2024",
    link: "https://rumble.com/v4swuir-pastor-kevin-bunn-bible-baptist-church-04-24-2024.html",
  },
  {
    title: "4-14-24 Sunday Morning Pastor Kevin Bunn",
    date: "April 14th, 2024",
    link: "https://rumble.com/v4q1sqw-4-14-24-sunday-morning-pastor-kevin-bunn.html",
  },
  {
    title: "Pastor Kevin Bunn 04-07-2024 Sunday Night service",
    date: "April 7th, 2024",
    link: "https://rumble.com/v4o9493-pastor-kevin-bunn-04-07-2024-sunday-night-service.html",
  },
  {
    title: "Pastor Kevin Bunn 04-07-2024 Sunday Morning",
    date: "April 7th, 2024",
    link: "https://rumble.com/v4o9168-pastor-kevin-bunn-04-07-2024-sunday-morning.html",
  },
  {
    title: "Bible Baptist Church 04-07-2024",
    date: "April 7th, 2024",
    link: "https://rumble.com/v4q1qdb-bible-baptist-church-04-07-2024.html",
  },
  {
    title: "Pastor Kevin Bunn 3-31-24",
    date: "March 31st, 2024",
    link: "https://rumble.com/v4nhmiw-pastor-kevin-bunn-3-31-24.html",
  },
  {
    title:
      "Wednesday Night Bible study/Prayer meeting “House call with the Lord “ Genesis 18",
    date: "March 27th, 2024",
    link: "https://rumble.com/v4nho4k-wednesday-night-bible-studyprayer-meeting-house-call-with-the-lord-genesis-.html",
  },
];
export default function Table() {
  return (
    <div className="w-full flex justify-center">
      <table className="mx-auto w-[85%] text-left border border-gray-200 inline-table">
        <thead>
          <tr>
            <td
              scope="col"
              className="h-16 px-6 border-r border-gray-200 last:border-r-0 leading-normal font-bold text-xl"
            >
              Title
            </td>
            <td
              scope="col"
              className="h-16 px-6 border-r border-gray-200 last:border-r-0 leading-normal font-bold text-xl"
            >
              Date
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="h-16 px-6 border-r border-gray-200 last:border-r-0 leading-normal border-t">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xl hover:underline"
                >
                  {item.title}
                </a>
              </td>
              <td className="h-16 px-6 border-r border-gray-200 last:border-r-0 leading-normal border-t">
                <span className="text-xl text-gray-600">{item.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
