import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <View style={{ flex: 1 }}>
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
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NoteList;
