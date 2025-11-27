import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { END_POINT } from '../config/end-point';
import { instance } from '../instance';
import { queryKey } from '../keys/query-key';
import { queryClient } from '../query-client';
import type { ApiResponse } from '../types/api-response';
import type {
  ComparedFont,
  CompareResult,
  CompareStateRequest,
} from '../types/user-font';

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
      queryClient.invalidateQueries({
        queryKey: [queryKey.GET_COMPARE, userId],
      });
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
const getCompare = async (): Promise<ComparedFont[]> => {
  const response = await instance.get<ApiResponse<CompareResult>>(
    END_POINT.COMPARE_FONT,
    {
      headers: { userId: String(userId) },
    },
  );
  return response.data.result.items;
};
export const useGetCompare = () => {
  return useQuery({
    queryKey: [queryKey.GET_COMPARE, userId],
    queryFn: () => getCompare(),
  });
};

/**
 * 모든 폰트 비교 상태 해제 API
 */
const compareResetAll = async (fontIds: number[]) => {
  const requests = fontIds.map((id) => postCompare(id, { isCompared: false }));
  return Promise.all(requests);
};
export const useCompareResetAll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (fontIds: number[]) => compareResetAll(fontIds),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.GET_COMPARE, userId],
      });
    },
  });
};

/**
 * 폰트 비교하기 플로팅 버튼 조회
 */
