import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";

const MOCK_USER = {
  username: "test",
  password: "password123",
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkError, setCheckError] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  const handleLogin = () => {
    if (!username || !password) {
      setCheckError({ error: true, message: "All Fields are required" });
      return;
    }

    if (username !== MOCK_USER.username || password !== MOCK_USER.password) {
      setCheckError({ error: true, message: "Invalid username or password" });
      return;
    }

    dispatch(login({ username }));
    // Reset error state
    setCheckError({ error: false, message: "" });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.baseBox, styles.box1]}></View>
      <View style={[styles.baseBox, styles.box2]}></View>
      <View style={[styles.baseBox, styles.box3]}></View>
      <View style={[styles.baseBox, styles.box4]}></View>
      <View style={[styles.baseBox, styles.box5]}></View>
      <Text style={styles.title}>U-Notes</Text>
      <Text style={styles.labels}>Username:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>👤</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      <Text style={styles.labels}>Password:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>🔒</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {checkError.error && (
        <Text style={styles.errorText}>{checkError.message}</Text>
      )}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  labels: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  // Base style for all boxes
  baseBox: {
    width: "100%",
    position: "absolute",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    filter: "blur(5px)",
  },
  box1: {
    transform: [{ translateY: -300 }, { translateX: 280 }, { rotate: "25deg" }],
    backgroundColor: "#B5FF84",
  },
  box2: {
    transform: [
      { translateY: -300 },
      { translateX: -250 },
      { rotate: "45deg" },
    ],
    backgroundColor: "#FF9BDA",
  },
  box3: {
    transform: [{ translateY: 250 }, { translateX: -250 }, { rotate: "55deg" }],
    backgroundColor: "#FF8F8F",
  },
  box4: {
    transform: [{ translateY: 250 }, { translateX: 280 }, { rotate: "45deg" }],
    backgroundColor: "#E6E171",
  },
  box5: {
    transform: [{ translateY: 450 }, { translateX: 150 }],
    backgroundColor: "#B1A3FF",
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    marginBottom: 15,
  },
  icon: {
    position: "absolute",
    left: 12,
    top: 15,
    fontSize: 18,
    color: "#666",
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    fontFamily: Platform.select({
      ios: "Helvetica",
      android: "Roboto",
      default: "System",
    }),
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#000",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    paddingLeft: 40,
  },
  loginButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
