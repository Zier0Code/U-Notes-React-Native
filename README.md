# 📝 U-Notes - React Native Notes App

<div align="center">
  <img src="./assets/images/notes1.png" alt="U-Notes Logo" width="200" height="200">
  
  [![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-~53.0.20-000020.svg)](https://expo.dev/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-764ABC.svg)](https://redux-toolkit.js.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
  
  *A beautiful, feature-rich notes application built with React Native and Expo*
</div>

---

## ✨ Features

### 🔐 **Authentication System**

- **Secure Login**: User authentication with persistent sessions
- **Modern UI**: Beautiful login interface with animated background elements
- **Auto Navigation**: Automatic redirect based on authentication state
- **Session Management**: Persistent login state across app restarts

### 📝 **Note Management**

- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Real-time note editing with auto-save functionality
- **Delete Notes**: Remove notes with confirmation dialogs
- **Rich Content**: Support for multi-line text content

### 🔍 **Search & Organization**

- **Real-time Search**: Instant search across note titles and content
- **Search by ID**: Quick note lookup by unique identifier
- **Dynamic Filtering**: Live results as you type
- **No Results Handling**: User-friendly empty state messages

### 🎨 **User Interface**

- **Modern Design**: Clean, intuitive interface with Material Design principles
- **Responsive Layout**: Optimized for various screen sizes and orientations
- **Visual Feedback**: Smooth animations and transitions
- **Icon Integration**: Intuitive icons for better user experience
- **Shadow Effects**: Depth and elevation for better visual hierarchy

### 💾 **Data Persistence**

- **Redux Store**: Centralized state management with Redux Toolkit
- **Persistent Storage**: Data survives app restarts using Redux Persist
- **Optimistic Updates**: Immediate UI feedback for better UX
- **Error Handling**: Robust error states and user feedback

### 📱 **Cross-Platform**

- **iOS Support**: Native iOS experience
- **Android Support**: Native Android experience
- **Web Support**: Progressive Web App capabilities
- **Consistent UX**: Platform-specific optimizations while maintaining consistency

---

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** - Install with `npm install -g expo-cli`
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Zier0Code/U-Notes-React-Native.git
   cd U-Notes-React-Native
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on your preferred platform**

   ```bash
   # For iOS simulator
   npm run ios

   # For Android emulator
   npm run android

   # For web browser
   npm run web
   ```

### 📱 Testing on Physical Device

1. **Install Expo Go** on your mobile device:

   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Scan the QR code** displayed in your terminal or browser after running `expo start`

---

## 🏗️ Project Structure

```
notes-app/
├── app/                          # Main application code
│   ├── components/              # Reusable components
│   │   ├── EmptyNotes.jsx       # Empty state component
│   │   ├── NoteItem.jsx         # Individual note component
│   │   ├── NoteList.jsx         # Notes list container
│   │   └── StoreNoteModal.jsx   # Add/Edit note modal
│   ├── store/                   # Redux store configuration
│   │   ├── slices/              # Redux slices
│   │   │   ├── authSlice.js     # Authentication state
│   │   │   └── notesSlice.js    # Notes state management
│   │   └── index.js             # Store configuration
│   ├── auth/                    # Authentication screens
│   │   └── index.jsx            # Login screen
│   ├── _layout.jsx              # Root layout component
│   └── index.jsx                # Home screen
├── assets/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   └── images/                  # Images and icons
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

---

## 🛠️ Technology Stack

### **Frontend Framework**

- **React Native 0.79.5** - Cross-platform mobile development
- **Expo ~53.0.20** - Development platform and toolchain

### **State Management**

- **Redux Toolkit 2.8.2** - Modern Redux for state management
- **React Redux 9.2.0** - React bindings for Redux
- **Redux Persist 6.0.0** - Persist Redux state to storage

### **Navigation**

- **Expo Router 5.1.4** - File-based routing system
- **React Navigation** - Navigation library integration

### **Storage**

- **AsyncStorage 2.2.0** - Asynchronous, persistent key-value storage

### **UI/UX**

- **Expo Vector Icons 14.1.0** - Icon library
- **React Native Gesture Handler** - Touch and gesture handling
- **React Native Reanimated** - Smooth animations

---

## 📋 Available Scripts

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| `npm start`             | Start the Expo development server |
| `npm run android`       | Run on Android emulator/device    |
| `npm run ios`           | Run on iOS simulator/device       |
| `npm run web`           | Run in web browser                |
| `npm run lint`          | Run ESLint for code quality       |
| `npm run reset-project` | Reset project to initial state    |

---

## 🔧 Configuration

### Environment Setup

Create a `.env` file in the root directory for environment variables:

```env
# App Configuration
APP_NAME=U-Notes
APP_VERSION=1.0.0

# Development
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
```

### Authentication Configuration

The app uses mock authentication for demonstration. To integrate with a real backend:

1. Update `app/store/slices/authSlice.js`
2. Replace mock credentials in `app/auth/index.jsx`
3. Add your API endpoints and authentication logic

---

## 🎯 Usage

### 🔐 **Login**

1. Open the app
2. Enter credentials:
   - **Username**: `test`
   - **Password**: `password123`
3. Tap "Login"

### 📝 **Managing Notes**

1. **Create**: Tap the "+" button to add a new note
2. **Edit**: Tap the edit icon (✏️) on any note
3. **Delete**: Tap the delete icon (❌) and confirm
4. **Search**: Use the search bar to find specific notes

### 🔍 **Search Features**

- Search by note title
- Search by note ID
- Real-time filtering as you type

---

## 🚀 Building for Production

### 📱 **Mobile Build**

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

### 🌐 **Web Build**

```bash
# Build for web
expo build:web

# The build output will be in the web-build/ directory
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style Guidelines

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all tests pass before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Zier0Code**

- GitHub: [@Zier0Code](https://github.com/Zier0Code)
- Repository: [U-Notes-React-Native](https://github.com/Zier0Code/U-Notes-React-Native)

---

## 🙏 Acknowledgments

- **Expo Team** for the amazing development platform
- **React Native Community** for continuous innovation
- **Redux Toolkit Team** for simplified state management
- **Open Source Contributors** who make projects like this possible

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues** page on GitHub
2. **Create a new issue** with detailed description
3. **Join the discussion** in existing issues
4. **Star the repository** if you find it helpful!

---

<div align="center">
  
  **⭐ Star this repository if it helped you! ⭐**
  
  Made with ❤️ by [Zier0Code](https://github.com/Zier0Code)
  
</div>
