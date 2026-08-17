export type Social = {
  name: string;
  /** Leave empty to render an editable placeholder instead of a broken link. */
  url: string;
  icon: "facebook" | "whatsapp" | "pinterest" | "instagram" | "youtube" | "telegram";
};

// URLs are intentionally left blank — paste the real channel links here.
export const socials: Social[] = [
  { name: "Facebook", url: "https://www.facebook.com/people/Urdu-novel-Bank/100090906471153/", icon: "facebook" },
  { name: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029VaurdEY0wajrnyeAl50Y", icon: "whatsapp" },
  { name: "Pinterest", url: "https://www.pinterest.com/bankurdunovel/", icon: "pinterest" },
  { name: "Pinterest (second)", url: "https://www.pinterest.com/urdunovelbanks/", icon: "pinterest" },
  { name: "Instagram", url: "https://www.instagram.com/urdunovelbank/", icon: "instagram" },
  { name: "YouTube", url: "https://youtube.com/@urdunovelbank", icon: "youtube" },
  { name: "Telegram", url: "https://t.me/urdunovelbank", icon: "telegram" },
];
