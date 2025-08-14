import React from "react";
import { Button } from "./button";
import { whatsappConfig } from "../../lib/config";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  customMessage?: string;
}

export default function WhatsAppButton({ 
  children, 
  variant = "default", 
  size = "md", 
  className = "",
  customMessage 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = customMessage || whatsappConfig.message;
    const whatsappUrl = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
