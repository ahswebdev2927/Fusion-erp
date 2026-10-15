FusionERPTraining.com - Oracle Fusion Financials Landing Page (FINAL)
=====================================================================
Upload: hosting File Manager -> public_html (or a sub-folder) -> Upload this zip -> right-click -> Extract -> delete the zip.
No PHP or database needed - works on any hosting.

Files:
  index.html           landing page (with OpenGraph tags, fbclid & UTM tracking)
  thank-you.html       shown after form submit (Google & Meta conversion page)
  privacy-policy.html  privacy policy (required by Meta Ads)
  robots.txt           crawler directives (disallows thank-you page indexing)
  sitemap.xml          XML sitemap for search engines

Already connected:
  - Form -> Google Sheet "FusionERP Landing Page Leads" + email alert to fusionerptraining@gmail.com (Apps Script)
  - Google Tag Manager GTM-T7RGWVZ2 on all 3 pages (head + body)
  - Parameter capture: gclid, fbclid, utm_source, utm_medium, utm_campaign, utm_term, page_url

dataLayer events for GTM triggers:
  lead_submitted (thank-you page) | form_submit_attempt | call_click | whatsapp_click | email_click

Meta Ads Setup:
  1. Base Pixel (PageView): Trigger on "All Pages" inside GTM (GTM-T7RGWVZ2).
  2. Conversion Tag (Lead): Trigger on custom event "lead_submitted" inside GTM.
  3. Domain verification: Replace YOUR_VERIFICATION_CODE in index.html with your Meta code.
