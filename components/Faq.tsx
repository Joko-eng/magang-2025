import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

export default function Faq() {
  return (
    <div className="p-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Apa itu PT Mudapedia Digital Indonesia?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak di
              bidang pengembangan teknologi dan digitalisasi. Kami menyediakan
              solusi inovatif untuk bisnis maupun individu, mulai dari
              pengembangan aplikasi, website, hingga strategi digital marketing.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Layanan apa saja yang ditawarkan?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <b>Pengembangan Aplikasi Mobile:</b> Android & iOS (native atau
                cross-platform).
              </li>
              <li>
                <b>Pengembangan Website:</b> E-commerce, company profile,
                portofolio, dan lainnya.
              </li>
              <li>
                <b>Digital Marketing:</b> SEO, SEM, Social Media Management,
                hingga Content Creation.
              </li>
              <li>
                <b>Konsultasi Digital:</b> Analisis kebutuhan & strategi
                digitalisasi bisnis.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Bagaimana cara kerja sama dengan PT Mudapedia?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Proses kerja sama dimulai dengan konsultasi awal untuk memahami
              kebutuhan Anda. Tim kami kemudian menyusun proposal solusi lengkap
              dengan estimasi biaya dan waktu pengerjaan. Setelah ada
              kesepakatan, pengembangan dimulai dengan komunikasi intensif dan
              transparansi di setiap tahap proyek.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Siapa saja klien yang bisa menggunakan layanan Mudapedia?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Layanan kami terbuka untuk berbagai jenis klien, mulai dari UMKM,
              perusahaan menengah, hingga korporasi besar. Kami juga melayani
              kebutuhan individu yang ingin mengembangkan produk digital.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Bagaimana cara menghubungi PT Mudapedia Digital Indonesia?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Anda dapat menghubungi kami melalui email, telepon, atau formulir
              kontak di website resmi. Tim kami siap membantu Anda mendapatkan
              solusi terbaik sesuai kebutuhan bisnis.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
