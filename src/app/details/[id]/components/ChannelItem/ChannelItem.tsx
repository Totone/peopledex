"use client";

import { useState } from "react";
import { Mail, Phone, Share2, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/ui/primitives/card";
import { Button } from "@/ui/primitives/button";

type ChannelItemProps = {
  id: string;
  type: "phone" | "email" | "social";
  label: string;
  value: string;
};

type ChannelIconType = {
  type: ChannelItemProps["type"];
};

const ChannelIcon: React.FC<ChannelIconType> = ({ type }) => {
  const Icons: { [K in typeof type]: React.ReactElement } = {
    phone: <Phone className="h-4 w-4 text-blue-500" />,
    email: <Mail className="h-4 w-4 text-green-500" />,
    social: <Share2 className="h-4 w-4 text-purple-500" />,
  };
  return Icons[type];
};

export const ChannelItem: React.FC<ChannelItemProps> = ({
  id,
  type,
  label,
  value,
}: ChannelItemProps) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Cette fonction sera implémentée plus tard
    console.log(`Supprimer le canal: ${id}`);
  };

  return (
    <Card
      className="w-full mb-3 cursor-pointer hover:shadow-md transition-shadow py-1 rounded-md"
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent className="p-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChannelIcon type={type} />
          <div className="flex justify-center">
            <p className="text-sm font-medium">{label}</p>
            <p className={`text-xs text-blue-500  ${copied ? "visible" : "invisible"}`}>Copié!</p>
            {hovered && <p className="text-xs text-gray-500">{value}</p>}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
