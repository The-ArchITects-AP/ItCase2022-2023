export interface Data {
  id: string,
  title: string,
  img: string
}

export interface IFrame {
  nid: string,
  field_categorie: string,
  title: string,
  field_date: string,
  field_iframe: string
}  

//onderstaande interfaces zijn van default return AllContent Drupal (Drupal view shows 'Entity')

export interface DrupalNode {
    nid?: (NidEntityOrVidEntity)[] | null;
    uuid?: (UuidEntityOrLangcodeEntityOrTitleEntity)[] | null;
    vid?: (NidEntityOrVidEntity)[] | null;
    langcode?: (UuidEntityOrLangcodeEntityOrTitleEntity)[] | null;
    type?: (TypeEntity)[] | null;
    revision_timestamp?: (RevisionTimestampEntityOrCreatedEntityOrChangedEntity)[] | null;
    revision_uid?: (RevisionUidEntityOrUidEntity)[] | null;
    revision_log?: (null)[] | null;
    status?: (StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity)[] | null;
    uid?: (RevisionUidEntityOrUidEntity)[] | null;
    title?: (UuidEntityOrLangcodeEntityOrTitleEntity)[] | null;
    created?: (RevisionTimestampEntityOrCreatedEntityOrChangedEntity)[] | null;
    changed?: (RevisionTimestampEntityOrCreatedEntityOrChangedEntity)[] | null;
    promote?: (StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity)[] | null;
    sticky?: (StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity)[] | null;
    default_langcode?: (StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity)[] | null;
    revision_translation_affected?: (StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity)[] | null;
    path?: (PathEntity)[] | null;
    body?: (null)[] | null;
    field_iframe?: (FieldIframeEntity)[] | null;
  }
  export interface NidEntityOrVidEntity {
    value: number;
  }
  export interface UuidEntityOrLangcodeEntityOrTitleEntity {
    value: string;
  }
  export interface TypeEntity {
    target_id: string;
    target_type: string;
    target_uuid: string;
  }
  export interface RevisionTimestampEntityOrCreatedEntityOrChangedEntity {
    value: string;
    format: string;
  }
  export interface RevisionUidEntityOrUidEntity {
    target_id: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }
  export interface StatusEntityOrPromoteEntityOrStickyEntityOrDefaultLangcodeEntityOrRevisionTranslationAffectedEntity {
    value: boolean;
  }
  export interface PathEntity {
    alias?: null;
    pid?: null;
    langcode: string;
  }
  export interface FieldIframeEntity {
    url: string;
    title: string;
    headerlevel: string;
    width: string;
    height: string;
    class: string;
    frameborder: string;
    scrolling: string;
    transparency: string;
    tokensupport: string;
    allowfullscreen: string;
  }
  