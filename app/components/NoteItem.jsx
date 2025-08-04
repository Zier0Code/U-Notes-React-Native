import { useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NoteItem = ({ note, onDelete, onEdit, noteIndex }) => {
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

  // Professional color palette with gradients
  const NoteColors = [
    { bg: "#6366F1", light: "#E0E7FF", accent: "#4F46E5" }, // Indigo
    { bg: "#10B981", light: "#D1FAE5", accent: "#059669" }, // Emerald
    { bg: "#F59E0B", light: "#FEF3C7", accent: "#D97706" }, // Amber
    { bg: "#EF4444", light: "#FEE2E2", accent: "#DC2626" }, // Red
    { bg: "#8B5CF6", light: "#EDE9FE", accent: "#7C3AED" }, // Violet
    { bg: "#06B6D4", light: "#CFFAFE", accent: "#0891B2" }, // Cyan
    { bg: "#F97316", light: "#FED7AA", accent: "#EA580C" }, // Orange
    { bg: "#EC4899", light: "#FCE7F3", accent: "#DB2777" }, // Pink
  ];

  const colorScheme = NoteColors[noteIndex % NoteColors.length];

  return (
    <View style={[styles.noteItem, { backgroundColor: colorScheme.light }]}>
      <View style={[styles.colorStrip, { backgroundColor: colorScheme.bg }]} />

      <View style={styles.noteContent}>
        {isEditing ? (
          <View style={styles.editingContainer}>
            <TextInput
              style={[styles.input, styles.titleInput]}
              value={editedText.title}
              onChangeText={(text) =>
                setEditedText({ ...editedText, title: text })
              }
              placeholder="Note title..."
              placeholderTextColor="#9CA3AF"
            />

            <TextInput
              multiline
              ref={inputRef}
              style={[styles.input, styles.contentInput]}
              value={editedText.content}
              onChangeText={(text) =>
                setEditedText({ ...editedText, content: text })
              }
              placeholder="Write your note here..."
              placeholderTextColor="#9CA3AF"
              autoFocus
              onSubmitEditing={handleSave}
              returnKeyType="done"
              textAlignVertical="top"
            />
          </View>
        ) : (
          <View style={styles.displayContainer}>
            <Text style={[styles.noteTitle, { color: colorScheme.bg }]}>
              {note.title}
            </Text>
            <Text style={styles.noteText}>{note.content}</Text>
          </View>
        )}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            { backgroundColor: colorScheme.accent + "20" },
          ]}
          onPress={() => onDelete(note.id)}
        >
          <Text style={[styles.actionIcon, { color: colorScheme.accent }]}>
            🗑️
          </Text>
        </TouchableOpacity>

        {isEditing ? (
          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: colorScheme.accent + "20" },
            ]}
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={[styles.actionIcon, { color: colorScheme.accent }]}>
              ✓
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: colorScheme.accent + "20" },
            ]}
            onPress={() => setIsEditing(true)}
          >
            <Text style={[styles.actionIcon, { color: colorScheme.accent }]}>
              ✏️
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
    minHeight: 120,
  },
  colorStrip: {
    width: 6,
    backgroundColor: "#6366F1",
  },
  noteContent: {
    flex: 1,
    padding: 16,
  },
  editingContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  noteText: {
    fontSize: 16,
    color: "#4B5563",
    lineHeight: 24,
    flex: 1,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  titleInput: {
    fontWeight: "600",
    marginBottom: 12,
  },
  contentInput: {
    flex: 1,
    minHeight: 80,
    textAlignVertical: "top",
  },
  actions: {
    paddingVertical: 16,
    paddingRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  actionIcon: {
    fontSize: 18,
  },
});

export default NoteItem;
