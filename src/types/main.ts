export interface ResponseUser<T = unknown, Te = unknown> {
  message: string;
  status: "success" | "failed";
  statusCode: number;
  data?: T;
  error?: Te;
}
