import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput.js/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = (data) => {
        console.log(data);
    };
    const onForgotPassword = () => {
        navigation.navigate("ForgotPasswordScreen");
    };
    const dontHaveAnAccount = () => {
        navigation.navigate("SignUp");
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
                    control={control}
                    name="username"
                    rules={{ required: "Username is required" }}
                />
                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password is too short",
                        },
                    }}
                />

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                />
                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPassword}
                    type="TERTIARY"
                />
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
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignIn;
