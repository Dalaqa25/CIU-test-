import { View } from '@/components/Themed';
import subjects from '@/assets/subjects asset bundle/subjects';
import SubjectsList from '@/components/subjectslist';


export default function TabOneScreen() {
  return (
    <View>
      <SubjectsList subject = {subjects[0]}/>
      <SubjectsList subject = {subjects[1]}/>
    </View>
  );
};
