export default function Table() {
  return (
    <>
      <div className="my-20 xl:hidden">
        <h2 className="my-8 font-black text-[3.2rem] text-[#242121]">
          Missions
        </h2>
        <table className="w-full text-left border border-[#ddd]">
          <thead>
            <tr>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Title
              </td>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Details
              </td>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Updated
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                General... <br />
                <span className="text-[1.4rem] text-[#808080]">
                  Submited by: Nandram Ahirwar
                </span>
              </td>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                That the Lord may teach us about necessary steps to be equipped
                for missionary service.
              </td>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                6th February 2022
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-20 xl:hidden">
        <h2 className="my-8 font-black text-[3.2rem] text-[#242121]">
          Persecution
        </h2>
        <table className="w-full text-left border border-[#ddd]">
          <thead>
            <tr>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Title
              </td>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Details
              </td>
              <td
                scope="col"
                className="h-[5.6rem] p-4 border-r border-[#ddd] font-bold text-[1.6rem] last:border-r-0"
              >
                Updated
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                Distressed situation <br />
                <span className="text-[1.4rem] text-[#808080]">
                  Submited by: Phillip
                </span>
              </td>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                Please pray for me as I go through some difficult times.
              </td>
              <td className="h-[5.6rem] p-4 border-t border-r border-[#ddd] leading-[1.4] last:border-r-0">
                6th February 2022
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
