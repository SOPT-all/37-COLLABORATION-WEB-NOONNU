import { useQuery } from '@tanstack/react-query';

import { END_POINT } from '../config/end-point';
import { instance } from '../instance';
import { queryKey } from '../keys/query-key';
import type { ApiResponse } from '../types/api-response';
import type { FontListResponse, GetFontsParams } from '../types/font';

const userId = 1;

const getFonts = async (params: GetFontsParams) => {
  const response = await instance.get<ApiResponse<FontListResponse>>(
    END_POINT.GET_FONTS,
    {
      params,
      headers: {
        userId: userId,
      },
    },
  );
  return response.data;
};

export const useGetFonts = (params: GetFontsParams) => {
  return useQuery({
    queryKey: [queryKey.GET_FONTS, userId],
    queryFn: () => getFonts(params),
  });
};
