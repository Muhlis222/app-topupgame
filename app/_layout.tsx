import React from "react";
import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _layout() {
  return (

    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Beranda",
          title: "Beranda", // Mengubah judul header halaman
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="home/game"
        options={{
          drawerLabel: "Semua Game",
          title: "Semua Game",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="home/lacakpesanan"
        options={{
          drawerLabel: "Lacak Pesanan",
          title: "Lacak Pesanan",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="home/login"
        options={{
          headerShown: false,
          drawerLabel: "Masuk",
          title: "Masuk",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="home/about"
        options={{
          drawerLabel: "About",
          title: "About",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="home/masuk"
        options={{
          title: "Masuk",
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="home/daftar"
        options={{
          drawerItemStyle: { display: "none" },
          title: "Daftar",
        }}
      />
    </Drawer>
  );
}
