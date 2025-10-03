import { useAuthStore } from '@/presentation/auth/store/useAuthStrore'
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  const { user } = useAuthStore();

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{ fontFamily: 'Kanit-Bold', fontSize: 24 }}>
        ¡Bienvenido!
      </ThemedText>
      
      {user && (
        <ThemedText style={{ fontFamily: 'Kanit-Regular', fontSize: 16, marginTop: 10 }}>
          {user.user_name} ({user.email})
        </ThemedText>
      )}

      
    </View>
  )
}

export default HomeScreen