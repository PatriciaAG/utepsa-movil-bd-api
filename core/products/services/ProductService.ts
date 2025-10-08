import { Product } from '@/core/products/interface/Product';
import { FirebaseService } from './FirebaseService';

export class ProductService {
  static async create(product: Product): Promise<{ id: string }> {
    // Validación mínima
    if (!product.name || product.price == null || product.quantity == null) {
      throw new Error('Los campos name, price y quantity son obligatorios');
    }

    // Conversión de tipos simples
    const payload: Product = {
      name: String(product.name),
      price: Number(product.price),
      quantity: Number(product.quantity),
    };

    const id = await FirebaseService.addProduct(payload);
    return { id };
  }
}
