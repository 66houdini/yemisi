import { PersonalizedHeader } from "./IndexPage";
import { bio, images, logos, tagline } from "../content/site";

export default function About() {
  return (
    <main className="bg-black text-white">
      <PersonalizedHeader bg="bg-black" />

      <section className="px-6 md:px-20 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
        <img
          data-bio-logo
          src={logos.white}
          alt="Oluwayemisi Adebayo logo"
          className="mx-auto h-12 md:h-20 w-auto max-w-full"
        />
        <p className="mt-6 text-xs md:text-sm uppercase tracking-[0.25em] text-primary-light">
          {tagline}
        </p>
      </section>

      <section className="grid items-start gap-10 md:gap-16 border-t border-zinc-800 px-6 md:px-20 py-12 md:py-20 md:grid-cols-[2fr_3fr]">
        <img
          src={images.bng04797}
          alt="Oluwayemisi Adebayo"
          className="w-full rounded-md object-cover object-top md:sticky md:top-24 md:max-h-[85vh]"
        />
        <article data-bio className="max-w-3xl space-y-6">
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            {bio.intro}
          </p>
          {bio.paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="text-sm md:text-base font-light leading-relaxed text-zinc-300"
            >
              {p}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}
