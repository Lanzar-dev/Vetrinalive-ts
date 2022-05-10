import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export const sidebarItems = [
  {
    id: 1,
    icon: <HomeOutlinedIcon />,
    label: "Dashboard",
    route: "dashboard",
  },
  {
    id: 2,
    icon: <ShoppingCartOutlinedIcon />,
    label: "Catalogue",
    route: "catalogue",
  },
  {
    id: 3,
    icon: <ListOutlinedIcon />,
    label: "Orders",
    route: "orders",
  },
  {
    id: 4,
    icon: <PersonOutlineOutlinedIcon />,
    label: "Customers",
    route: "customers",
  },
  {
    id: 5,
    icon: <LanguageOutlinedIcon />,
    label: "Marketing",
    route: "marketing",
    subLinks: [
      {
        id: 1,
        label: "Discount codes",
      },
      {
        id: 2,
        label: "Exit intent",
      },
      {
        id: 3,
        label: "Checkout Features",
      },
      {
        id: 4,
        label: "Post-purchase conversion",
      },
      {
        id: 5,
        label: "Cart abandonment",
      },
      {
        id: 6,
        label: "Timer checkout",
      },
      {
        id: 7,
        label: "Sell on Social",
      },
      {
        id: 8,
        label: "Special Offer",
      },
      {
        id: 9,
        label: "Seasonal Offer",
      },
    ],
  },
  {
    id: 6,
    icon: <LocalShippingOutlinedIcon />,
    label: "Delivery Options",
    route: "delivery-options",
  },
  {
    id: 7,
    icon: <AttachMoneyOutlinedIcon />,
    label: "Payment Options",
    route: "payment-options",
  },
  {
    id: 8,
    icon: <BrushOutlinedIcon />,
    label: "Store Design",
    route: "store-design",
  },
  {
    id: 9,
    icon: <CreditCardOutlinedIcon />,
    label: "Subscription",
    route: "subscription",
  },
  {
    id: 10,
    icon: <SettingsApplicationsOutlinedIcon />,
    label: "Integrations",
    route: "integrations",
  },
  {
    id: 11,
    icon: <DashboardCustomizeOutlinedIcon />,
    label: "Extensions",
    route: "extensions",
  },
  {
    id: 12,
    icon: <SettingsOutlinedIcon />,
    label: "Settings",
    route: "settings",
  },
  {
    id: 12,
    icon: <LogoutOutlinedIcon />,
    label: "Log out",
    route: "log-out",
  },
  {
    id: 13,
    icon: <HelpOutlineOutlinedIcon />,
    label: "Customer Support",
    route: "customer-support",
  },
  {
    id: 14,
    icon: <ShareOutlinedIcon />,
    label: "Share your shop",
    route: "share-your-shop",
  },
  {
    id: 15,
    icon: <VisibilityOutlinedIcon />,
    label: "View your shop",
    route: "view-your-shop",
  },
];

export const marketingSublinks = [
  {
    id: 1,
    label: "Discount codes",
  },
  {
    id: 2,
    label: "Exit intent",
  },
  {
    id: 3,
    label: "Checkout Features",
  },
  {
    id: 4,
    label: "Post-purchase conversion",
  },
  {
    id: 5,
    label: "Cart abandonment",
  },
  {
    id: 6,
    label: "Timer checkout",
  },
  {
    id: 7,
    label: "Sell on Social",
  },
  {
    id: 8,
    label: "Special Offer",
  },
  {
    id: 9,
    label: "Seasonal Offer",
  },
];

export const sidebarMenuItems = [
  {
    id: 1,
    icon: <LocalShippingOutlinedIcon />,
    label: "Delivery Options",
    route: "delivery-options",
  },
  {
    id: 2,
    icon: <AttachMoneyOutlinedIcon />,
    label: "Payment Options",
    route: "payment-options",
  },
  {
    id: 3,
    icon: <BrushOutlinedIcon />,
    label: "Store Design",
    route: "store-design",
  },
  {
    id: 4,
    icon: <CreditCardOutlinedIcon />,
    label: "Subscription",
    route: "subscription",
  },
  {
    id: 5,
    icon: <SettingsApplicationsOutlinedIcon />,
    label: "Integrations",
    route: "integrations",
  },
  {
    id: 6,
    icon: <DashboardCustomizeOutlinedIcon />,
    label: "Extensions",
    route: "extensions",
  },
  {
    id: 7,
    icon: <SettingsOutlinedIcon />,
    label: "Settings",
    route: "settings",
  },
  {
    id: 8,
    icon: <LogoutOutlinedIcon />,
    label: "Log out",
    route: "log-out",
  },
];

export const sidebarBottomMenuItems = [
  {
    id: 1,
    icon: <HelpOutlineOutlinedIcon />,
    label: "Customer Support",
    route: "customer-support",
  },
  {
    id: 2,
    icon: <ShareOutlinedIcon />,
    label: "Share your shop",
    route: "share-your-shop",
  },
  {
    id: 3,
    icon: <VisibilityOutlinedIcon />,
    label: "View your shop",
    route: "view-your-shop",
  },
];

export const selectMenuItems = [
  {
    id: 1,
    label: "Fenoh Store",
    value: "fenoh store",
  },
  {
    id: 2,
    label: "Cuban Store",
    value: "cuban store",
  },
  {
    id: 3,
    label: "Afro Store",
    value: "afro store",
  },
];
