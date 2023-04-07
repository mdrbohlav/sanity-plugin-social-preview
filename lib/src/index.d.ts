/// <reference types="react" />

declare interface BasePreviewProps {
  title: string
  url: string
  description?: string
  /**
   * Pass an image object for images hosted in Sanity;
   * or a full URL for external images
   */
  image?: SanityImage | string
}

declare interface BaseSanityDoc {
  _type: string
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
}

declare interface DocumentView<DocumentSchema = GenericSanityDoc> {
  documentId: string
  document: {
    displayed: DocumentSchema
    draft: DocumentSchema
    historical: DocumentSchema | null
    published: DocumentSchema | null
  }
}

declare interface GenericSanityDoc extends BaseSanityDoc {
  [key: string]: any
}

declare type PrepareFunction = (doc: GenericSanityDoc) => BasePreviewProps | undefined

declare interface SanityImage {
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
  }
  crop?: {
    _type: string
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot?: {
    _type: string
    height: number
    width: number
    x: number
    y: number
  }
}

export declare const SocialPreview: ({
  prepareData,
  google,
  twitter,
  linkedin,
  facebook,
}?: SocialPreviewProps) => ({ document }: DocumentView) => JSX.Element

declare interface SocialPreviewProps {
  /**
     * Function to determine how the SEO/social title, description, url and image are extracted from the document.
     *
     * Takes the current Sanity document and returns an object with BasePreviewProps.
     *
     * @example
     * ({ title, seo, body }) => ({
     title: seo.title || title,
     description: seo.description || toPlainText(body || []),
     siteUrl: 'https://example.com',
     image: seo.ogImage,
     })
     */
  prepareData?: PrepareFunction
  google?: PrepareFunction | false
  twitter?: PrepareFunction | false
  linkedin?: PrepareFunction | false
  facebook?: PrepareFunction | false
}

export declare function toPlainText(
  blocks: any[],
  opts?: {
    nonTextBehavior?: 'remove'
  },
): string

export declare function truncate(str: string, maxLength: number): string

export {}
