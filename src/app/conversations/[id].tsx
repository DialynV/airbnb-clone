import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CONVERSATIONS, Message } from "../../data/conversations";

const Chat = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();

  const conversation = CONVERSATIONS.find((item) => item.id === id);

  const [messages, setMessages] = useState<Message[]>(
    conversation ? conversation.messages : [],
  );
  const [draft, setDraft] = useState("");
  const [answered, setAnswered] = useState(false);

  if (conversation === undefined) {
    return (
      <View style={styles.notFound}>
        <Text>Conversation not found.</Text>
      </View>
    );
  }

  const addMyMessage = (text: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      sender: "You",
      time: "Now",
      text: text,
      fromMe: true,
    };
    setMessages([...messages, newMessage]);
  };

  const handleSend = () => {
    if (draft.trim().length === 0) {
      return;
    }
    addMyMessage(draft.trim());
    setDraft("");
  };

  const handleAnswer = (answer: string) => {
    addMyMessage(answer);
    setAnswered(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222222" />
        </Pressable>

        <View style={styles.headerCenter}>
          {conversation.isSupport ? (
            <View style={styles.headerAvatarDark}>
              <Ionicons name="person-outline" size={26} color="#FFFFFF" />
            </View>
          ) : (
            <Image
              source={{ uri: conversation.image }}
              style={styles.headerAvatar}
            />
          )}
          <Text style={styles.headerTitle} numberOfLines={1}>
            {conversation.title}
          </Text>
          <Text style={styles.headerSubtitle}>{conversation.dateRange}</Text>
        </View>

        <View style={styles.detailsButton}>
          <Text style={styles.detailsText}>Details</Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) =>
          item.fromMe ? (
            <View style={styles.myMessageRow}>
              <View style={styles.myBubble}>
                <Text style={styles.myText}>{item.text}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.theirMessageRow}>
              <View style={styles.smallAvatar}>
                <Ionicons name="person-outline" size={18} color="#FFFFFF" />
              </View>
              <View style={styles.theirContent}>
                <Text style={styles.senderLine}>
                  <Text style={styles.senderName}>{item.sender}</Text>{" "}
                  {item.time}
                </Text>
                <View style={styles.theirBubble}>
                  <Text style={styles.theirText}>{item.text}</Text>
                </View>
              </View>
            </View>
          )
        }
        ListFooterComponent={
          conversation.isSupport && !answered ? (
            <View style={styles.optionsBox}>
              <Pressable
                style={styles.option}
                onPress={() => handleAnswer("Yes, I still need help.")}
              >
                <Text style={styles.optionText}>Yes, I still need help.</Text>
              </Pressable>
              <View style={styles.optionDivider} />
              <Pressable
                style={styles.option}
                onPress={() => handleAnswer("No, I'm done.")}
              >
                <Text style={styles.optionText}>No, I'm done.</Text>
              </Pressable>
            </View>
          ) : undefined
        }
      />

      {/* Bottom: closed note OR text input */}
      {conversation.isSupport ? (
        <View
          style={[styles.closedNote, { paddingBottom: insets.bottom + 16 }]}
        >
          <Text style={styles.closedText}>
            This conversation is closed. If you still need help,{" "}
            <Text style={styles.closedLink}>Contact us</Text>
          </Text>
        </View>
      ) : (
        <View style={[styles.inputBar, { paddingBottom: insets.bottom + 10 }]}>
          <TextInput
            style={styles.input}
            placeholder="Write a message..."
            placeholderTextColor="#999999"
            value={draft}
            onChangeText={setDraft}
          />
          <Pressable style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
          </Pressable>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default Chat;

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 12,
  },
  headerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEEEEE",
  },
  headerAvatarDark: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
    marginTop: 6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#717171",
  },
  detailsButton: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222222",
  },
  messageList: {
    padding: 20,
    gap: 18,
  },
  theirMessageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  smallAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  theirContent: {
    flex: 1,
  },
  senderLine: {
    fontSize: 13,
    color: "#717171",
    marginBottom: 6,
  },
  senderName: {
    fontWeight: "600",
    color: "#717171",
  },
  theirBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#F7F7F7",
    padding: 14,
    borderRadius: 18,
  },
  theirText: {
    fontSize: 15,
    lineHeight: 21,
    color: "#222222",
  },
  myMessageRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  myBubble: {
    maxWidth: "80%",
    backgroundColor: "#222222",
    padding: 14,
    borderRadius: 18,
  },
  myText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  optionsBox: {
    marginLeft: 46,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 16,
  },
  option: {
    padding: 16,
  },
  optionText: {
    fontSize: 15,
    color: "#222222",
  },
  optionDivider: {
    height: 1,
    backgroundColor: "#DDDDDD",
  },
  closedNote: {
    paddingHorizontal: 30,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
  },
  closedText: {
    fontSize: 14,
    color: "#717171",
    textAlign: "center",
  },
  closedLink: {
    textDecorationLine: "underline",
    fontWeight: "600",
    color: "#222222",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF385C",
    alignItems: "center",
    justifyContent: "center",
  },
});
