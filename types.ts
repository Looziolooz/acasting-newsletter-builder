
export type BlockType = 'text' | 'image' | 'button' | 'divider' | 'spacer' | 'header' | 'video';

export interface BlockStyle {
  height?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverScale?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
}

export interface Block {
  id: string;
  type: BlockType;
  content?: string;
  src?: string;
  href?: string;
  alt?: string;
  style: BlockStyle;
}

export interface Newsletter {
  id: string;
  title: string;
  blocks: Block[];
  updatedAt: string;
  theme: {
    name: string;
    primaryColor: string;
    backgroundColor: string;
    canvasColor: string;
    fontFamily: string;
  };
}

export type EditorTab = 'blocks' | 'settings' | 'ai';

export type AspectRatio = "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
