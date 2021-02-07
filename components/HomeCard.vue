<template>
  <nuxt-link :to="`/home/${home.objectID}`">
    <div>
      <img class="w-64" :src="home.images[0]" alt="home" />
      <h1>{{ home.title }}</h1>
      <p>{{ home.location.address }} {{ home.location.city }} {{ home.location.state }}</p>
      <p>{{ home.guests }} guests</p>
      <p>{{ home.pricePerNight }} / night</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    home: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
