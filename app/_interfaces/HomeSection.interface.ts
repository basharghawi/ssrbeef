interface Button {
  backgroundColor: string;
  link: string;
  titleAr: string;
  titleEn: string;
}

export interface HomeSection {
  descriptionAr: string;
  descriptionEn: string;
  imageUri: string;
  titleAr: string;
  titleEn: string;
  buttons: Button[];
}