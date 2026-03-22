export interface iCreatedCourse {
  course_img: string;
  cover_img: string;
  preview_course: string;
  title: string;
  description: string;
  isPublished: boolean;
  price_dlr: number;
  price_shl: string;
}

export interface iUpdatedCourse {
  id: number;
  course_img?: string;
  cover_img?: string;
  preview_course: string;
  title: string;
  description: string;
  isPublished: boolean;
  price_dlr: number;
  price_shl: string;
}
