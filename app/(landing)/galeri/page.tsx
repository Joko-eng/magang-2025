import { fetchInstagramPaginated } from "@/lib/fetchInstagramPagination";
import Galeri from "./galeriCard";

interface Props {
  searchParams?: { page?: string };
}

export default async function GaleriPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const { data, pageInfo } = await fetchInstagramPaginated({
    page: currentPage,
  });

  return (
    <Galeri
      posts={data}
      currentPage={pageInfo.page}
      totalPages={pageInfo.totalPages}
    />
  );
}
