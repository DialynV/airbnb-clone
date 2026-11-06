import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="listing/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="conversations/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="conversations/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;
