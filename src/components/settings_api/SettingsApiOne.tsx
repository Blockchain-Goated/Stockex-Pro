import Link from "next/link";
import { LinkData } from "../../types/SettingsApiTypes";

interface LinkProps {
  data: LinkData;
}

const SettingsApiOne: React.FC<LinkProps> = ({ data }) => (
  <Link href={data.href} className={data.className}>
    <div className="d-flex align-items-center">
      <span className={`me-3 ${data.iconClass}`}>
        <i className={data.icon}></i>
      </span>
      <div>
        <p>{data.title}</p>
        <span>{data.timestamp}</span>
      </div>
    </div>
  </Link>
);

export default SettingsApiOne;
