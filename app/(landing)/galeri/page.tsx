import { fetchInstagramPaginated } from "@/lib/fetchInstagramPagination";
import Galeri from "./galeriCard";



export default async function GaleriPage({ searchParams }: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {
  const params = await searchParams;
  const currentPage = params.page ? Number(params.page): 1;

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
