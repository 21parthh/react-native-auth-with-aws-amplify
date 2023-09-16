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
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = () => {
    const navigation = useNavigation();
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordRepeat, setPasswordRepeat] = useState("");
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch("password");

    const { height } = useWindowDimensions();
    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmailScreen");
    };
    const onTermOfUsePressed = () => {
        console.warn("TermOfUsePressed");
    };
    const onPrivacyPolicyPressed = () => {
        console.warn("PrivacyPolicyPressed");
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
                <Text style={styles.title}>Create Account</Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username is too short",
                        },
                        maxLength: {
                            value: 24,
                            message: "Username is too Long",
                        },
                    }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Email is Invalid",
                        },
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry={true}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password is too short",
                        },
                    }}
                />
                <CustomInput
                    name="Confirm Password"
                    placeholder="Confirm Password"
                    control={control}
                    secureTextEntry={true}
                    rules={{
                        validate: (value) =>
                            value === pwd || "Password Do not Match",
                    }}
                />
                <CustomButton
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

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
                    text="Have An Account? Sign In"
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

export default SignUp;
