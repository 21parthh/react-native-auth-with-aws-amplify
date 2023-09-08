import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { LinearGradient } from "expo-linear-gradient";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const { height } = useWindowDimensions();
    const onRegisterPressed = () => {
        console.warn("Registered");
    };
    const onForgotPassword = () => {
        console.warn("Forgot Password");
    };
    const onTermOfUsePressed = () => {
        console.warn("TermOfUsePressed");
    };
    const onPrivacyPolicyPressed = () => {
        console.warn("PrivacyPolicyPressed");
    };
    const dontHaveAnAccount = () => {
        console.warn("dontHaveAnAccount");
    };
    return (
        // <LinearGradient
        //     colors={["#ffafbd", "#ffc3a0"]} // Adjust these colors as needed
        //     style={{ flex: 1 }}
        // >
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create Account</Text>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomInput
                    placeholder="Confirm Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />
                <CustomButton text="Register" onPress={onRegisterPressed} />

                <Text style={styles.text}>
                    By Registering, You accept that you accept our{" "}
                    <Text style={styles.link} onPress={onTermOfUsePressed}>
                        Terms of Use
                    </Text>{" "}
                    and{" "}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                        Privacy Policy
                    </Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton
                    text="Don't Have an Account? Create One"
                    onPress={dontHaveAnAccount}
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

export default SignUp;
