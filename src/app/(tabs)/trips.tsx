import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Trip = {
  id: string;
  city: string;
  dates: string;
  image: string;
  avatars: string[];
  extraGuests: number;
};

const TRIPS: Trip[] = [
  {
    id: "1",
    city: "Mandaluyong",
    dates: "May 25 – 26, 2026",
    image: "https://picsum.photos/seed/airbnb5/300/300",
    avatars: [
      "https://picsum.photos/seed/guest1/80/80",
      "https://picsum.photos/seed/guest2/80/80",
      "https://picsum.photos/seed/guest3/80/80",
    ],
    extraGuests: 2,
  },
  {
    id: "2",
    city: "Makati",
    dates: "Jan 28 – 30, 2024",
    image: "https://picsum.photos/seed/wish5/300/300",
    avatars: ["https://picsum.photos/seed/guest1/80/80"],
    extraGuests: 2,
  },
];

const Trips = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Fake map */}
      <View style={[styles.map, { paddingTop: insets.top }]}>
        <Text style={[styles.mapLabel, { top: insets.top + 30, left: 40 }]}>
          China
        </Text>
        <Text style={[styles.mapLabel, { top: insets.top + 50, right: 50 }]}>
          Japan
        </Text>
        <Text style={[styles.mapLabel, { bottom: 50, left: 60 }]}>
          Indonesia
        </Text>

        <View style={styles.pin}>
          <Image source={{ uri: TRIPS[0].image }} style={styles.pinImage} />
          <Text style={styles.pinText}>Mandaluyong</Text>
          <Text style={styles.pinText}>2026</Text>
        </View>
      </View>

      {/* White sheet */}
      <View style={styles.sheet}>
        <View style={styles.handle} />
        <Text style={styles.title}>Trips</Text>

        {TRIPS.map((trip) => (
          <View key={trip.id} style={styles.tripCard}>
            <Image source={{ uri: trip.image }} style={styles.tripImage} />
            <View style={styles.tripInfo}>
              <Text style={styles.tripCity}>{trip.city}</Text>
              <Text style={styles.tripDates}>{trip.dates}</Text>

              <View style={styles.avatarRow}>
                {trip.avatars.map((uri, index) => (
                  <Image
                    key={uri}
                    source={{ uri }}
                    style={[
                      styles.avatar,
                      index === 0 ? null : styles.avatarOverlap,
                    ]}
                  />
                ))}
                <View
                  style={[
                    styles.avatar,
                    styles.avatarOverlap,
                    styles.extraBubble,
                  ]}
                >
                  <Text style={styles.extraText}>+{trip.extraGuests}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.line} />

        <View style={styles.cancelledRow}>
          <Ionicons name="calendar-outline" size={24} color="#222222" />
          <Text style={styles.cancelledText}>Cancelled reservations</Text>
          <Ionicons name="chevron-forward" size={20} color="#717171" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6ECF3",
  },
  map: {
    height: 320,
    backgroundColor: "#D6ECF3",
    alignItems: "center",
    justifyContent: "center",
  },
  mapLabel: {
    position: "absolute",
    fontSize: 13,
    color: "#7A8A90",
  },
  pin: {
    alignItems: "center",
  },
  pinImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#EEEEEE",
  },
  pinText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444444",
  },
  sheet: {
    marginTop: -24,
    minHeight: 600,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#CCCCCC",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#222222",
    marginTop: 16,
    marginBottom: 20,
  },
  tripCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 14,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  tripImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#EEEEEE",
  },
  tripInfo: {
    flex: 1,
    marginLeft: 16,
  },
  tripCity: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222222",
  },
  tripDates: {
    fontSize: 14,
    color: "#717171",
    marginTop: 2,
  },
  avatarRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "#EEEEEE",
  },
  avatarOverlap: {
    marginLeft: -10,
  },
  extraBubble: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBEBEB",
  },
  extraText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#222222",
  },
  line: {
    height: 1,
    backgroundColor: "#EBEBEB",
    marginVertical: 18,
  },
  cancelledRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#F7F7F7",
  },
  cancelledText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#222222",
  },
});
