// Purges the entire Cloudflare cache for the site's zone.
// Runs at the end of the production build so a fresh publish is never
// masked by stale CDN copies (this bit us with the hero video swap).
// Requires CF_API_TOKEN (Zone > Cache Purge permission) and CF_ZONE_ID.

async function purge() {
  const token = process.env.CF_API_TOKEN;
  const zoneId = process.env.CF_ZONE_ID;

  if (!token || !zoneId) {
    console.warn(
      "purge-cloudflare: CF_API_TOKEN or CF_ZONE_ID not set — skipping cache purge."
    );
    return;
  }

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ purge_everything: true }),
    }
  );

  const data = await res.json();
  if (!data.success) {
    throw new Error(
      `Cloudflare purge failed: ${JSON.stringify(data.errors || data)}`
    );
  }
  console.log("purge-cloudflare: Cloudflare cache purged successfully.");
}

purge().catch((err) => {
  // Don't fail the whole build over a purge hiccup — warn loudly instead.
  console.error("purge-cloudflare: WARNING —", err.message);
});
