export default function (context, inject) {
  const appID = context.$config.ALGOLIA_APP_ID;
  const apiKey = context.$config.ALGOLIA_API_KEY;

  const headers = {
    "X-Algolia-API-Key": apiKey,
    "X-Algolia-Application-Id": appID
  };

  inject("dataApi", { getHome, getReviews });

  async function getHome(homeID) {
    //todo use axios instead of fetch
    const response = await fetch(`https://${appID}-dsn.algolia.net/1/indexes/homes/${homeID}`, { headers });

    return await response.json();
  }

  async function getReviews(homeID) {
    const response = await fetch(`https://${appID}-dsn.algolia.net/1/indexes/reviews/query`, {
      headers,
      method: "POST",
      body: JSON.stringify({ filters: `homeId:${homeID}` })
    });
    return await response.json();
  }
}
