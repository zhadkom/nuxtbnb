<template>
  <div class="py-8 px-16">
    <h1 class="text-3xl">{{ home.title }}</h1>
    <div class="flex flex-wrap my-6">
      <img class="w-1/5 mr-2 mb-2" v-for="image in home.images" :key="image" :src="image" :alt="home.title" />
    </div>
    <p>${{ home.pricePerNight }} / night</p>
    <p>{{ home.location.address }}</p>
    <p>{{ home.reviewValue }}</p>
    <p>{{ home.guests + " guests " + home.bedrooms + " rooms " + home.beds + " beds " + home.bathrooms + " bath" }}</p>
    <div ref="map" style="width: 400px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  // TODO ADD GOOGLE MAPS PLUGIN 0_0
  head() {
    return {
      title: this.home.title
    };
  },

  async asyncData({ params, $dataApi }) {
    const home = await $dataApi.getHome(params.id);
    return {
      home
    };
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  }
};
</script>
