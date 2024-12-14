import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Daftar() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo */}
            <Text style={styles.logo}>Xcashshop</Text>

            {/* Title */}
            <Text style={styles.title}>Daftar</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>Mohon masukkan informasi pendaftaran dengan valid</Text>

            {/* Input Fields */}
            <TextInput style={styles.input} placeholder="Nama Depan" placeholderTextColor="#B0B0B0" />
            <TextInput style={styles.input} placeholder="Nama Belakang" placeholderTextColor="#B0B0B0" />
            <TextInput style={styles.input} placeholder="Nomor Handphone" placeholderTextColor="#B0B0B0" keyboardType="phone-pad" />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#B0B0B0" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Konfirmasi Password" placeholderTextColor="#B0B0B0" secureTextEntry={true} />

            {/* Buttons */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Sudah punya akun ?</Text>
                <View style={styles.divider} />
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Masuk Sekarang</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>© 2023 Xcashshop. Semua Hak Cipta
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#1c1c1c",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        fontSize: 36,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "sans-serif-medium",
    },
    title: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: "#B0B0B0",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        width: "100%",
        backgroundColor: "#2c2c2c",
        color: "#ffffff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginBottom: 15,
        fontSize: 14,
    },
    registerButton: {
        width: "100%",
        backgroundColor: "#6A5ACD",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#B0B0B0",
    },
    dividerText: {
        color: "#B0B0B0",
        fontSize: 14,
        marginHorizontal: 10,
    },
    loginButton: {
        width: "100%",
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
    },
    loginButtonText: {
        fontSize: 16,
        color: "#1c1c1c",
        fontWeight: "bold",
    },
    footer: {
        fontSize: 12,
        color: "#B0B0B0",
        textAlign: "center",
        marginTop: 20,
    },
});