import { StyleSheet, Image,Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Subject } from '@/types';
import { Link } from 'expo-router';


type PropertySubjectsList = {
    subject:Subject
}


const SubjectsList = ({ subject } : PropertySubjectsList) => 
{
  return (
    <Link href={`/${subject.id}`} asChild>
        <Pressable style={styles.container}>
        <Image source={{uri: subject.image}}
        style={styles.image}
        resizeMode='contain'/>
        <Text style={styles.name}>{subject.name}</Text>
        </Pressable>
    </Link>
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
    flex:1,
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
