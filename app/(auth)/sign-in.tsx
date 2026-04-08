import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
  return (
    <SafeAreaView>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up">Create account</Link>
    </SafeAreaView>
  )
}

export default signIn