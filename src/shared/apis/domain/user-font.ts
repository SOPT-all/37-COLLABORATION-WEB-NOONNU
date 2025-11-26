import { useMutation, useQuery } from '@tanstack/react-query';

import { END_POINT } from '../config/end-point';
import { instance } from '../instance';
import { queryClient } from '../query-client';
import type { ApiResponse } from '../types/api-response';
import type {
  CompareStateRequest,
  CompareFontPreviewResponse,
  CompareFontPreviewType,
} from '../types/user-font';
import { queryKey } from '../keys/query-key';

const userId = 1;

/**
 * 폰트 비교하기 상태 변경
 */
const postCompare = async (fontId: number, request: CompareStateRequest) => {
  const response = await instance.post<ApiResponse<null>>(
    END_POINT.COMPARE_STATE_CHANGE(fontId),
    request,
    {
      headers: {
        userId: userId,
      },
    },
  );
  return response.data;
};
export const usePostCompare = () => {
  return useMutation({
    mutationFn: ({
      fontId,
      request,
    }: {
      fontId: number;
      request: CompareStateRequest;
    }) => postCompare(fontId, request),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

/**
 * 폰트 좋아요 상태 변경
 */

/**
 * 좋아요한 폰트 목록 조회
 */

/**
 * 비교하기에 담긴 폰트 목록 조회
 */

/**
 * 폰트 비교하기 플로팅 버튼 조회
 */
const getComparedFontPreview = async (): Promise<CompareFontPreviewType[]> => {
  const response = await instance.get<ApiResponse<CompareFontPreviewResponse>>(
    END_POINT.COMPARE_FONT_BUTTON,
    { headers: { userId: String(userId) } },
  );
  return response.data.result.items;
};

export const useGetComparePreview = () => {
  return useQuery({
    queryKey: [queryKey.GET_COMPARE_FONT_PREVIEW],
    queryFn: () => getComparedFontPreview(),
  });
};
