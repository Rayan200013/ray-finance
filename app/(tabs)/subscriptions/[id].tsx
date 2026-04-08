import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>()
  return (
    <SafeAreaView>
      <Text>Subscriptions Details: {id}</Text>
      <Link href="/">Go Back</Link>
    </SafeAreaView>
  )
}

export default SubscriptionsDetails