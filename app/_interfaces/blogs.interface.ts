export interface BlogPost {
  id: string;
  titleEn: string;
  titleAr: string;
  blogTag: string;
  blogImage: string;
  descriptionEn: string;
  descriptionAr: string;
  createdOn: string; // You may use Date if you plan to parse it into a Date object
  createdBy: string;
  createByImage: string;
  createByJob: string;
}