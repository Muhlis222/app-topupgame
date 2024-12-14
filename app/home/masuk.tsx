import React from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

export default function Masuk() {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Text style={styles.logo}>Xcashshop</Text>

            {/* Form */}
            <Text style={styles.title}>Masuk</Text>
            <Text style={styles.subtitle}>Masuk menggunakan Akun terdaftar Kamu.</Text>

            <TextInput
                style={styles.input}
                placeholder="Nomor Handphone"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            <View style={styles.optionsContainer}>
                <Text style={styles.optionsText}>Ingatkan Saya</Text>
                <TouchableOpacity>
                    <Text style={styles.link}>Lupa Password</Text>
                </TouchableOpacity>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
                <Text style={styles.dividerText}>Belum punya akun ?</Text>
            </View>

            {/* Register Button */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Daftar Sekarang</Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>© 2023 Xcashshop. Semua Hak Cipta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#aaa",
        marginBottom: 16,
    },
    input: {
        width: "100%",
        backgroundColor: "#1e1e1e",
        borderRadius: 8,
        padding: 12,
        color: "#fff",
        marginBottom: 16,
    },
    optionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 16,
    },
    optionsText: {
        color: "#fff",
    },
    link: {
        color: "#4a90e2",
    },
    button: {
        width: "100%",
        backgroundColor: "#4a90e2",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
        marginBottom: 16,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    dividerText: {
        color: "#aaa",
    },
    registerButton: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        alignItems: "center",
    },
    registerButtonText: {
        color: "#121212",
        fontWeight: "bold",
    },
    footer: {
        marginTop: 32,
        color: "#aaa",
        fontSize: 12,
    },
});
