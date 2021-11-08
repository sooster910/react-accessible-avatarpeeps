import { NumberLiteralType, NumericLiteral } from "typescript";
import PeepAvatarStories from "./stories/PeepAvatar.stories";

export type AvatarName =
    | 'Peep1'|'Peep2'| 'Peep3'|'Peep4'| 'Peep5'|'Peep6';


export interface PeepAvatarProps{
    name: AvatarName;
    title: string;
    borderRadius?: string;
    fontSize?: string;
    color?: string | "#000";
    backgroundColor?: string;
}


export type Avatars = { [key in AvatarName]: any };

