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
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const [username, setUsername] = useState("");

    const { height } = useWindowDimensions();
    const onConfirmPressed = (data) => {
        navigation.navigate("HomeScreen");
    };
    const onResendPressed = () => {
        console.warn("Resend");
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
                <Text style={styles.title}>Confirm Email</Text>
                <CustomInput
                    name="code"
                    placeholder="Enter a Confirmation Code"
                    control={control}
                    rules={{ required: "Confirmation code is required" }}
                />
                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />
                <CustomButton
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />
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

export default ConfirmEmailScreen;
