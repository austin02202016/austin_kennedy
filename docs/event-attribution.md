# Event attribution

Sapience loads site-wide through the first-party `/_a/` proxy, using public
site key `austnkennedy`. Register `austnkennedy.com` and `www.austnkennedy.com`
in the intended Sapience workspace before deploying. Readable identifiers must
be enabled on the site to see signup emails in Sapience.

The $10K event calls `sapienceSignup` only after the API confirms a successful
registration. The email identifies the visitor; `metadata.event` is
`10k-a-month-2026-09-29`. Validation errors and duplicate registrations do not
emit conversions. A slow SDK is handled by an in-memory queue. Blocked tracking
does not prevent registration; attribution is best effort.

## Links to distribute

Use these tagged links instead of the bare event URL. Apps and email clients
can omit referrers; UTM tags preserve the intended source of each shared link.

- Instagram bio: https://www.austnkennedy.com/how-to-make-10k-a-month-in-college?utm_source=instagram&utm_medium=social&utm_campaign=college_10k_20260929&utm_content=bio
- Instagram DM: https://www.austnkennedy.com/how-to-make-10k-a-month-in-college?utm_source=instagram&utm_medium=social&utm_campaign=college_10k_20260929&utm_content=dm
- Cold email: https://www.austnkennedy.com/how-to-make-10k-a-month-in-college?utm_source=cold_email&utm_medium=email&utm_campaign=college_10k_20260929&utm_content=outreach_1

Change `utm_content` for each placement or email variant. Never put recipient
emails or names into URLs. Tags describe the distributed link, not a verified
app identity: someone can forward an Instagram-tagged link elsewhere.

## Verification after authorized deployment

Open a tagged link on the production domain. Confirm `/_a/a.js` and `/_a/e`
return 200 and `_gv` is set on `austnkennedy.com` with HttpOnly. Check Sapience
for the landing page, source/medium, campaign, and available web referrer.
After a real successful registration, confirm the identified signup with the
event metadata. Local and preview hosts are not registered production origins.

Historical visits and the existing registrations cannot be backfilled with
sources that were never captured. Anonymous visitors acquire an email only
when they successfully register.
