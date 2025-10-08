import { Product } from '@/core/products/interface/Product';
import { ProductService } from '@/core/products/services/ProductService';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import React, { useState } from 'react';
import { Alert } from 'react-native';

type Props = {
  onSaved?: (id: string) => void;
};

const ProductForm: React.FC<Props> = ({ onSaved }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);

      const product: Product = {
        name: name.trim(),
        price: Number(price),
        quantity: Number(quantity),
      };

      const result = await ProductService.create(product);
      setSaving(false);
      Alert.alert('Guardado', 'Producto registrado correctamente');
      setName('');
      setPrice('');
      setQuantity('');
      onSaved?.(result.id);
    } catch (error: any) {
      setSaving(false);
      console.error('Error guardando producto', error);
      Alert.alert('Error', error?.message || 'No se pudo guardar el producto');
    }
  };

  return (
    <ThemedView style={{ padding: 16 }}>
      <ThemedText style={{ marginBottom: 8 }}>Registrar nuevo producto</ThemedText>

      <ThemedTextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 12 }}
      />

      <ThemedTextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ marginBottom: 12 }}
      />

      <ThemedTextInput
        placeholder="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={{ marginBottom: 16 }}
      />

      <ThemedButton onPress={handleSave} disabled={saving}>
        {saving ? 'Guardando...' : 'Guardar producto'}
      </ThemedButton>
    </ThemedView>
  );
};

export default ProductForm;
