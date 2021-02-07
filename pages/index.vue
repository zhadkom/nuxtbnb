<template>
  <div class="flex flex-wrap">
    <home-card v-for="h in houses" :key="h.objectID" class="m-4" :home="h"></home-card>
  </div>
</template>

<script>
import homes from "@/assets/mock/homes.js";
import HomeCard from "@/components/HomeCard";

export default {
  components: {
    HomeCard
  },
  data() {
    return {
      houses: homes.slice(0, 3)
    };
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
  }
};
</script>

<style></style>
