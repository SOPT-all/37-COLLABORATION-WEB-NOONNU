import type { SVGProps } from 'react';
import {
  AngularButtonIcon,
  BatangButtonIcon,
  BodyButtonIcon,
  BoldButtonIcon,
  CaptionButtonIcon,
  CardNewsButtonIcon,
  ClassicButtonIcon,
  CuteButtonIcon,
  DistinctButtonIcon,
  DotumButtonIcon,
  EmotionalButtonIcon,
  EmphasisButtonIcon,
  FlashyButtonIcon,
  FreeButtonIcon,
  GothicButtonIcon,
  HandwritingButtonIcon,
  HeadlineButtonIcon,
  PosterButtonIcon,
  PptButtonIcon,
  RetroButtonIcon,
  RoundButtonIcon,
  SimpleButtonIcon,
  StrongButtonIcon,
  ThumbnailButtonIcon,
  TitleButtonIcon,
  UniqueButtonIcon,
} from '../icons';

export interface FilterItem {
  id: string;
  label: string;
  Icon?: React.FC<SVGProps<SVGSVGElement>>;
}

export interface FilterSection {
  sectionId: string;
  title: string;
  items: FilterItem[];
}

export const USAGE_SECTIONS: FilterSection[] = [
  {
    sectionId: 'document',
    title: '문서',
    items: [
      { id: 'title', label: '제목용', Icon: TitleButtonIcon },
      { id: 'body', label: '본문용', Icon: BodyButtonIcon },
      { id: 'emphasis', label: '강조용', Icon: EmphasisButtonIcon },
    ],
  },
  {
    sectionId: 'video',
    title: '영상',
    items: [
      { id: 'thumbnail', label: '썸네일용', Icon: ThumbnailButtonIcon },
      { id: 'caption', label: '자막용', Icon: CaptionButtonIcon },
    ],
  },
  {
    sectionId: 'design',
    title: '디자인',
    items: [
      { id: 'ppt', label: 'PPT용', Icon: PptButtonIcon },
      { id: 'cardnews', label: '카드뉴스용', Icon: CardNewsButtonIcon },
      { id: 'poster', label: '포스터용', Icon: PosterButtonIcon },
    ],
  },
];

export const SHAPE_ITEMS: FilterItem[] = [
  { id: 'batang', label: '바탕', Icon: BatangButtonIcon },
  { id: 'dotum', label: '돋움', Icon: DotumButtonIcon },
  { id: 'gothic', label: '굴림', Icon: GothicButtonIcon },
  { id: 'headline', label: '장식체', Icon: HeadlineButtonIcon },
  { id: 'handwriting', label: '손글씨', Icon: HandwritingButtonIcon },
];

export const MOOD_ITEMS: FilterItem[] = [
  { id: 'round', label: '둥근', Icon: RoundButtonIcon },
  { id: 'angular', label: '각진', Icon: AngularButtonIcon },
  { id: 'simple', label: '심플한', Icon: SimpleButtonIcon },
  { id: 'bold', label: '두꺼운', Icon: BoldButtonIcon },
  { id: 'flashy', label: '화려한', Icon: FlashyButtonIcon },
  { id: 'cute', label: '귀여운', Icon: CuteButtonIcon },
  { id: 'unique', label: '유쾌한', Icon: UniqueButtonIcon },
  { id: 'classic', label: '클래식', Icon: ClassicButtonIcon },
  { id: 'retro', label: '레트로', Icon: RetroButtonIcon },
  { id: 'free', label: '자유로운', Icon: FreeButtonIcon },
  { id: 'emotional', label: '감성적인', Icon: EmotionalButtonIcon },
  { id: 'distinct', label: '독특한', Icon: DistinctButtonIcon },
  { id: 'strong', label: '강렬한', Icon: StrongButtonIcon },
];

export const LICENSE_ITEMS: FilterItem[] = [
  { id: 'print', label: '인쇄' },
  { id: 'web', label: '웹사이트' },
  { id: 'package', label: '포장지' },
  { id: 'video', label: '영상' },
  { id: 'embedding', label: '임베딩' },
  { id: 'brand', label: 'BI/CI' },
  { id: 'ofl', label: 'OFL' },
];
