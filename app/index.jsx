import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EmptyNotes from "./components/EmptyNotes";
import NoteList from "./components/NoteList";
import StoreNoteModal from "./components/StoreNoteModal";
import {
  addNote,
  deleteNote,
  setSearchQuery,
  updateNote,
} from "./store/slices/notesSlice";
const HomeScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Get state from Redux store
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { notes, searchQuery } = useSelector((state) => state.notes);

  // Local state for modal
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login if user is not authenticated
      router.replace("/auth");
    }
  }, [isLoggedIn, router]);

  // Add new note function
  const handleAddNote = () => {
    if (newNote.trim() === "") return; // Prevent adding empty notes

    dispatch(
      addNote({
        title: `Note ${notes.length + 1}`,
        content: newNote,
      })
    );
    setNewNote("");
    setModalVisible(false);
  };

  // Delete note function
  const handleDeleteNote = (id) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            dispatch(deleteNote(id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  // Edit note function
  const handleEditNote = (id, updatedText) => {
    if (!updatedText.content.trim() || !updatedText.title.trim()) {
      Alert.alert("Error", "Note text cannot be empty");
      return;
    }
    dispatch(
      updateNote({
        id,
        title: updatedText.title,
        content: updatedText.content,
      })
    );
    Alert.alert("Success", "Note updated successfully");
  };

  // Handle search query change
  const handleSearchChange = (text) => {
    dispatch(setSearchQuery(text));
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.id.toString().includes(searchQuery.toLowerCase())
  );
  2;

  if (filteredNotes.length === 0 && searchQuery === "") {
    return (
      <EmptyNotes
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={handleAddNote}
      />
    );
  }
  return (
    <View style={styles.container}>
      {/* Search bar for filtering notes */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by title or id"
            value={searchQuery}
            onChangeText={handleSearchChange}
            clearButtonMode="while-editing"
          />
        </View>

        {/* Button to create a new note */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.createButton}
        >
          <Text style={styles.createButtonText}> ➕ </Text>
        </TouchableOpacity>

        {/* Modal Create */}
        <StoreNoteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          newNote={newNote}
          setNewNote={setNewNote}
          addNote={handleAddNote}
        />
      </View>

      {/* Example of rendering notes */}
      {filteredNotes.length === 0 && searchQuery !== "" ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No notes found matching "{searchQuery}"
          </Text>
        </View>
      ) : (
        <NoteList
          notes={filteredNotes}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />

        // <FlatList
        //   data={filteredNotes}
        //   keyExtractor={(item) => item.id.toString()}
        //   renderItem={({ item }) => (
        //     <View style={styles.noteContainer} key={item.id}>
        //       <Text>{item.title}</Text>
        //       <Text>{item.content}</Text>
        //       <View
        //         style={{
        //           flexDirection: "row",
        //           marginTop: 10,
        //           justifyContent: "flex-end",
        //         }}
        //       >
        //         <TouchableOpacity
        //           onPress={() => console.log(`Editing note ${item.id}`)}
        //           style={styles.createButton}
        //         >
        //           <Text>✏️</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //           onPress={() => console.log(`Deleting note ${item.id}`)}
        //           style={styles.createButton}
        //         >
        //           <Text>🗑️</Text>
        //         </TouchableOpacity>
        //       </View>
        //     </View>
        //   )}
        // />
      )}
      {/* <Link href="/auth">
        <Text>Go to Login</Text>
      </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    marginBottom: 16,
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 18,
    color: "#666",
    paddingLeft: 12,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  noResultsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  noteContainer: {
    padding: 20,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 12,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    columnGap: 10,
    backgroundColor: "#fff",
    minHeight: 80,
    maxWidth: 400,
    elevation: 5, // For Android shadow
  },
  createButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  createButtonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default HomeScreen;
