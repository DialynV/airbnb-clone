import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ListingCard from "../../components/ListingCard";
import { LISTINGS } from "../../data/listings";

type Category = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const CATEGORIES: Category[] = [
  { id: "1", label: "All", icon: "globe-outline" },
  { id: "2", label: "Homes", icon: "home-outline" },
  { id: "3", label: "Experiences", icon: "balloon-outline" },
  { id: "4", label: "Services", icon: "sparkles-outline" },
];

const Index = () => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState("All");

  const batangasHomes = LISTINGS.filter(
    (listing) => listing.section === "Batangas",
  );
  const mandaluyongHomes = LISTINGS.filter(
    (listing) => listing.section === "Mandaluyong",
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search bar */}
        <Pressable style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#222222" />
          <Text style={styles.searchText}>Start your search</Text>
        </Pressable>

        {/* Category chips */}
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
          renderItem={({ item }) => {
            const isSelected = item.label === selected;
            return (
              <Pressable
                style={[styles.chip, isSelected ? styles.chipSelected : null]}
                onPress={() => setSelected(item.label)}
              >
                <Ionicons name={item.icon} size={18} color="#222222" />
                <Text style={styles.chipText}>{item.label}</Text>
              </Pressable>
            );
          }}
        />

        {/* Section 1: Batangas */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Check out homes in Batangas</Text>
            <Text style={styles.sectionSubtitle}>
              Industrial port city in Luzon
            </Text>
          </View>
          <View style={styles.arrowButton}>
            <Ionicons name="arrow-forward" size={18} color="#222222" />
          </View>
        </View>

        <FlatList
          data={batangasHomes}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => router.push(`/listing/${item.id}`)}
            />
          )}
        />

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTextBox}>
            <Text style={styles.bannerTitle}>
              Your stay supports free emergency housing
            </Text>
            <View style={styles.learnButton}>
              <Text style={styles.learnText}>Learn how</Text>
            </View>
          </View>
          <Ionicons name="home" size={56} color="#FF385C" />
        </View>

        {/* Section 2: Mandaluyong */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Popular homes in Mandaluyong
            </Text>
            <Text style={styles.sectionSubtitle}>
              Metro Manila city with shopping malls
            </Text>
          </View>
          <View style={styles.arrowButton}>
            <Ionicons name="arrow-forward" size={18} color="#222222" />
          </View>
        </View>

        <FlatList
          data={mandaluyongHomes}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
          renderItem={({ item }) => (
            <ListingCard
              listing={item}
              onPress={() => router.push(`/listing/${item.id}`)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 32,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
  },
  chipSelected: {
    backgroundColor: "#EBEBEB",
    borderColor: "#B0B0B0",
  },
  chipText: {
    fontSize: 14,
    color: "#222222",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222222",
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#717171",
    marginTop: 2,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 16,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  bannerTextBox: {
    flex: 1,
    marginRight: 12,
  },
  bannerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222222",
  },
  learnButton: {
    alignSelf: "flex-start",
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
  },
  learnText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222222",
  },
});
