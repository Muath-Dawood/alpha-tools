import enUSMessages from "@/locales/en.json";

type Messages = typeof enUSMessages;
declare global {
  interface IntlMessages extends Messages {}
}
