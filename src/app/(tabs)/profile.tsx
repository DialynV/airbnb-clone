import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type MenuItem = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const MENU: MenuItem[] = [
  { id: "1", label: "Account settings", icon: "settings-outline" },
  { id: "2", label: "Get help", icon: "help-circle-outline" },
  { id: "3", label: "View profile", icon: "person-outline" },
  { id: "4", label: "Privacy", icon: "lock-closed-outline" },
];

const Profile = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topRow}>
        <View style={styles.circleButton}>
          <Ionicons name="notifications-outline" size={22} color="#222222" />
        </View>
      </View>

      <Text style={styles.title}>Profile</Text>

      {/* Profile card */}
      <View style={styles.profileCard}>
        <View style={styles.profileLeft}>
          <View>
            <View style={styles.avatar}>
              <Text style={styles.avatarLetter}>D</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Ionicons name="shield-checkmark" size={16} color="#FFFFFF" />
            </View>
          </View>
          <Text style={styles.name}>Dialyn</Text>
          <Text style={styles.location}>Makati, Philippines</Text>
        </View>

        <View style={styles.profileRight}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statLine} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Review</Text>
          </View>
          <View style={styles.statLine} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Years on Airbnb</Text>
          </View>
        </View>
      </View>

      {/* Big NEW card */}
      <View style={styles.bigCard}>
        <View style={styles.newBadge}>
          <Text style={styles.newText}>NEW</Text>
        </View>
        <Text style={styles.cardTitle}>Introducing the travel map</Text>
        <Text style={styles.cardSubtitle}>
          Get inspired by trips from people you know.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/seed/travelmap/600/300" }}
          style={styles.bigCardImage}
        />
      </View>

      {/* Two small NEW cards */}
      <View style={styles.smallCardRow}>
        <View style={styles.smallCard}>
          <View style={styles.newBadge}>
            <Text style={styles.newText}>NEW</Text>
          </View>
          <Ionicons name="images-outline" size={40} color="#222222" />
          <Text style={styles.smallCardText}>Past trips</Text>
        </View>
        <View style={styles.smallCard}>
          <View style={styles.newBadge}>
            <Text style={styles.newText}>NEW</Text>
          </View>
          <Ionicons name="people-outline" size={40} color="#222222" />
          <Text style={styles.smallCardText}>Connections</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        {MENU.map((item) => (
          <Pressable key={item.id} style={styles.menuRow}>
            <Ionicons name={item.icon} size={24} color="#222222" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#717171" />
          </Pressable>
        ))}

        <Pressable style={styles.logoutRow}>
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  profileLeft: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarLetter: {
    fontSize: 44,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  verifiedBadge: {
    position: "absolute",
    right: -2,
    bottom: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E31C5F",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222222",
    marginTop: 10,
  },
  location: {
    fontSize: 13,
    color: "#717171",
  },
  profileRight: {
    flex: 1,
    paddingLeft: 20,
  },
  stat: {
    paddingVertical: 8,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222222",
  },
  statLabel: {
    fontSize: 12,
    color: "#222222",
  },
  statLine: {
    height: 1,
    backgroundColor: "#DDDDDD",
  },
  bigCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  newBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "#3F4A6B",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  newText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222222",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#717171",
    marginTop: 4,
  },
  bigCardImage: {
    width: "100%",
    height: 160,
    borderRadius: 16,
    marginTop: 14,
    backgroundColor: "#EEEEEE",
  },
  smallCardRow: {
    flexDirection: "row",
    gap: 16,
    marginHorizontal: 20,
    marginTop: 16,
  },
  smallCard: {
    flex: 1,
    height: 140,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  smallCardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
  },
  menu: {
    marginHorizontal: 20,
    marginTop: 24,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#222222",
  },
  logoutRow: {
    paddingVertical: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
    color: "#222222",
  },
});
