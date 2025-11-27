/**
 * 비교하기 상태 변경 post 요청 타입
 */
export interface CompareStateRequest {
  isCompared: boolean;
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
