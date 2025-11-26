import type { FilterKey, Filters } from '@/shared/constants/filter-keys';
import type {
  FontLicense,
  FontMood,
  FontPurpose,
  FontShape,
} from '@/shared/apis/types/font';

const mapPurposeFilter = (filterKey: FilterKey): FontPurpose | null => {
  const purposeMap: Record<string, FontPurpose> = {
    title: 'DOCUMENT_TITLE',
    body: 'DOCUMENT_BODY',
    emphasis: 'DOCUMENT_DECORATIVE',
    thumbnail: 'VIDEO_THUMBNAIL',
    caption: 'VIDEO_SUBTITLE',
    ppt: 'DESIGN_PPT',
    cardNews: 'DESIGN_CARD_NEWS',
    poster: 'DESIGN_POSTER',
  };
  return purposeMap[filterKey] || null;
};

const mapShapeFilter = (filterKey: FilterKey): FontShape | null => {
  const shapeMap: Record<string, FontShape> = {
    batang: 'BATANG',
    dotum: 'DOTUM',
    gothic: 'GULIM',
    headline: 'DECORATIVE',
    handwriting: 'HANDWRITING',
  };
  return shapeMap[filterKey] || null;
};

const mapMoodFilter = (filterKey: FilterKey): FontMood | null => {
  const moodMap: Record<string, FontMood> = {
    round: 'ROUND',
    angular: 'ANGULAR',
    simple: 'SIMPLE',
    bold: 'THICK',
    flashy: 'FANCY',
    cute: 'CUTE',
    unique: 'CHEERFUL',
    classic: 'CLASSIC',
    retro: 'RETRO',
    free: 'FREE',
    emotional: 'EMOTIONAL',
    distinct: 'UNIQUE',
    strong: 'STRONG',
  };
  return moodMap[filterKey] || null;
};

const mapLicenseFilter = (filterKey: FilterKey): FontLicense | null => {
  const licenseMap: Record<string, FontLicense> = {
    print: 'PRINT',
    web: 'WEB',
    package: 'PACKAGE',
    video: 'VIDEO',
    embedding: 'EMBEDDING',
    brand: 'BI_CI',
    ofl: 'OFL',
  };
  return licenseMap[filterKey] || null;
};

export const convertFiltersToApiParams = (filters: Filters) => {
  const purposes: FontPurpose[] = [];
  const shapes: FontShape[] = [];
  const moods: FontMood[] = [];
  const licenses: FontLicense[] = [];

  Object.entries(filters).forEach(([key, isSelected]) => {
    if (!isSelected) return;

    const filterKey = key as FilterKey;
    const purpose = mapPurposeFilter(filterKey);
    const shape = mapShapeFilter(filterKey);
    const mood = mapMoodFilter(filterKey);
    const license = mapLicenseFilter(filterKey);

    if (purpose) purposes.push(purpose);
    if (shape) shapes.push(shape);
    if (mood) moods.push(mood);
    if (license) licenses.push(license);
  });

  return {
    purpose: purposes.length > 0 ? purposes : undefined,
    shape: shapes.length > 0 ? shapes : undefined,
    mood: moods.length > 0 ? moods : undefined,
    license: licenses.length > 0 ? licenses : undefined,
  };
};
