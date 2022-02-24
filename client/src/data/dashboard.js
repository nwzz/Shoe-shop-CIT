import { FiPrinter } from "react-icons/fi";
import {
  FaBuilding,
  FaChartLine,
  FaHouseUser,
  FaHospitalUser,
  FaCogs,
} from "react-icons/fa";
import { MdBedroomParent, MdSupervisedUserCircle } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { GiCash, GiPayMoney } from "react-icons/gi";
import { MdOutlineNoteAlt } from "react-icons/md";

export const dashboard = {
  menuData: [
    {
      name: "হোমপেইজ",
      link: "/dashboard",
      Icon: HiOutlineHome,
    },
    {
      name: "খালি ফ্লাট / রুম",
      link: "/flat/empty",
      Icon: MdBedroomParent,
    },
    {
      name: "চলতি ভাড়াটিয়া",
      link: "/tenant/list",
      Icon: FaHospitalUser,
    },
    {
      name: "বিল প্রিন্ট",
      link: "/month/list",
      Icon: FiPrinter,
    },
    {
      name: "সব ভাড়াটিয়া",
      link: "/tenant/oldlist",
      Icon: FaHospitalUser,
    },
    {
      name: "দিনের খরচ",
      link: "/daily/expenses",
      Icon: GiPayMoney,
    },
    {
      name: "ক্যাশ ইন হ্যান্ড লেজার",
      link: "/cash/ledger",
      Icon: GiCash,
    },
    {
      name: "পার্টি লেজার",
      link: "/party/ledger",
      Icon: MdOutlineNoteAlt,
    },
    // {
    //   name: "বাকি ক্রয়",
    //   link: "/setup/due-purchase",
    //   Icon: FcMultipleDevices,
    // },
    // {
    //   name: "লেনদেন",
    //   link: "/setup/transaction",
    //   Icon: FcProcess,
    // },
  ],
  settingMenuData: [
    {
      name: "বাড়ি / বিল্ডিং",
      link: "/setup/building/list",
      Icon: FaBuilding,
    },
    {
      name: "ফ্লাট / রুম",
      link: "/setup/flat/list",
      Icon: MdBedroomParent,
    },
    {
      name: "পার্টি",
      link: "/setup/party/list",
      Icon: MdSupervisedUserCircle,
    },
    {
      name: "খরচের খাত",
      link: "/setup/expense/list",
      Icon: FaChartLine,
    },
    {
      name: "কেয়ারটেকার",
      link: "/setup/user/list",
      Icon: FaHouseUser,
    },
    {
      name: "সেটিংস",
      link: "/settings",
      Icon: FaCogs,
    },
  ],
};
