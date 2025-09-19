import ApiResponse from "@/types/schemaTypes";

export function successResponse<T>(
  data: T,
  message = "Success"
): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(message = "Error", error?: string): ApiResponse {
  return {
    success: false,
    message,
    error,
  };
}
