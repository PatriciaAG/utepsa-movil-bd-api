import LogoutIconButton from '@/presentation/auth/components/LogoutIconButton';
import { Stack } from 'expo-router';

export default function EventsAppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen 
        name="(home)" 
        options={{ 
          headerLeft: () => <LogoutIconButton />
        }} 
      />
    </Stack>
  );
} 