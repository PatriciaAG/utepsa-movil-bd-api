import { firestore } from '@/constants/firebase';
import { Product } from '@/core/products/interface/Product';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const PRODUCTS_COLLECTION = 'products';

export const FirebaseService = {
  async addProduct(product: Product): Promise<string> {
    const colRef = collection(firestore, PRODUCTS_COLLECTION);
    const payload = {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createdAt: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(colRef, payload);
      return docRef.id;
    } catch (err: any) {
      // Log completo para depuración
      console.error('Error añadiendo documento a Firestore:', {
        message: err?.message,
        code: err?.code,
        stack: err?.stack,
        raw: err,
      });
      throw err;
    }
  },
};
