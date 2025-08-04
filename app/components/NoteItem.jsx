import { useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState({
    title: note.title,
    content: note.content,
  });
  const inputRef = useRef(null);

  const handleSave = () => {
    if (editedText.content.trim() === "" || editedText.title.trim() === "")
      return Alert.alert("Error", "Note text cannot be empty");
    onEdit(note.id, editedText);
    setIsEditing(false);
  };

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.input}
            value={editedText.title}
            onChangeText={(text) =>
              setEditedText({ ...editedText, title: text })
            }
          />

          <TextInput
            ref={inputRef}
            style={styles.input}
            value={editedText.content}
            onChangeText={(text) =>
              setEditedText({ ...editedText, content: text })
            }
            autoFocus
            onSubmitEditing={handleSave}
            returnKeyType="done"
          />
        </View>
      ) : (
        <View>
          <Text style={styles.noteText}>{note.title}</Text>
          <Text style={styles.noteText}>{note.content}</Text>
        </View>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.edit}>💾</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>✏️</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => onDelete(note.id)}>
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
  delete: {
    fontSize: 18,
    color: "red",
  },
  actions: {
    flexDirection: "row",
  },
  edit: {
    fontSize: 18,
    marginRight: 10,
    color: "blue",
  },
});

export default NoteItem;
