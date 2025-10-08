// Configuración e inicialización de Firebase
// Lee credenciales del archivo JSON de Admin SDK para desarrollo local
import { initializeApp } from 'firebase/app';
import { getFirestore, setLogLevel } from 'firebase/firestore';

// Importar credenciales desde el archivo JSON (solo para desarrollo local)
// NOTA: En producción, usar variables de entorno o configuración cliente
const serviceAccount = require('../aplicaciones-moviles-utepsa-firebase-adminsdk-fbsvc-1fc8697b09.json');

// Configuración cliente basada en el service account
// Para desarrollo local con Admin SDK, usamos el projectId del service account
const firebaseConfig = {
  // Nota: Para usar el SDK Web correctamente, necesitamos una apiKey real de Firebase Console
  // Por ahora usamos solo projectId que es lo mínimo para Firestore
  projectId: serviceAccount.project_id,
  // Configuraciones opcionales derivadas del service account
  authDomain: `${serviceAccount.project_id}.firebaseapp.com`,
  storageBucket: `${serviceAccount.project_id}.appspot.com`,
}


// Inicializar app y exportar Firestore
const app = initializeApp(firebaseConfig);
// Habilitar logging detallado de Firestore para depuración
try {
  setLogLevel('debug');
} catch (e) {
  // setLogLevel puede no estar disponible en algunos entornos; capturamos el error.
  // No queremos bloquear la inicialización por esto.
  // eslint-disable-next-line no-console
  console.warn('No se pudo configurar setLogLevel:', e);
}

export const firestore = getFirestore(app);

export default app;
