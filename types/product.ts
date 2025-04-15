// Интерфейс продукта
export interface Product {
  imageUrl: string;
  name: string;
  price: number;
  discount?: number;
}
