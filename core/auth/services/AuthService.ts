import { API_CONFIG, buildApiUrl, getAuthHeaders } from '@/constants/api';
import { LoginResponse, LoginUserDto, RegisterUserDto, User } from '@/core/auth/interface/useAuthStore';

/**
 * Servicio de autenticación para comunicarse con el backend
 */
export class AuthService {
  
  /**
   * Iniciar sesión
   */
  static async login(credentials: LoginUserDto): Promise<LoginResponse> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.LOGIN);
    console.log('🌐 AuthService.login - URL:', url);
    console.log('📦 AuthService.login - Datos:', { ...credentials, password: '***' });
    
    try {
      console.log('🚀 Enviando petición de login...');
      const response = await fetch(url, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(credentials),
      });

      console.log('📡 Login - Status:', response.status, 'OK:', response.ok);

      const data = await response.json();
      console.log('📄 Login - Respuesta:', data);

      if (!response.ok) {
        console.log('❌ Login falló:', data);
        throw new Error(data.message || 'Error en el login');
      }

      console.log('✅ Login exitoso');
      return data as LoginResponse;
    } catch (error) {
      console.error('💥 Error en login:', error);
      throw error instanceof Error ? error : new Error('Error desconocido en login');
    }
  }

  /**
   * Registrar nuevo usuario (solo crea el usuario, no devuelve token)
   */
  static async register(userData: RegisterUserDto): Promise<User> {
    const url = buildApiUrl(API_CONFIG.ENDPOINTS.REGISTER);
    console.log('🌐 AuthService.register - URL:', url);
    console.log('📦 AuthService.register - Datos:', userData);
    
    try {
      console.log('🚀 Enviando petición de registro...');
      const response = await fetch(url, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
      });

      console.log('📡 Respuesta recibida - Status:', response.status);
      console.log('📡 Respuesta recibida - OK:', response.ok);

      const data = await response.json();
      console.log('📄 Datos de respuesta:', data);

      if (!response.ok) {
        console.error('❌ Respuesta no OK:', data);
        throw new Error(data.message || 'Error en el registro');
      }

      console.log('✅ Usuario creado exitosamente');
      return data as User;
    } catch (error) {
      console.error('💥 Error en registro AuthService:', error);
      throw error instanceof Error ? error : new Error('Error desconocido en registro');
    }
  }

  /**
   * Validar token (para verificar si el usuario sigue autenticado)
   */
  static async validateToken(token: string): Promise<User> {
    // Este endpoint lo puedes implementar en tu backend si lo necesitas
    const url = buildApiUrl('/auth/validate');
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: getAuthHeaders(token),
      });

      if (!response.ok) {
        throw new Error('Token inválido');
      }

      const data = await response.json();
      return data.user as User;
    } catch (error) {
      console.error('Error validando token:', error);
      throw error instanceof Error ? error : new Error('Error validando token');
    }
  }
}