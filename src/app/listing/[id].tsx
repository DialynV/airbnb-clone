import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LISTINGS } from "../../data/listings";

const ListingDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const listing = LISTINGS.find((item) => item.id === id);

  if (listing === undefined) {
    return (
      <View style={styles.notFound}>
        <Text>Listing not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero photo */}
        <View>
          <Image source={{ uri: listing.image }} style={styles.heroImage} />

          <View style={[styles.topButtons, { top: insets.top + 8 }]}>
            <Pressable
              style={styles.circleButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={20} color="#222222" />
            </Pressable>
            <View style={styles.rightButtons}>
              <View style={styles.circleButton}>
                <Ionicons name="share-outline" size={20} color="#222222" />
              </View>
              <View style={styles.circleButton}>
                <Ionicons name="heart-outline" size={20} color="#222222" />
              </View>
            </View>
          </View>
        </View>

        {/* White sheet */}
        <View style={styles.sheet}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subtitle}>Entire home in {listing.city}</Text>
          <Text style={styles.subtitle}>
            {listing.guests} guests · {listing.bedrooms} bedrooms ·{" "}
            {listing.beds} beds · {listing.baths} baths
          </Text>

          {/* Stats row */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{listing.rating}</Text>
              <Text style={styles.stars}>★★★★★</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.favouriteText}>
                {listing.isGuestFavorite ? "Guest\nfavourite" : "Top\nrated"}
              </Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{listing.reviewCount}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
          </View>

          <View style={styles.line} />

          {/* Host */}
          <View style={styles.hostRow}>
            <Image
              source={{
                uri: `https://picsum.photos/seed/host${listing.id}/100/100`,
              }}
              style={styles.hostAvatar}
            />
            <View>
              <Text style={styles.rowTitle}>Hosted by {listing.hostName}</Text>
              <Text style={styles.rowSubtitle}>
                Superhost · {listing.hostYears} years hosting
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          {/* Highlights */}
          <View style={styles.highlight}>
            <Ionicons name="key-outline" size={26} color="#222222" />
            <View style={styles.highlightText}>
              <Text style={styles.rowTitle}>Self check-in</Text>
              <Text style={styles.rowSubtitle}>
                Check yourself in with the keypad.
              </Text>
            </View>
          </View>
          <View style={styles.highlight}>
            <Ionicons name="home-outline" size={26} color="#222222" />
            <View style={styles.highlightText}>
              <Text style={styles.rowTitle}>Extra spacious</Text>
              <Text style={styles.rowSubtitle}>
                Guests love this home's spaciousness for a comfortable stay.
              </Text>
            </View>
          </View>
          <View style={styles.highlight}>
            <Ionicons name="location-outline" size={26} color="#222222" />
            <View style={styles.highlightText}>
              <Text style={styles.rowTitle}>Peace and quiet</Text>
              <Text style={styles.rowSubtitle}>
                Guests say this home is in a quiet area.
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          {/* Description */}
          <Text style={styles.description}>{listing.description}</Text>
          <View style={styles.showMoreButton}>
            <Text style={styles.showMoreText}>Show more</Text>
          </View>

          <View style={styles.line} />

          {/* Big rating */}
          <Text style={styles.bigRating}>{listing.rating}</Text>
          <Text style={styles.bigRatingLabel}>Guest favourite</Text>
          <Text style={styles.bigRatingNote}>
            This home is a guest favourite based on ratings, reviews, and
            reliability
          </Text>
        </View>
      </ScrollView>

      {/* Bottom reserve bar */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 12 }]}>
        <View>
          <Text style={styles.price}>₱{listing.price.toLocaleString()}</Text>
          <Text style={styles.priceNote}>
            For {listing.nights} nights · Nov 13–15
          </Text>
        </View>
        <Pressable
          style={styles.reserveButton}
          onPress={() =>
            Alert.alert("Reserved!", `You booked ${listing.title}.`)
          }
        >
          <Text style={styles.reserveText}>Reserve</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: "100%",
    height: 340,
    backgroundColor: "#EEEEEE",
  },
  topButtons: {
    position: "absolute",
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightButtons: {
    flexDirection: "row",
    gap: 10,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  sheet: {
    marginTop: -28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: "#222222",
  },
  subtitle: {
    fontSize: 15,
    color: "#717171",
    textAlign: "center",
    marginTop: 6,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#DDDDDD",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222222",
  },
  stars: {
    fontSize: 11,
    color: "#222222",
  },
  statLabel: {
    fontSize: 12,
    color: "#222222",
  },
  favouriteText: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#222222",
  },
  line: {
    height: 1,
    backgroundColor: "#EBEBEB",
    marginVertical: 22,
  },
  hostRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  hostAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EEEEEE",
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
  rowSubtitle: {
    fontSize: 14,
    color: "#717171",
    marginTop: 2,
  },
  highlight: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 18,
  },
  highlightText: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#222222",
  },
  showMoreButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  showMoreText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
  },
  bigRating: {
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
    color: "#222222",
  },
  bigRatingLabel: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#222222",
  },
  bigRatingNote: {
    fontSize: 14,
    textAlign: "center",
    color: "#717171",
    marginTop: 8,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
    backgroundColor: "#FFFFFF",
  },
  price: {
    fontSize: 17,
    fontWeight: "700",
    textDecorationLine: "underline",
    color: "#222222",
  },
  priceNote: {
    fontSize: 13,
    color: "#717171",
    marginTop: 2,
  },
  reserveButton: {
    backgroundColor: "#FF385C",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
  },
  reserveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
