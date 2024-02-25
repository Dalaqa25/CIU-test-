import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';




const SubjectsList = ({ subject }) => 
{
  return (
    <View style={styles.container}>
      <Image source={{uri: subject.image}}
      style={styles.image}/>
      <Text style={styles.name}>{subject.name}</Text>
    </View>
  );
};


export default SubjectsList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:30,
    backgroundColor:'white',
    padding:10,
  },
  name: {
    fontWeight:'bold',
    fontSize:20,
  },
  image: {
    aspectRatio:1,
    width:100,
  }
});
