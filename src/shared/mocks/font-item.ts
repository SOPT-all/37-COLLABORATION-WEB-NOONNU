//mocks/list-data.ts

import type { FontItemType } from '../types/font';

export const fontItem: FontItemType[] = [
  {
    id: 1,
    name: '어그로체 Light',
    producer: '(주)샌드박스네트워크',
    thicknessNum: 1,
    phrase: '어그로가 필요한 순간엔 어그로체를',
    isLiked: true,
    isCompared: false,
    fontMetadata: {
      fontFamily: 'Aggravo',
      fontSource:
        'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroL.woff',
      fontWeight: '300',
      fontDisplay: 'swap',
    },
  },
  {
    id: 2,
    name: '어그로체 Medium',
    producer: '(주)샌드박스네트워크',
    thicknessNum: 2,
    phrase: '어그로가 필요한 순간엔 어그로체를',
    isLiked: false,
    isCompared: true,
    fontMetadata: {
      fontFamily: 'Aggravo',
      fontSource:
        'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroM.woff',
      fontWeight: '500',
      fontDisplay: 'swap',
    },
  },
  {
    id: 3,
    name: '어그로체 Bold',
    producer: '(주)샌드박스네트워크',
    thicknessNum: 3,
    phrase: '어그로가 필요한 순간엔 어그로체를',
    isLiked: false,
    isCompared: false,
    fontMetadata: {
      fontFamily: 'Aggravo',
      fontSource:
        'https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
  },
];
