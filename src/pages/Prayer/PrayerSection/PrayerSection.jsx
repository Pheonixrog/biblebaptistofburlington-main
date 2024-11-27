// SCSS
import Table from "./Table/Table";
import TableCards from "./TableCard/TableCards";

export default function PrayerSection() {
  return (
    <section className="my-40">
      <div className="mx-auto max-w-[130rem] px-8">
        <div className="my-20">
          <Table />
          <TableCards />
        </div>
      </div>
    </section>
  );
}
