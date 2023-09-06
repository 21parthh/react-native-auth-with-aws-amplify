import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {LinearGradient} from 'expo-linear-gradient';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn("Sign In");
    };
    const onForgotPassword = () => {
        console.warn("Forgot Password");
    };
    const signInWithFacebook = () => {
        console.warn("signInWithFacebook");
    };
    const signInWithGoogle = () => {
        console.warn("signInWithGoogle");
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
                    <Image
                        source={logo}
                        style={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />
                    <CustomInput
                        placeholder="Username"
                        value={username}
                        setValue={setUsername}
                    />
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                    />
                    <CustomButton text="Sign In" onPress={onSignInPressed} />
                    <CustomButton
                        text="Forgot Password"
                        onPress={onForgotPassword}
                        type="TERTIARY"
                    />
                    <CustomButton
                        text="Sign In With Facebook"
                        onPress={signInWithFacebook}
                        bgColor="#E7EAE4"
                        fgColor="#4769A9"
                    />
                    <CustomButton
                        text="Sign In With Google"
                        onPress={signInWithGoogle}
                        bgColor="#FAE9EA"
                        fgColor="#DD4044"
                    />
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
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignIn;
