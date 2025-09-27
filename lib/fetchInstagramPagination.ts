import { Instagram } from "@/models/instagram";
import { connectDB } from "./connectDB";

export const fetchInstagramPaginated = async ({ page }: { page?: number }) => {
  const limit = 8;
  const currentPage = Math.max(1, page || 1);
  const skip = (currentPage - 1) * limit;

  try {
    await connectDB();

    const [data, total] = await Promise.all([
      Instagram.find({}).select('-createdAt -updatedAt').sort({ createdAt: -1}).skip(skip).limit(limit),
      Instagram.countDocuments({}),
    ]);

    return {
      data,
      pageInfo: {
        total,
        page: currentPage,
        totalPages: Math.ceil(total / limit),
        hasNextPage: currentPage * limit < total,
        hasPrevPage: currentPage > 1,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      pageInfo: {
        total: 0,
        page: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
  }
}
