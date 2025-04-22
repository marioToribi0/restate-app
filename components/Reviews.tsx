import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'

interface Review {
    $id: string;
    name: string;
    avatar: string;
    rating: number;
    review: string;
}

interface ReviewsProps {
    rating: number;
    reviews: Review[];
}

const Reviews = ({ rating, reviews = [] }: ReviewsProps) => {
    return (
        <View className='flex flex-column gap-5'>
            {/* Header with overall rating */}
            <View className='flex flex-row items-center justify-between'>
                <View className='flex flex-row items-center gap-2'>
                    <Image source={icons.star} className='size-6'/>
                    <Text className='font-rubik-bold text-black-300 text-xl'>
                        {rating?.toFixed(1)} ({reviews?.length} reviews)
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text className='font-rubik-bold text-primary-300 text-base'>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Review Cards */}
            <View className='flex flex-column gap-4'>
                {reviews?.slice(0, 2).map((review) => (
                    <View key={review.$id} className='flex flex-column gap-2 p-4 bg-accent-100 rounded-2xl'>
                        <View className='flex flex-row items-center justify-between'>
                            <View className='flex flex-row items-center gap-3'>
                                <Image 
                                    source={{uri: review.avatar}} 
                                    className='size-12 rounded-full'
                                />
                                <View>
                                    <Text className='font-rubik-semibold text-black-300 text-base'>
                                        {review.name}
                                    </Text>
                                </View>
                            </View>
                            <View className='flex flex-row items-center gap-1'>
                                <Image source={icons.star} className='size-4'/>
                                <Text className='font-rubik-bold text-black-300 text-sm'>
                                    {review.rating?.toFixed(1)}
                                </Text>
                            </View>
                        </View>
                        <Text className='font-rubik text-black-100 text-base'>
                            {review.review}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Reviews 