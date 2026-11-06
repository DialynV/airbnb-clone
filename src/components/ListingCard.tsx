import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Listing } from "../data/listings";

type Props = {
  listing: Listing;
  onPress: () => void;
};

const ListingCard = ({ listing, onPress }: Props) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Image source={{ uri: listing.image }} style={styles.image} />

        {listing.isGuestFavorite ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Guest favourite</Text>
          </View>
        ) : null}

        <View style={styles.heart}>
          <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {listing.title}
      </Text>
      <Text style={styles.details}>
        ₱{listing.price.toLocaleString()} for {listing.nights} nights · ★{" "}
        {listing.rating}
      </Text>
    </Pressable>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  card: {
    width: 170,
    marginRight: 14,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 18,
    backgroundColor: "#EEEEEE",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#222222",
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#222222",
  },
  details: {
    marginTop: 2,
    fontSize: 13,
    color: "#717171",
  },
});
