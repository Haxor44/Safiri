import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/Cards';
import attractionData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = "ALL";
const Home = ({navigation}) => {
  const [selectedCategory,setSelectedCategory] = useState(ALL);
  const [data,setData] = useState([]);

  useEffect(()=> {
    setData(attractionData);
  },[])

  useEffect(()=> {
    if (selectedCategory === ALL) {
      setData(attractionData)
    } else {
      const filteredData = attractionData?.filter(item => item?.categories?.includes(selectedCategory));
      setData(filteredData);
    }
  }, [selectedCategory])
  return (
    <SafeAreaView>
    
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow:1}}
        ListEmptyComponent={<Text style={styles.empty}>No items Found!!!</Text>}
        ListHeaderComponent={(
            <>
              <View style={{margin:32}}>
              <Title text="Where do" style={{ fontWeight:"normal"}}/>
              <Title text="you want to go?"/>
  
              <Title text="Explore Attractions" style={styles.subtitle}/>
              </View>
              <Categories 
                selectedCategory={selectedCategory} 
                onCategoryPress={setSelectedCategory} 
                categories={[ALL,...categories]}
              />
            </>
        )}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 ? {marginRight:12,marginLeft:32} : {marginRight:32}} 
            title={item.name}
            imageSrc={item.images?.length ? item.images[0]: null}
            subTitle={item.city}
            onPress={() => navigation.navigate("AttractionDetails",{ item})}
          />
        ) } 
      /> 
    </SafeAreaView>
  )
}

export default React.memo(Home);