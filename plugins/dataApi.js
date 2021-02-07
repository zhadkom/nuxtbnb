export default function (context, inject) {
  const appID = context.$config.ALGOLIA_APP_ID;
  const apiKey = context.$config.ALGOLIA_API_KEY;

  inject("dataApi", { getHome });

  async function getHome(homeID) {
    //todo use axios instead of fetch
    const response = await fetch(`https://${appID}-dsn.algolia.net/1/indexes/homes/${homeID}`, {
      headers: {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appID
      }
    });

    return await response.json();
  }
}
