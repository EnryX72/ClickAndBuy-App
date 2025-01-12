import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ title: 'Pagine' }} />
        <Stack.Screen name="+not-found" options={{ title: 'Pagina inesistente' }} />
      </Stack>
      <StatusBar style={"light"}/>
    </Stack>
  );
}