<template>
  <div class="flex flex-wrap">
    <home-card class="m-4" v-for="h in houses" :key="h.objectID" :home="h"></home-card>
  </div>
</template>

<script>
import homes from "@/assets/mock/homes.js";
import HomeCard from "@/components/HomeCard";

export default {
  components: {
    HomeCard
  },
  head() {
    return {
      title: "Home",
      meta: [
        {
          name: "description",
          content: "This is a homepage",
          hid: "description"
        }
      ]
    };
  },
  data() {
    return {
      houses: homes.slice(0, 3)
    };
  }
};
</script>

<style></style>
