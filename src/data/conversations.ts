export type Message = {
  id: string;
  sender: string;
  time: string;
  text: string;
  fromMe: boolean;
};

export type Conversation = {
  id: string;
  title: string;
  dateRange: string;
  shortDate: string;
  preview: string;
  image: string;
  isSupport: boolean;
  messages: Message[];
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    title: "Apartment in Mandaluyong",
    dateRange: "May 25–26",
    shortDate: "05-25",
    preview: "Airbnb update: Reminder – Leave a review",
    image: "https://picsum.photos/seed/airbnb5/200/200",
    isSupport: false,
    messages: [
      {
        id: "1",
        sender: "Airbnb",
        time: "9:00 AM",
        text: "Hope you enjoyed your stay! Take a moment to leave a review for your host.",
        fromMe: false,
      },
    ],
  },
  {
    id: "2",
    title: "Condominium in Makati",
    dateRange: "Jan 28–30, 2024",
    shortDate: "24-01-30",
    preview:
      "Nico: Hello, how are you? Hope you had a nice stay in our apartment.",
    image: "https://picsum.photos/seed/wish5/200/200",
    isSupport: false,
    messages: [
      {
        id: "1",
        sender: "Nico",
        time: "2:15 PM",
        text: "Hello, how are you? Hope you had a nice stay in our apartment.",
        fromMe: false,
      },
      {
        id: "2",
        sender: "You",
        time: "2:40 PM",
        text: "Yes, we loved it! Thank you so much.",
        fromMe: true,
      },
    ],
  },
  {
    id: "3",
    title: "Airbnb Support",
    dateRange: "Closed",
    shortDate: "24-01-23",
    preview: "Airbnb: This conversation is closed. If you still need help,",
    image: "",
    isSupport: true,
    messages: [
      {
        id: "1",
        sender: "Airbnb Support",
        time: "10:27 PM",
        text: "Hi Dialyn,\n\nWe will be closing this case now since we haven't received any feedback from you.\n\nIf you need further assistance, you may reach us anytime.\n\nBest regards,\nJames",
        fromMe: false,
      },
      {
        id: "2",
        sender: "Airbnb Support",
        time: "10:28 PM",
        text: "Do you still need help?",
        fromMe: false,
      },
    ],
  },
  {
    id: "4",
    title: "Maria",
    dateRange: "Jan 28–30, 2024",
    shortDate: "24-01-21",
    preview: "You: Okay po. Thank you.",
    image: "https://picsum.photos/seed/host4/200/200",
    isSupport: false,
    messages: [
      {
        id: "1",
        sender: "Maria",
        time: "11:05 AM",
        text: "Hi! Check-in is at 2 PM. The keys are with the guard at the lobby.",
        fromMe: false,
      },
      {
        id: "2",
        sender: "You",
        time: "11:20 AM",
        text: "Okay po. Thank you.",
        fromMe: true,
      },
    ],
  },
];
