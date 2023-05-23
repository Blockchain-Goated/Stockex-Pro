export interface LinkItem {
  icon: string;
  text: string;
  timestamp: string;
}

export interface SelectItem {
  label: string;
  options: string[];
}

export interface TimeZoneSelectProps {
  timeZones: string[];
}

export interface Switch {
  id: string;
  label: string;
  checked: boolean;
}
