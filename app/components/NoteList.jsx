import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <NoteItem
            note={item}
            onDelete={onDelete}
            onEdit={onEdit}
            noteIndex={index}
          />
        )}
      />
    </View>
  );
};

export default NoteList;
