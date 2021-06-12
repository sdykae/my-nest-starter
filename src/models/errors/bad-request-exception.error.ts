export interface MongoFilterError {
  statusCode: number;
  createdBy: string;
  errors: string | unknown;
}

export interface DtoPipeError {
  statusCode: number;
  createdBy: string;
  errors: string | unknown;
}
