export interface ApiResponse<T> {
  status: string | number;
  metadata: T;
  message?:string;
  error?:string;
}
