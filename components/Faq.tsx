import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "Apa itu PT Mudapedia Digital Indonesia?",
      answer:
        "PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak dibidang pengembangan teknologi dan digitalisasi. Kami menyediakan solusi inovatif untuk bisnis maupun individu, mulai dari pengembangan aplikasi, website, hingga strategi digital marketing.",
    },
    {
      id: "item-2",
      question: "Layanan apa saja yang ditawarkan?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Pengembangan Aplikasi Mobile: Android & iOS (native atau
            cross-platform).
          </li>
          <li>
            Pengembangan Website: E-commerce, company profile, portofolio, dan
            lainnya.
          </li>
          <li>
            Digital Marketing: SEO, SEM, Social Media Management, hingga Content
            Creation.
          </li>
          <li>
            Konsultasi Digital: Analisis kebutuhan & strategi digitalisasi
            bisnis.
          </li>
        </ul>
      ),
    },
    {
      id: "item-3",
      question: "Bagaimana cara kerja sama dengan PT Mudapedia?",
      answer:
        "Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan Anda. Tim kami kemudian menyusun proposal solusi lengkap dengan estimasi biaya dan waktu pengerjaan. Setelah ada kesepakatan, pengembangan dimulai dengan komunikasi intensif dan transparansi di setiap tahap proyek.",
    },
    {
      id: "item-4",
      question: "Siapa saja klien yang bisa menggunakan layanan Mudapedia?",
      answer:
        "Layanan kami terbuka untuk berbagai jenis klien, mulai dari UMKM, perusahaan menengah, hingga korporasi besar. Kami juga melayani kebutuhan individu yang ingin mengembangkan produk digital.",
    },
    {
      id: "item-5",
      question: "Bagaimana cara menghubungi PT Mudapedia Digital Indonesia?",
      answer:
        "Anda dapat menghubungi kami melalui email, telepon, atau formular kontak di website resmi. Tim kami siap membantu Anda mendapatkan solusi terbaik sesuai kebutuhan bisnis.",
    },
  ];

  return (
    <section className="py-10 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6 dark:text-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-2xl font-bold md:text-2xl lg:text-2xl">
            Pertanyaan yang sering diajukan
          </h2>
          <p className="text-muted-foreground mt-4 text-balance dark:text-white">
            Jika Pertanyaan anda tidak terjawab, jangan ragu untuk menghubungi
            tim dukungan kami.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
