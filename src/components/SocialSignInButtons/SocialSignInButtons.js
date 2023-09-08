import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButtons = () => {
    const signInWithFacebook = () => {
        console.warn("signInWithFacebook");
    };
    const signInWithGoogle = () => {
        console.warn("signInWithGoogle");
    };
    
    return (
        <>
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
            
        </>
    );
};

export default SocialSignInButtons;
