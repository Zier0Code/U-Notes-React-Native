import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNoteModal from "./StoreNoteModal";
const EmptyNotes = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNote,
  setNoteTitle,
  noteTitle,
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/notes1.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>No Notes Yet.</Text>
      <Text>Start creating your notes now.</Text>
      <Text>Enjoy your note-taking experience!</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.createButton}
      >
        <Text style={{ color: "#fff" }}>+ Create Note</Text>
      </TouchableOpacity>
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
        setNoteTitle={setNoteTitle}
        noteTitle={noteTitle}
      />
    </View>
  );
};

export default EmptyNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  createButton: { marginTop: 20, padding: 10, backgroundColor: "#3C3B3B" },
});
