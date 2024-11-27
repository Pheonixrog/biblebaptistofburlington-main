export default function TableCards() {
  return (
    <div className="hidden xl:flex xl:flex-col xl:gap-12">
      <h2>Missions</h2>
      <div className="flex flex-col gap-4 text-[1.6rem] border border-[#ddd] p-8">
        <span>General...</span>
        <span>Submited by: Nandram Ahirwar</span>
        <span className="font-bold">Details</span>
        <span>
          That the Lord may teach us about necessary steps to be equipped for
          missionary service.
        </span>
        <span className="font-bold">Updated</span>
        <span>6th February 2022</span>
      </div>

      <h2>Persecution</h2>
      <div className="flex flex-col gap-4 text-[1.6rem] border border-[#ddd] p-8">
        <span>Distressed situation</span>
        <span>Submited by: Phillip</span>
        <span className="font-bold">Details</span>
        <span>Please pray for me as I go through some difficult times.</span>
        <span className="font-bold">Updated</span>
        <span>6th February 2022</span>
      </div>
    </div>
  );
}
