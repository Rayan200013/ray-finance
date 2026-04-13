import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import {styled} from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView)

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>()
  return (
    <SafeAreaView className='flex-1 p-5'>
      <Text>Subscriptions Details: {id}</Text>
      <Link href="/">Go Back</Link>
    </SafeAreaView>
  )
}

export default SubscriptionsDetails