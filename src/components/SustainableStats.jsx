export default function SustainableStats() {
  return (
    <section className="px-6 py-20 bg-deepgreen/5 dark:bg-midgreen/10">
      <h2 className="text-5xl font-bold text-center text-deepgreen dark:text-lightgreen mb-16">
        Sustainable UI/UX Design Principles
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { num: "30%", text: "Reduction in energy consumption through Dark Mode Design." },
          { num: "20%", text: "Decrease in server load due to Efficient Coding practices." },
          { num: "15%", text: "Improvement in user retention rates attributed to an Eco-Friendly Color Palette." }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-darkcard rounded-3xl p-10 text-center border border-cardborder dark:border-darkborder">
            <div className="text-7xl font-bold text-deepgreen dark:text-midgreen">{stat.num}</div>
            <p className="text-deepgreen/80 dark:text-lightgreen/80 mt-4">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}