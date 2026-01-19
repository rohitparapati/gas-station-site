/**
 * seo.js
 * - Small helper utilities for basic SEO
 * - For now, we set the document title per page
 * - Later we can expand with meta tags / structured data
 */
const SITE_NAME = "Your Gas Station";

export function setPageTitle(pageTitle) {
  document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
}
