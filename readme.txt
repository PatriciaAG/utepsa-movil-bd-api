ionic start app-bd-api blank --type=angular --standalone


npm i firebase @angular/fire


firebase
#Agregar App Web solo para la autenticación

#Git bash
ionic g guard core/auth --skip-tests
ionic g s services/login


ionic build
npm install @capacitor/android
npx cap add android
ionic cap run android -l --external


//Al momento de ejecutar el servicio con conexión a base de datos les aparecerá error de CORS así que lo que se de realizar el crear el archivo cors.json  on las reglas de permisos

*** Instalar
npm install -g firebase-tools
