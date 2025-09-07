"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="tentang" className="py-10 md:py-26">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:space-y-16">
        <h3 className="text-center z-10 text-2xl font-semibold lg:text-2xl text-primary dark:text-white">
          Tentang Kami
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/image/building.png"
                className="hidden rounded-[15px] dark:block w-full h-auto object-cover"
                alt="illustration"
                width={1210}
                height={930}
                priority
              />
              <Image
                src="/image/building.png"
                className="rounded-[15px] shadow dark:hidden w-full h-auto object-cover"
                alt="illustration"
                width={1210}
                height={930}
                priority
              />
            </div>
          </div>

          <div className="relative space-y-2 text-center sm:text-justify">
            <span className="text-accent-foreground font-semibold dark:text-white">Visi</span>
            <p className="text-foreground dark:text-white">
              Kami menjadi Perusahaan Digital Agency yang terdepan dalam
              membantu para pebisnis mengembangkan usahanya
            </p>

            <div className="pt-3">
              <span className="text-foreground font-semibold dark:text-white">Misi</span>
              <p className="text-foreground dark:text-white">
                Memahami bahwa era digital telah membuka pintu menuju peluang
                yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan
                terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia
                yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan
                rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan
                bisnis modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}