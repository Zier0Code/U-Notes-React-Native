import { Stack, useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { logout } from "./store/slices/authSlice";

const HeaderLogout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            dispatch(logout());
            router.replace("/auth");
          },
        },
      ],
      { cancelable: true }
    );
  };

  // Only show logout button if user is logged in
  if (!isLoggedIn) return null;

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
    </TouchableOpacity>
  );
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#3C3B3B" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
              fontFamily: "System",
            },

            contentStyle: {
              paddingHorizontal: 10,
              paddingVertical: 10,
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: "My Notes", headerRight: () => <HeaderLogout /> }}
          />
          <Stack.Screen
            name="auth"
            options={{
              title: "U-Note App",
              headerLeft: null,
              headerShown: false,
            }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default RootLayout;
