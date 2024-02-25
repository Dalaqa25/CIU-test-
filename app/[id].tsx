import subjects from "@/assets/subjects asset bundle/subjects";
import { Text } from "@/components/Themed";
import { View } from "@/components/Themed";
import { useLocalSearchParams,Stack } from "expo-router";
import { Image,StyleSheet } from "react-native";



const info = () => {
    const  {id} = useLocalSearchParams();
    const subject = subjects.find((s) => s.id.toString() == id);

    if (!subject){
        return <Text>Subject not found!</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: subject.image}} style={styles.image}/>
            <Stack.Screen options={{title:'detials'}}/>
            <Text style={styles.text}>{subject.name}</Text>
        </View>
    );
}

export default info;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        backgroundColor:'white',
        padding:10,
        margin:20,
    },
    text: {
        fontWeight:'bold',
        fontSize:20,
    },
    image: {
        aspectRatio:1,
        width:100,
    }
})