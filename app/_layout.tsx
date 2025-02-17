import { AuthProvider } from "@/context/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen name="walletModal" options={{ presentation: "modal" }} />
        <Stack.Screen name="transationModal" options={{ presentation: "modal" }} />
        {/* Agrega más pantallas aquí si es necesario */}
      </Stack>
    </AuthProvider>
  );
}
