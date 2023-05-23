import { LinkData } from "../../src/types/SettingsApiTypes";

const linkData: LinkData[] = [
  {
    href: "#",
    className: "",
    iconClass: "icon success",
    icon: "bi bi-check",
    title: "Account created successfully",
    timestamp: "2020-11-04 12:00:23",
  },
  {
    href: "#",
    className: "",
    iconClass: "icon fail",
    icon: "bi bi-x",
    title: "2FA verification failed",
    timestamp: "2020-11-04 12:00:23",
  },
  {
    href: "#",
    className: "",
    iconClass: "icon success",
    icon: "bi bi-check",
    title: "Device confirmation completed",
    timestamp: "2020-11-04 12:00:23",
  },
  {
    href: "#",
    className: "",
    iconClass: "icon pending",
    icon: "bi bi-exclamation-triangle",
    title: "Phone verification pending",
    timestamp: "2020-11-04 12:00:23",
  },
];

export default linkData;
