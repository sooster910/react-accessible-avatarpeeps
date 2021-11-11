import { NumberLiteralType, NumericLiteral } from "typescript";


export type AvatarName =
    | 'Peep1' | 'Peep2' | 'Peep3' | 'Peep4' | 'Peep5' | 'Peep6' | 'Peep7' | 'Peep8' | 'Peep9' | 'Peep10' | 'Peep11' | 'Peep12' | 'Peep13' | 'Peep14' | 'Peep15' | 'Peep16' | 'Peep17' | 'Peep18' | 'Peep19' | 'Peep20' | 'Peep21' | 'Peep22' | 'Peep23' | 'Peep24' | 'Peep25' | 'Peep26' | 'Peep27' | 'Peep28' | 'Peep29' | 'Peep30';


export interface PeepAvatarProps{
    name: AvatarName;
    title: string;
    borderRadius?: string;
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
}


export type Avatars = { [key in AvatarName]: any };

