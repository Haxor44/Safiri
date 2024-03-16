import { View, Text, SafeAreaView, ImageBackground, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps';
//import Share from 'react-native-share';
import styles from "./styles";
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
const AttractionDetail = ({navigation,route}) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
    const diffImages = item?.images?.length - slicedImages?.length;

    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        longitudeDelta: 0.009,
        latitudeDelta: 0.009,
    };

    const onback = () => {
        navigation.goBack();
    }
     
    const onGalleryNav = () => {
        navigation.navigate("Gallery", {images:item?.images});
    }
   /* const onShare = async () => {
        try {
            const imageWithoutParams = mainImage?.split('?')[0];
            const imageParts = imageWithoutParams?.split('.');
            const imageExtension = imageParts[imageParts?.length - 1];
            const base64Image = await ImgToBase64.getBase64String(mainImage);

            Share.open({
                title: item?.name,
                message: 'Hey, I wanted to share with you this amazing attraction',
                url: `data:image/${imageExtension || 'jpg'};base64,${base64Image}`
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    err && console.log(err);
                });
        } catch (e) {
            console.log('sharing error :>> ', e);
        }
    };*/

    

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }}>
            <View style={styles.header}>
                <Pressable onPress={onback} hitSlop={8}>
                    <Image style={styles.icon} source={require("../../assets/back.png")}/>
                </Pressable>
                <Pressable  hitSlop={8}>
                    <Image style={styles.icon} source={require("../../assets/share.png")}/>
                </Pressable>   
            </View>

            <Pressable onPress={onGalleryNav} style={styles.footer}>
                    {slicedImages?.map((image, index) => (
                        <View key={image}>
                            <Image source={{ uri: image }} style={styles.miniImage} />
                            {diffImages > 0 && index === slicedImages?.length - 1 ? (
                                <View style={styles.moreImagesContainer}>
                                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                </View>
                            ) : null}
                        </View>
                    ))}
                </Pressable>
            </ImageBackground>
            <View style={styles.headerContainer}>
                <View style={{maxWidth:"70%"}}>
                    <Title style={styles.title} text={item?.name}/>
                    <Text style={styles.city}>{item?.city}</Text>
                </View>
                <Title style={styles.title} text={item?.entry_price}/>
            </View>
            
            <InfoCard text={item?.address} icon={require("../../assets/location_circle.png")}/>
            <InfoCard text={`OPEN ${item?.opening_time} - ${item?.closing_time}`} icon={require("../../assets/schedule.png")}/>
            <MapView
                style={{
                    width:"100%",
                    height:200,
                    borderRadius:10,
                    paddingBottom:140
                }}
                initialRegion={coords}
            >
                <Marker coordinate={coords} title={item?.name} />
            </MapView>
            <Text style={styles.mapText} onPress={() => navigation.navigate("Map",{item}) }>Show full screen map</Text>
            
        </ScrollView>
            
    </SafeAreaView>
    
  )
}

export default React.memo(AttractionDetail);