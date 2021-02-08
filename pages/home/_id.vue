<template>
  <div class="py-8 px-16">
    <h1 class="text-3xl">{{ home.title }}</h1>
    <div class="flex flex-wrap my-6">
      <img v-for="image in home.images" :key="image" class="w-1/5 mr-2 mb-2" :src="image" :alt="home.title" />
    </div>
    <p>${{ home.pricePerNight }} / night</p>
    <p>{{ home.location.address }}</p>
    <p>{{ home.reviewValue }}</p>
    <p>{{ home.guests + " guests " + home.bedrooms + " rooms " + home.beds + " beds " + home.bathrooms + " bath" }}</p>
    <p class="text-sm text-gray-900 my-6">{{ home.description }}</p>
    <div class="w-1/2 my-6">
      <review v-for="review in reviews.hits" :key="review.objectID" :review="review" class="my-2 p-4" />
    </div>
    <div ref="map" style="width: 400px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $dataApi }) {
    const home = await $dataApi.getHome(params.id);
    const reviews = await $dataApi.getReviews(params.id);
    return {
      home,
      reviews
    };
  },
  // TODO ADD GOOGLE MAPS PLUGIN 0_0
  head() {
    return {
      title: this.home.title
    };
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  }
};
</script>
