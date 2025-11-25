import { useState } from 'react';
import type { FC, SVGProps } from 'react';

import Accordion from '@/shared/components/accordion/accordion';
import AllowedRangeChip from '@/shared/components/chip/allowed-range-chip';
import FilterSection from '@/shared/components/filter-section/filter-section';
import TitleChip from '@/shared/components/chip/title-chip';
import {
  TitleButtonIcon,
  BodyButtonIcon,
  CaptionButtonIcon,
  ThumbnailButtonIcon,
  PptButtonIcon,
  CardNewsButtonIcon,
  PosterButtonIcon,
  FilterIcon,
  ResetIcon,
  EmphasisButtonIcon,
  BatangButtonIcon,
  DotumButtonIcon,
  GothicButtonIcon,
  HandwritingButtonIcon,
  HeadlineButtonIcon,
  RoundButtonIcon,
  AngularButtonIcon,
  SimpleButtonIcon,
  BoldButtonIcon,
  FlashyButtonIcon,
  CuteButtonIcon,
  ClassicButtonIcon,
  RetroButtonIcon,
  FreeButtonIcon,
  EmotionalButtonIcon,
  UniqueButtonIcon,
  StrongButtonIcon,
} from '@/shared/icons';

import * as styles from './side-panel.css';

const INITIAL_FILTERS = {
  title: false,
  body: false,
  emphasis: false,
  thumbnail: false,
  caption: false,
  ppt: false,
  cardNews: false,
  poster: false,
  batang: false,
  dotum: false,
  gulim: false,
  decorative: false,
  handwriting: false,
  round: false,
  angular: false,
  simple: false,
  thick: false,
  flashy: false,
  cute: false,
  cheerful: false,
  classic: false,
  retro: false,
  free: false,
  emotional: false,
  unique: false,
  strong: false,
  print: false,
  website: false,
  package: false,
  video: false,
  embedding: false,
  biCi: false,
  ofl: false,
};

type FilterKey = keyof typeof INITIAL_FILTERS;
type Filters = Record<FilterKey, boolean>;

type TitleChipConfig = {
  key: FilterKey;
  label: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const PURPOSE_FILTER_GROUPS: Array<{
  subtitle: string;
  chips: TitleChipConfig[];
}> = [
  {
    subtitle: '문서',
    chips: [
      { key: 'title', label: '제목용', Icon: TitleButtonIcon },
      { key: 'body', label: '본문용', Icon: BodyButtonIcon },
      { key: 'emphasis', label: '장식용', Icon: EmphasisButtonIcon },
    ],
  },
  {
    subtitle: '영상',
    chips: [
      { key: 'thumbnail', label: '썸네일용', Icon: ThumbnailButtonIcon },
      { key: 'caption', label: '자막용', Icon: CaptionButtonIcon },
    ],
  },
  {
    subtitle: '디자인',
    chips: [
      { key: 'ppt', label: 'PPT용', Icon: PptButtonIcon },
      { key: 'cardNews', label: '카드뉴스용', Icon: CardNewsButtonIcon },
      { key: 'poster', label: '포스터용', Icon: PosterButtonIcon },
    ],
  },
];

const SHAPE_FILTERS: TitleChipConfig[] = [
  { key: 'batang', label: '바탕', Icon: BatangButtonIcon },
  { key: 'dotum', label: '돋움', Icon: DotumButtonIcon },
  { key: 'gulim', label: '굴림', Icon: GothicButtonIcon },
  { key: 'decorative', label: '장식체', Icon: HeadlineButtonIcon },
  { key: 'handwriting', label: '손글씨', Icon: HandwritingButtonIcon },
];

const MOOD_FILTERS: TitleChipConfig[] = [
  { key: 'round', label: '둥근', Icon: RoundButtonIcon },
  { key: 'angular', label: '각진', Icon: AngularButtonIcon },
  { key: 'simple', label: '심플한', Icon: SimpleButtonIcon },
  { key: 'thick', label: '두꺼운', Icon: BoldButtonIcon },
  { key: 'flashy', label: '화려한', Icon: FlashyButtonIcon },
  { key: 'cute', label: '귀여운', Icon: CuteButtonIcon },
  { key: 'cheerful', label: '유쾌한', Icon: EmotionalButtonIcon },
  { key: 'classic', label: '클래식', Icon: ClassicButtonIcon },
  { key: 'retro', label: '레트로', Icon: RetroButtonIcon },
  { key: 'free', label: '자유로운', Icon: FreeButtonIcon },
  { key: 'emotional', label: '감성적인', Icon: EmotionalButtonIcon },
  { key: 'unique', label: '독특한', Icon: UniqueButtonIcon },
  { key: 'strong', label: '강렬한', Icon: StrongButtonIcon },
];

const ALLOWED_RANGE_FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: 'print', label: '인쇄' },
  { key: 'website', label: '웹사이트' },
  { key: 'package', label: '포장지' },
  { key: 'video', label: '영상' },
  { key: 'embedding', label: '임베딩' },
  { key: 'biCi', label: 'BI/CI' },
  { key: 'ofl', label: 'OFL' },
];

const SidePanel = () => {
  const [filters, setFilters] = useState<Filters>({ ...INITIAL_FILTERS });

  const toggleFilter = (key: FilterKey) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleReset = () => {
    setFilters({ ...INITIAL_FILTERS });
  };

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className={styles.filterLabel}>
          <FilterIcon className={styles.filterIcon} />
          <span className={styles.filterText}>필터</span>
        </div>
        <button
          type='button'
          className={styles.resetButton}
          onClick={handleReset}
          aria-label='필터 초기화'
        >
          <span className={styles.resetText}>초기화</span>
          <ResetIcon className={styles.resetIcon} />
        </button>
      </header>
      <div className={styles.content}>
        <Accordion>
          <Accordion.Container>
            <Accordion.Header subtitle='용도' />
            <Accordion.Panel>
              {PURPOSE_FILTER_GROUPS.map(({ subtitle, chips }) => (
                <FilterSection key={subtitle} type='title' subtitle={subtitle}>
                  {chips.map(({ key, label, Icon }) => (
                    <TitleChip
                      key={key}
                      isSelected={filters[key]}
                      Icon={Icon}
                      onClick={() => toggleFilter(key)}
                      label={label}
                    />
                  ))}
                </FilterSection>
              ))}
            </Accordion.Panel>
          </Accordion.Container>
        </Accordion>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='형태' />
              <Accordion.Panel>
                <FilterSection type='title'>
                  {SHAPE_FILTERS.map(({ key, label, Icon }) => (
                    <TitleChip
                      key={key}
                      isSelected={filters[key]}
                      Icon={Icon}
                      onClick={() => toggleFilter(key)}
                      label={label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='분위기' />
              <Accordion.Panel>
                <FilterSection type='title'>
                  {MOOD_FILTERS.map(({ key, label, Icon }) => (
                    <TitleChip
                      key={key}
                      isSelected={filters[key]}
                      Icon={Icon}
                      onClick={() => toggleFilter(key)}
                      label={label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='허용범위' />
              <Accordion.Panel>
                <FilterSection type='range'>
                  {ALLOWED_RANGE_FILTERS.map(({ key, label }) => (
                    <AllowedRangeChip
                      key={key}
                      isSelected={filters[key]}
                      onClick={() => toggleFilter(key)}
                      label={label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;
