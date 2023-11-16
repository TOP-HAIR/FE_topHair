export default interface RequestResponse<T = any> {
  url?: string;
  headers?: string;
  data?: T[];
}
