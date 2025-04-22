import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'

interface FacilitiesProps {
    facilities: string
}

const Facilities = ({facilities}: FacilitiesProps) => {
    // const facilities = ["Laundry", "Parking", "Gym", "Wifi", "Pet-Friendly"];
    const facilityIcons = {
        "Laundry": icons.laundry,
        "Parking": icons.carPark,
        "Gym": icons.dumbell,
        "Wifi": icons.wifi,
        "Pet-Friendly": icons.dog,
    }
  return (
    <View className='flex-1 flex-column gap-2 justify-center items-center'>
      <Image className="size-8 bg-accent-100 rounded-full p-3" source={facilityIcons[facilities as keyof typeof facilityIcons]}/>
      <Text className='font-rubik text-black-300 text-xl'>{facilities}</Text>
    </View>
  )
}

export default Facilities