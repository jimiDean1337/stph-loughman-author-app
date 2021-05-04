export interface TemplateConfig {
  user?: TemplateConfigUserData;
  links?: TemplateConfigLink[];
}

export interface TemplateConfigUserData {
  name?: string;
  email?: string;
  extra?: any;
}

export interface TemplateConfigLink {
  name?: string;
  icon?: string;
  img?: {
    src?: string,
    alt?: string
  };
  href?: string;
}
