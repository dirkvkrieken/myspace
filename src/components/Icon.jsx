import * as LucideIcons from "lucide-react";

function Icon({ name, size = 24, color, strokeWidth = 2 }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" niet gevonden`);
    return null;
  }

  return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />;
}

export default Icon;
