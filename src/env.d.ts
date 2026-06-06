/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_SRC?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BAIDU_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
