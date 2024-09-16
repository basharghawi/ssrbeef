export interface BlogSection {
  contentAr: string;
  contentEn: string;
  order: number;
  blogSectionImages: string[];
}

export interface BlogPayload {
  titleEn: string;
  titleAr: string;
  createdBy: string;
  createdOn: string;
  id: string;
  enabled: boolean;
  descriptionEn: string;
  descriptionAr: string;
  blogImage: string;
  blogTag: string;
  blogSections: BlogSection[];
}
