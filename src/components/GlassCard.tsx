import { ReactNode, CSSProperties } from "react";
import { useTheme } from "../context/ThemeContext";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export default function GlassCard({
  children,
  className = "",
  onClick,
  style = {},
}: GlassCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      onClick={onClick}
      className={`backdrop-blur-lg rounded-2xl p-6 shadow-xl transition-all duration-300 ${
        isDark
          ? "bg-white/10 border-white/20 hover:bg-white/15"
          : "bg-slate-900/5 border-slate-900/10 hover:bg-slate-900/10"
      } border hover:border-blue-500/20 ${className}`}
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
          : "linear-gradient(135deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.02) 100%)",
        boxShadow: isDark
          ? "0 8px 32px 0 rgba(59, 130, 246, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)"
          : "0 8px 32px 0 rgba(59, 130, 246, 0.05), inset 0 1px 0 0 rgba(15, 23, 42, 0.05)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}