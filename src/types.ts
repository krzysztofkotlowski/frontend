export interface DataItem {
  id: number;
  size_x: number;
  size_y: number;
  size_z: number;
  color: string;
  entry: string;
  payment: string;
  payment_status: string;
  discount: number;
  date_of_order: string;
  finished: boolean;
  payment_received: boolean;
  source_of_order: string;
  nickname: string;
  description: string;
  price: number;
}
