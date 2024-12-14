import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Masuk from "./masuk";

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Text style={styles.logo}>Xcashshop</Text>

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>Selamat datang di Xcashshop</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('home/masuk')} >
                    <Text style={styles.buttonText}>Masuk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('home/daftar')}>
                    <Text style={styles.buttonText}>Daftar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c", // Warna latar belakang gelap sesuai gambar
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        fontSize: 36,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "sans-serif-medium", // Opsional, bisa menyesuaikan font
    },
    welcomeText: {
        fontSize: 16,
        color: "#ffffff",
        marginBottom: 40,
        fontFamily: "sans-serif",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        width: 100,
        paddingVertical: 12,
        borderRadius: 25,
        marginHorizontal: 10,
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#FF6A00", // Oranye sesuai gambar
    },
    registerButton: {
        backgroundColor: "#6A5ACD", // Biru sesuai gambar
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
