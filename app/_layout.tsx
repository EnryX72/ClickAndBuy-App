import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StatusBar style={"dark"} animated={true} translucent={true} hidden={true}/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ title: 'Pagine' }} />
        <Stack.Screen name="+not-found" options={{ title: 'Pagina inesistente' }} />
      </Stack>
    </Stack>
  );
}