import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Messages = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top buttons */}
      <View style={styles.topRow}>
        <View style={styles.circleButton}>
          <Ionicons name="search" size={22} color="#222222" />
        </View>
        <View style={styles.circleButton}>
          <Ionicons name="settings-outline" size={22} color="#222222" />
        </View>
      </View>

      <Text style={styles.title}>Messages</Text>

      {/* Empty state */}
      <View style={styles.emptyState}>
        <Ionicons name="chatbubbles" size={110} color="#2BB5F0" />
        <Text style={styles.emptyTitle}>Nothing to see here</Text>
        <Text style={styles.emptyText}>
          Plan a stay, experience, or service to connect with your host here.
        </Text>
        <Pressable
          style={styles.getStartedButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.getStartedText}>Get started</Text>
        </Pressable>
      </View>

      {/* Past conversations row */}
      <Pressable
        style={styles.pastRow}
        onPress={() => router.push("/conversations")}
      >
        <Text style={styles.pastText}>Past conversations</Text>
        <Ionicons name="chevron-forward" size={22} color="#222222" />
      </Pressable>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 8,
  },
  circleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222222",
    marginTop: 12,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222222",
    marginTop: 24,
  },
  emptyText: {
    fontSize: 15,
    color: "#717171",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 21,
  },
  getStartedButton: {
    backgroundColor: "#FF385C",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
  },
  getStartedText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  pastRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
  },
  pastText: {
    fontSize: 16,
    color: "#222222",
  },
});
