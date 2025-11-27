export interface CompareStateRequest {
  isCompared: boolean;
}

export interface FontMetadataType {
  fontFamily: string;
  fontSource: string;
  fontWeight: string;
  fontDisplay: FontDisplay;
}

/**
 * 플루팅 버튼(get) 타입
 */
export interface CompareFontPreviewType {
  id: number;
  name: string;
  fontMetadata: FontMetadataType;
}

export interface CompareFontPreviewResponse {
  items: CompareFontPreviewType[];
}
