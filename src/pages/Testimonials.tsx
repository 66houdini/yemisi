import { PersonalizedHeader } from "./IndexPage";
import { testimonials } from "../content/site";

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PersonalizedHeader bg="bg-black" />

      <section className="px-6 md:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="pb-10 md:pb-14 text-center text-4xl md:text-6xl font-black uppercase">
          What People Say
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between gap-5 rounded-md border border-zinc-800 bg-zinc-950 p-6"
            >
              <blockquote className="italic leading-relaxed text-zinc-300">
                {t.quote}
              </blockquote>
              <figcaption className="font-semibold text-primary-light">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-zinc-500">
          More reviews coming soon.
        </p>
      </section>
    </main>
  );
}
