<template>
  <div class="flex flex-row items-start">
    <img :src="review.reviewer.image" alt="image" class="mr-4" />
    <div>
      <p>{{ review.reviewer.name }}</p>
      <p class="text-xs text-gray-500">{{ new Date(review.date).toDateString() }}</p>
      <p>{{ review.comment }}</p>
      <p>{{ review.rating }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
</script>
