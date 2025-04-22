import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useAppwrite } from '@/lib/useAppwrite';
import { getPropertyDetails } from '@/lib/appwrite';
import Carrousel from '@/components/Carrousel';
import icons from '@/constants/icons';
import images from '@/constants/images';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';

const Property = () => {
    const { id } = useLocalSearchParams<{id: string}>();

    const {data: propertyDetails, loading, refetch} = useAppwrite(
        {
            fn: getPropertyDetails,
            params: {
                id: id!
            },
            skip: true
        }
    )

    useEffect(() => {
        refetch(
            {
                id: id!
            }
        )
    }, [id])
    console.log(propertyDetails);
    const allImages = propertyDetails?.gallery 
    ? [{"$id": "F", "image": propertyDetails?.image}, ...propertyDetails.gallery] 
    : propertyDetails?.image ? [propertyDetails.image] : [];

    if (loading) {
        return (
            <SafeAreaView className='h-full bg-white flex items-center justify-center'>
                <ActivityIndicator size="large" color="#4F46E5" />
                <Text className='mt-4 font-rubik-medium text-gray-500'>Cargando detalles...</Text>
            </SafeAreaView>
        )
    }
    
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView className='flex-1 mb-24' showsVerticalScrollIndicator={false}>
                <View className='h-[60vh] relative'>
                    <View className='flex flex-row justify-between absolute z-50 top-5 w-full px-5'>
                        <TouchableOpacity onPress={() => {router.back()}}>
                            <Image className="size-8" source={icons.backArrow}/>
                        </TouchableOpacity>
                        <View className='flex-row gap-5'>
                            <Image className="size-8" tintColor={"black"} source={icons.heart}/>
                            <Image className="size-8" source={icons.send}/>
                        </View>
                    </View>
                    <Carrousel images={allImages}/>
                </View>
                <View className='px-5'>
                    <Text className='mt-4 text-3xl font-rubik-medium '>{propertyDetails?.name}</Text>
                    <View className='flex flex-row mt-3 gap-3'>
                        <Text className='flex font-rubik-bold color-primary-300 text-sm bg-accent-100 rounded-full p-2' style={{textTransform: 'uppercase'}}>{propertyDetails?.type}</Text>
                        <View className='flex flex-row justify-center gap-2'>
                            <Image className="flex size-6" source={icons.star}/>
                            <Text className='font-rubik-semibold text-black-100 flex'>{propertyDetails?.rating.toFixed(1)} ({propertyDetails?.reviews.length} reviews)</Text>
                        </View>
                    </View>
                    <View className='flex flex-row gap-2 mt-2'>
                        <View className='flex flex-row gap-2 items-center justify-center'>
                            <View className='bg-accent-100 rounded-full p-3'>
                                <Image className='size-6' source={icons.bed}/>
                            </View>
                            <Text className='font-rubik-semibold text-black-300'>{propertyDetails?.bedrooms} beds</Text>
                        </View>
                        <View className='flex flex-row gap-2 items-center justify-center'>
                            <View className='bg-accent-100 rounded-full p-3'>
                                <Image className='size-6' source={icons.bath}/>
                            </View>
                            <Text className='font-rubik-semibold text-black-300'>{propertyDetails?.bathrooms} baths</Text>
                        </View>
                        <View className='flex flex-row gap-2 items-center justify-center'>
                            <View className='bg-accent-100 rounded-full p-3'>
                                <Image className='size-6' source={icons.area}/>
                            </View>
                            <Text className='font-rubik-semibold text-black-300'>{propertyDetails?.area} sqft</Text>
                        </View>
                    </View>
                    <View className='h-[1px] bg-gray-200 my-5 w-full'/>
                    <View className='flex flex-row justify-between'>
                        <View className='flex flex-column'>
                            <Text className='font-rubik-semibold text-black-300 text-xl'>Agent</Text>
                            <View className='flex flex-row gap-3 items-center justify-between w-full'>
                                <View className='flex flex-row mt-2 gap-5 items-center justify-center'>
                                    <Image className='size-14 rounded-full' source={{uri: propertyDetails?.agent.avatar}}/>
                                    <View className='flex flex-col mt-2'>
                                        <Text className='font-rubik-semibold text-black-300 text-xl'>{propertyDetails?.agent.name}</Text>
                                        <Text className='font-rubik-semibold text-black-100 text-sm'>Owner</Text>
                                    </View>
                                </View>
                                <View className='flex flex-row gap-5 items-center justify-center'>
                                    <Image className='size-8' source={icons.chat}/>
                                    <Image className='size-8' source={icons.phone}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='flex flex-column mt-5 pt-3 justify-between'>
                        <Text className='font-rubik-semibold text-black-300 text-xl'>Overview</Text>
                        <Text className='font-rubik text-black-100 text-xl'>{propertyDetails?.description}</Text>
                    </View>
                    <View className='flex flex-column mt-5 pt-3 justify-between'>
                        <Text className='font-rubik-semibold text-black-300 text-xl'>Facilities</Text>
                        <View className='flex flex-row gap-2 flex-4'>
                            <Facilities facilities={propertyDetails?.facilities}/>
                        </View>
                    </View>
                    <View className='flex flex-column gap-5 flex-4 my-2'>
                        <Text className='font-rubik-semibold text-black-300 text-xl'>Gallery</Text>
                        <Gallery images={allImages} limit={3} />
                    </View>
                    <View className='flex flex-column gap-5 flex-4 my-2'>
                        <Text className='font-rubik-semibold text-black-300 text-xl'>Location</Text>
                        <View className='flex flex-row gap-2 flex-4 items-center'>
                            <Image className='size-6 rounded-lg' source={icons.location}/>
                            <Text className='font-rubik-semibold text-black-100 text-base'>{propertyDetails?.address}</Text>
                        </View>
                        <Image className="w-full h-[20vh] rounded-lg" source={images.map}/>
                    </View>
                    <View className='flex flex-column gap-5 flex-4 my-2'>
                        <Reviews rating={propertyDetails?.rating || 0} reviews={propertyDetails?.reviews || []} />
                    </View>
                </View>
            </ScrollView>

            {/* Fixed bottom section for price and booking */}
            <View className='absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-5'>
                <View className='flex flex-row items-center justify-between'>
                    <View className='flex flex-column'>
                        <Text className='font-rubik-semibold text-black-100 text-sm'>PRICE</Text>
                        <View className='flex flex-row items-center gap-1'>
                            <Text className='text-3xl font-rubik-bold text-primary-300'>${propertyDetails?.price}</Text>
                            <Text className='text-base font-rubik text-black-100'>/month</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                        className='bg-primary-300 px-8 py-4 rounded-full'
                        onPress={() => {
                            console.log('Booking now...');
                            // Add your booking logic here
                        }}
                    >
                        <Text className='text-white font-rubik-bold text-base'>Booking Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Property