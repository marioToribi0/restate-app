import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import imgs from '@/constants/images'
interface GalleryProps {
    images: Array<{
        $id: string;
        image: string;
    }>;
    limit?: number;
}

const Gallery = ({ images, limit = 3 }: GalleryProps) => {
    const displayImages = images.slice(0, limit);
0
    return (
        <View className='flex flex-row gap-5 mt-2 flex-4 h-[20vh]'>
            {displayImages.map((image, index) => (
                <TouchableOpacity 
                    key={index} 
                    className='flex-1 relative'
                    onPress={() => {
                        // You can add navigation to a full-screen gallery view here
                        console.log('View full image:', image.image);
                    }}
                >   
                    <Image 
                            className='size-full rounded-lg' 
                            source={{uri: image.image.startsWith("https://unsplash")
                                ? 'https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                : image.image
                            }}
                            resizeMode="cover"
                    />
                    {
                        ((index==(images.length-1))||(index==2))&&(images.length>3)?
                        (
                            <View className='absolute bottom-0 z-10 size-full'>
                                <Image 
                                    className='size-full rounded-lg absolute bottom-0 z-10'
                                    source={imgs.cardGradient}
                                    tintColor={"black"}
                                />
                                <View className='absolute size-full items-center justify-center z-20'>
                                    <Text className='text-white font-rubik-semibold text-3xl'>{images.length}+</Text>
                                </View>
                            </View>
                        )
                        :
                        null
                    }
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Gallery 