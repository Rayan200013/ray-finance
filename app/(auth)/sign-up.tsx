import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signUp = () => {
  return (
    <SafeAreaView>
      <Text>signUp</Text>
      <Link href="/(auth)/sign-in">Sign in</Link>
    </SafeAreaView>
  )
}

export default signUp