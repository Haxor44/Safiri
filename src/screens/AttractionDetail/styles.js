import { StyleSheet, Dimensions } from "react-native"

const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        margin:32,
    },

    mainImage:{
        width:"100%",
        height:height / 2,
        borderRadius:20,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
    },
    header: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    icon:{
        width:36,
        height:36,
        margin:16,
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        backgroundColor:"rgba(256,256,256,0.35)",
        margin:16,
        paddingHorizontal:8
    },

    miniImage: {
        width:40,
        height:40,
        margin:8,
        borderRadius:10
    },
    moreImages:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
    },
    moreImagesContainer:{
        position:"absolute",
        top:8,
        left:4,
        width:40,
        height:40,
        backgroundColor:"rgba(0,0,0,0.38)",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:40
    },
    title:{
        color:"#000"
    },
    city:{
        fontSize:20,
        fontWeight:"400",
        color:"#000",
        marginTop:8
    },
    mapText:{
        fontWeight:"bold",
        fontSize:16,
        color:"#4681A3",
        textAlign:"center",
        padding:16
    },
});
export default styles;