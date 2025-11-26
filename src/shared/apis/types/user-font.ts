export interface CompareStateRequest {
  isCompared: boolean;
}

export interface CompareFontPreviewType {
  id: number;
  name: string;
}

export interface CompareFontPreviewResponse {
  items: CompareFontPreviewType[];
}
