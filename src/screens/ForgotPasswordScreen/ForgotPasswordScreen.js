import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");

    const { height } = useWindowDimensions();
    const onSendPressed = () => {
        navigation.navigate("NewPasswordScreen");
    };
    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    return (
        // <LinearGradient
        //     colors={["#ffafbd", "#ffc3a0"]} // Adjust these colors as needed
        //     style={{ flex: 1 }}
        // >
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomButton text="Send" onPress={onSendPressed} />
                <CustomButton
                    text="Back To Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
        // </LinearGradient>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051069",
        margin: 10,
    },
    text: {
        color: "grey",
        marginVertical: 10,
        justifyContent: "space-between",
    },
    link: {
        color: "#FDB075",
    },
});

export default ForgotPasswordScreen;
