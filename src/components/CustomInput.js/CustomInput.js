import { View, Text, TextInput, StyleSheet } from "react-native";
import React, {useState} from "react";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry= {secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderColor: "#e8e8e8",
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput;
