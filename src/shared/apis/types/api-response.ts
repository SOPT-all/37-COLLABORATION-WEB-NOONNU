export interface ApiResponse<T> {
  errorCode: number | null;
  message: string;
  result: T;
}
