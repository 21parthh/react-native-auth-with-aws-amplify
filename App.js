import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignIn from "./src/screens/SignInScreen/SignIn";
import SignUp from "./src/screens/SignUpScreen/SignUp";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen/ConfirmEmailScreen";

export default function App() {
    return (
        <SafeAreaView style={styles.root}>
            <ConfirmEmailScreen/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    },
});
