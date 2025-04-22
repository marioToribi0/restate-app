import { View, Text, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import img from '@/constants/images';

interface Props {
  images?: { image: string, $id?: string }[];
}

const Carrousel = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  
  // Manejar el cambio de imagen
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  return (
    <View className="relative">
      <FlatList
        data={images}
        keyExtractor={(item) => item.$id}
        horizontal
        contentContainerClassName="flex"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <View style={{ width: windowWidth }} className="relative">
            <Image 
              source={img.cardGradient} 
              className="size-full absolute bottom-0 z-10 opacity-40" 
              tintColor={"white"}
            />
            <Image 
              className="size-full" 
              resizeMode="cover" 
              source={{
                uri: item.image.startsWith("https://unsplash")
                  ? 'https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  : item.image
              }}
            />
          </View>
        )}
      />
      
      {/* Puntos indicadores */}
      <View className="flex-row gap-2 justify-center items-center absolute bottom-4 w-full space-x-2">
        {images?.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${
              index === activeIndex ? 'w-9 bg-primary-300' : 'w-2 bg-white'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Carrousel;