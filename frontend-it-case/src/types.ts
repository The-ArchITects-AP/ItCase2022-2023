export interface IFrame {
  nid: string;
  field_report_category: string;
  title: string;
  field_date: string;
  field_type_of_report: string;
  field_thumbnail: string;
  field_iframe: string;
}  

export interface Category {
  nid: string;
  title: string; 
  field_category_image: string;
}

export interface UserData {
  clientPrincipal: ClientPrincipal;
}

interface ClientPrincipal {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}