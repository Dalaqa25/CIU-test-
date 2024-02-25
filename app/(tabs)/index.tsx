import { View } from '@/components/Themed';
import subjects from '@/assets/subjects asset bundle/subjects';
import SubjectsList from '@/components/subjectslist';
import { FlatList } from 'react-native';



export default function TabOneScreen() {
  return (
    <View>
        <FlatList
        data={subjects}
        renderItem={({item}) => <SubjectsList subject={item}/>
        }
        numColumns={2}
        contentContainerStyle={{gap : 10, padding:10}}
        columnWrapperStyle={{gap : 10}}
        />
    </View>
  );
};
