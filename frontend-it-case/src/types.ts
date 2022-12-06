export interface Data {
  id: string,
  title: string,
  img: string
}

export interface IFrame {
  nid: string;
  field_report_category: string;
  title: string;
  field_date: Date;
  field_type_of_report: string;
  field_iframe: string;
  field_width: string;
  field_height: string;
}  

export interface Category {
  nid: string;
  title: string; 
  field_category_image: string;
}
