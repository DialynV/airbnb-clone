import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Wishlist = {
  id: string;
  name: string;
  subtitle: string;
  images: string[];
};

const WISHLISTS: Wishlist[] = [
  {
    id: "1",
    name: "Recently viewed",
    subtitle: "Today",
    images: [
      "https://picsum.photos/seed/airbnb6/300/300",
      "https://picsum.photos/seed/airbnb1/300/300",
      "https://picsum.photos/seed/airbnb4/300/300",
      "https://picsum.photos/seed/airbnb5/300/300",
    ],
  },
  {
    id: "2",
    name: "Pasay",
    subtitle: "3 saved",
    images: ["https://picsum.photos/seed/wish2/400/400"],
  },
  {
    id: "3",
    name: "Cebu City 2024",
    subtitle: "1 saved",
    images: ["https://picsum.photos/seed/wish3/400/400"],
  },
  {
    id: "4",
    name: "Mandaluyong",
    subtitle: "3 saved",
    images: ["https://picsum.photos/seed/wish4/400/400"],
  },
  {
    id: "5",
    name: "Makati",
    subtitle: "2 saved",
    images: ["https://picsum.photos/seed/wish5/400/400"],
  },
  {
    id: "6",
    name: "Summer trip",
    subtitle: "Nothing saved yet",
    images: [],
  },
];

const Wishlists = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.editRow}>
        <View style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </View>
      </View>

      <Text style={styles.title}>Wishlists</Text>

      <FlatList
        data={WISHLISTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columns}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.tile}>
            {item.images.length > 1 ? (
              <View style={styles.grid}>
                {item.images.map((uri) => (
                  <Image key={uri} source={{ uri }} style={styles.gridImage} />
                ))}
              </View>
            ) : item.images.length === 1 ? (
              <Image
                source={{ uri: item.images[0] }}
                style={styles.tileImage}
              />
            ) : (
              <View style={[styles.tileImage, styles.emptyTile]}>
                <Ionicons name="heart-outline" size={56} color="#FFFFFF" />
              </View>
            )}

            <Text style={styles.tileName}>{item.name}</Text>
            <Text style={styles.tileSubtitle}>{item.subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Wishlists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  editRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginTop: 8,
  },
  editButton: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222222",
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  columns: {
    gap: 16,
  },
  tile: {
    flex: 1,
    marginBottom: 22,
  },
  tileImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 18,
    backgroundColor: "#EEEEEE",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 18,
    overflow: "hidden",
  },
  gridImage: {
    width: "50%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#EEEEEE",
  },
  emptyTile: {
    backgroundColor: "#8A8A8A",
    alignItems: "center",
    justifyContent: "center",
  },
  tileName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
  tileSubtitle: {
    fontSize: 14,
    color: "#717171",
    marginTop: 2,
  },
});
