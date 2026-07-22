import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-yellow-400 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={7} duration={3} />+
          </h2>

          <p>Years Experience</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={10} duration={3} />+
          </h2>

          <p>Research Projects</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={7} duration={3} />+
          </h2>

          <p>Publications</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={100} duration={3} />%
          </h2>

          <p>Innovation</p>
        </div>

      </div>

    </section>
  );
}