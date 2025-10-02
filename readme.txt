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