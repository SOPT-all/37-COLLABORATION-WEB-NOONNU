export interface FontMetadataType {
  fontFamily: string;
  fontSource: string;
  fontWeight: string;
  fontDisplay: FontDisplay;
}

export interface FontItemType {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
}
