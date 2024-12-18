import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Pagine' }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false, title: 'Pagina inesistente' }} />
      </Stack>
      <StatusBar style="auto" />
    </Stack>
  );
}