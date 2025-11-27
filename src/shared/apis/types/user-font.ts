/**
 * 비교하기 상태 변경 post 요청 타입
 */
export interface CompareStateRequest {
  isCompared: boolean;
}

export interface LikeStateRequest {
  isLiked: boolean;
}

/**
 * 폰트 타입
 */
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

/*
 * 폰트 정보 조회(get) 타입
 */
export interface ComparedFont {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
}

export interface CompareResult {
  items: ComparedFont[];
}

export interface LikeStateRequest {
  isLiked: boolean;
}

export interface FontMetadataType {
  fontFamily: string;
  fontSource: string;
  fontWeight: string;
  fontDisplay: FontDisplay;
}

export interface ComparedFont {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
}

export interface CompareResult {
  items: ComparedFont[];
}

/**
 * 폰트 찜 페이지 조회(get) 타입
 */
export interface LikedFont {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
}

export interface LikedFontResult {
  items: LikedFont[];
}
