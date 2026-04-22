import {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Dumbbell,
  Footprints,
  HeartHandshake,
  Home,
  Languages,
  Leaf,
  MessageCircle,
  MonitorSmartphone,
  Route,
  Scale,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  UsersRound,
  Wind,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  Activity,
  BadgeCheck,
  CalendarCheck,
  Dumbbell,
  Footprints,
  HeartHandshake,
  Home,
  Languages,
  Leaf,
  MessageCircle,
  MonitorSmartphone,
  Route,
  Scale,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  UsersRound,
  Wind,
};

export type IconName = keyof typeof icons;

export function SiteIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as IconName] ?? Leaf;
  return <Icon className={cn("h-5 w-5", className)} aria-hidden="true" />;
}
