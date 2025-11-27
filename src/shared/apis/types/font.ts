export type FontSort = 'POPULAR' | 'VIEW_COUNT' | 'LATEST' | 'NAME';

export type FontPurpose =
  | 'DOCUMENT_TITLE'
  | 'DOCUMENT_BODY'
  | 'DOCUMENT_DECORATIVE'
  | 'VIDEO_THUMBNAIL'
  | 'VIDEO_SUBTITLE'
  | 'DESIGN_PPT'
  | 'DESIGN_CARD_NEWS'
  | 'DESIGN_POSTER';

export type FontShape =
  | 'BATANG'
  | 'DOTUM'
  | 'GULIM'
  | 'DECORATIVE'
  | 'HANDWRITING';

export type FontMood =
  | 'ROUND'
  | 'ANGULAR'
  | 'SIMPLE'
  | 'THICK'
  | 'FANCY'
  | 'CUTE'
  | 'CHEERFUL'
  | 'CLASSIC'
  | 'RETRO'
  | 'FREE'
  | 'EMOTIONAL'
  | 'UNIQUE'
  | 'STRONG';

export type FontLicense =
  | 'PRINT'
  | 'WEB'
  | 'PACKAGE'
  | 'VIDEO'
  | 'EMBEDDING'
  | 'BI_CI'
  | 'OFL';

export interface GetFontsParams {
  sortBy: FontSort;
  purpose?: FontPurpose[];
  shape?: FontShape[];
  mood?: FontMood[];
  license?: FontLicense[];
}

export interface FontMetadata {
  fontFamily: string;
  fontSource: string;
  fontWeight: string;
  fontDisplay: string;
}

export interface FontResponse {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadata;
}

export interface FontListResponse {
  fonts: FontResponse[];
}
