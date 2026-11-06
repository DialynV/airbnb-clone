import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CONVERSATIONS } from "../../data/conversations";

const PastConversations = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.topRow}>
        <Pressable style={styles.circleButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#222222" />
        </Pressable>
        <View style={styles.circleButton}>
          <Ionicons name="search" size={22} color="#222222" />
        </View>
      </View>

      <Text style={styles.title}>Past conversations</Text>

      <FlatList
        data={CONVERSATIONS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => router.push(`/conversations/${item.id}`)}
          >
            {item.isSupport ? (
              <View style={styles.supportAvatar}>
                <Ionicons name="headset" size={30} color="#FFFFFF" />
              </View>
            ) : (
              <Image source={{ uri: item.image }} style={styles.avatar} />
            )}

            <View style={styles.rowText}>
              <View style={styles.rowTop}>
                <Text style={styles.small}>{item.dateRange}</Text>
                <Text style={styles.small}>{item.shortDate}</Text>
              </View>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.preview} numberOfLines={2}>
                {item.preview}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PastConversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 30,
    fontWeight: "700",
    color: "#222222",
    marginTop: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: "#EEEEEE",
  },
  supportAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1,
    marginLeft: 16,
  },
  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  small: {
    fontSize: 13,
    color: "#717171",
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222222",
    marginTop: 2,
  },
  preview: {
    fontSize: 14,
    color: "#717171",
    marginTop: 2,
  },
});
