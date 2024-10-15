import React from "react";
import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

interface Props {
    name: IconName;
    color?: string;
    size?: number;
    className?: string;
    [key: string]: any;
}

const Icon = ({
    name,
    color,
    size,

    ...otherProps
}: Props) => {
    const LucideIcon = icons[name];
    return (
        <LucideIcon
            color={color}
            size={size}
            {...otherProps}
        />
    );
};

export default Icon;