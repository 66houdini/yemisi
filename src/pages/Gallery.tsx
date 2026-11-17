import { PersonalizedHeader } from "./IndexPage";
import { galleryImages } from "../content/site";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PersonalizedHeader bg="bg-black" />

      <section className="px-6 md:px-20 pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="pb-10 md:pb-14 text-center text-4xl md:text-6xl font-black uppercase">
          Gallery
        </h1>
        <div data-gallery className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="mb-4 w-full break-inside-avoid rounded-md"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
