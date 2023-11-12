# Resources

## Project

### 1. Create project named `RoiFrontEnd_<yourname>`

```bash
npx create-expo-app RoiFrontEnd_<yourname>
```

### 2. Navigate to the project directory

```bash
cd RoiFrontEnd_<yourname>
```

### 3. Install web dependencies

```bash
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```

### 4. Install native dependencies

```bash
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context

npx expo install @react-navigation/native-stack

npx expo install @react-navigation/bottom-tabs

npx expo install @expo/vector-icons

npx expo install expo-linking

npx expo install @react-native-async-storage/async-storage

npx expo install @react-native-community/netinfo

npx expo install @react-native-picker/picker

npx expo install moment

npm install --save-dev @types/react-navigation
```

## Auto import

- Auto import is a feature that allows you to quickly add import statements for modules, components, or other symbols that you use in your code.
- One of the most common and recommended ways is to use a `jsconfig.json` file in your project root folder.
- This file tells VS Code how to treat your JavaScript files, what module system you are using, what JSX syntax you prefer, and where to look for your source files.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2016",
    "jsx": "react-jsx",
    "baseUrl": "./src",
    "checkJs": true
  },
  "exclude": ["node_modules", "**/node_modules/*"],
  "include": ["*.js", "src/**/*.js"]
}
```

## icons

'@expo/vector-icons'

### Install

```bash
npx expo install @expo/vector-icons
```

### Usage

```javascript
import Ionicons from '@expo/vector-icons/Ionicons';
```

### Resource

- [Github repo: expo / vector-icons](https://github.com/expo/vector-icons)
- [@expo/vector-icons directory](https://expo.github.io/vector-icons/) a searchable list of all included icons.
- [Font Awesome 5 icons directory](https://fontawesome.com/icons) all Font Awesome 5 icons (including the Pro icons).
