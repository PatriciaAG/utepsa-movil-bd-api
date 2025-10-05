import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions,
    View,
} from 'react-native';

import { router } from 'expo-router';

import { AuthService } from '@/core/auth/services/AuthService';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';

const PasswordResetScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');

  const [isPosting, setIsPosting] = useState(false);
  const [email, setEmail] = useState('');

  const onRequestReset = async () => {
    if (email.length === 0) {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico');
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    setIsPosting(true);

    try {
      await AuthService.requestPasswordReset(email);
      
      Alert.alert(
        'Solicitud enviada',
        'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.',
        [
          {
            text: 'OK',
            onPress: () => router.back(),
          },
        ]
      );
    } catch (error) {
      console.error('Error requesting password reset:', error);
      Alert.alert(
        'Error',
        'No se pudo enviar la solicitud. Por favor verifica tu correo e intenta nuevamente.'
      );
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">¿Olvidaste tu contraseña?</ThemedText>
          <ThemedText style={{ color: 'grey', marginTop: 10 }}>
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
          </ThemedText>
        </View>

        {/* Email */}
        <View style={{ marginTop: 30 }}>
          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 20 }} />

        {/* Botón */}
        <ThemedButton
          icon="send-outline"
          onPress={onRequestReset}
          disabled={isPosting}
        >
          {isPosting ? 'Enviando...' : 'Enviar enlace'}
        </ThemedButton>

        {/* Spacer */}
        <View style={{ marginTop: 30 }} />

        {/* Enlace para volver al login */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThemedText>¿Recordaste tu contraseña? </ThemedText>
          <ThemedText 
            style={{ 
              marginHorizontal: 5, 
              color: '#007AFF',
              textDecorationLine: 'underline'
            }}
            onPress={() => router.back()}
          >
            Volver al login
          </ThemedText>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PasswordResetScreen;