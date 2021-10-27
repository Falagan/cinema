export interface FindAllQuery {
  limit?: number;
  offset?: number;
  orderBy?: OrderBy;
  filters?: any;
}

export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}
