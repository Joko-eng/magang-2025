"use client";

import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

type TeamCardType = {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  instagram: string;
};

const teamData: TeamCardType[] = [
  {
    id: 1,
    name: "Iqbal",
    role: "Backend Developer",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Theo",
    role: "Frontend Developer",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Dzanu",
    role: "UI/UX Designer",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 4,
    name: "Reza",
    role: "Project Manager",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 5,
    name: "Gilang",
    role: "DevOps Engineer",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 6,
    name: "Joko",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 7,
    name: "Izza",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 8,
    name: "Zulfa",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 9,
    name: "Jenny",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 10,
    name: "Feni",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 11,
    name: "Filfia",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 12,
    name: "Gita",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: 13,
    name: "Wulan",
    role: "Internship",
    image: "/image/iqbal.png",
    linkedin: "#",
    instagram: "#",
  },
];

const timIds = [1, 2, 3, 4, 5];
const magangIds = [6, 7, 8, 9, 10, 11, 12, 13];

function TeamCard({ card }: { card: TeamCardType }) {
  return (
    <div className="flex-shrink-0 snap-center basis-full max-w-64 px-3">
      <div className="w-full h-[420px] bg-blue-600 text-white rounded-[120px] shadow-xl flex flex-col items-center overflow-hidden">
        {/* Nama & Role */}
        <div className="pt-5 text-center z-10">
          <h2 className="text-lg font-semibold">{card.name}</h2>
          <p className="text-sm opacity-90">{card.role}</p>
        </div>

        {/* Sosmed */}
        <div className="mt-3 flex gap-1 z-10">
          <a
            href={card.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9990FF] hover:opacity-90 transition"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={card.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9990FF] hover:opacity-90 transition"
          >
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Foto */}
        <div className="relative mt-auto w-full h-[270px]">
          <img
            src={card.image}
            alt={card.name}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function CardPagination({
  filter,
}: {
  filter: "all" | "tim" | "magang";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filteredData =
    filter === "tim"
      ? teamData.filter((d) => timIds.includes(d.id))
      : filter === "magang"
      ? teamData.filter((d) => magangIds.includes(d.id))
      : teamData;

  const totalPages = Math.ceil(filteredData.length / 5);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    setActiveIndex(0);
  }, [filter]);

  // Drag + update activeIndex saat scroll
  useEffect(() => {
    if (filteredData.length <= 4) return;
    const slider = scrollRef.current;
    if (!slider) return;

    const mouseDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
    };
    const mouseLeave = () => {
      isDown.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const mouseUp = () => {
      isDown.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const mouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // ✅ update activeIndex berdasarkan scroll position
    const handleScroll = () => {
      const cardWidth = slider.querySelector("div")?.clientWidth || 1;
      const index = Math.round(slider.scrollLeft / cardWidth / 5);
      setActiveIndex(index);
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [filteredData]);

  return (
    <div className="w-full flex flex-col items-center">
      {filteredData.length <= 4 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8 w-full">
          {filteredData.map((card) => (
            <TeamCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <>
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-8 scrollbar-hide select-none cursor-grab"
            style={{ minHeight: "450px" }}
          >
            {filteredData.map((card) => (
              <TeamCard key={card.id} card={card} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full transition ${
                  activeIndex === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
