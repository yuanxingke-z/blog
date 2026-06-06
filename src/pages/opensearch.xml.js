import { SITE } from "../site.config";

export async function GET() {
  const searchTemplate = `${SITE.url}/search/?q={searchTerms}`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${SITE.title}</ShortName>
  <Description>${SITE.description}</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Url type="text/html" method="get" template="${searchTemplate}" />
</OpenSearchDescription>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
    },
  });
}
