import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SignIn from "./src/screens/SignInScreen/SignIn";

export default function App() {
    return (
        <SafeAreaView style={styles.root}>
            <SignIn />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
