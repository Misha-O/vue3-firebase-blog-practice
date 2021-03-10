<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";

// component imports
import SinglePost from "@/components/SinglePost.vue";

export default {
    props: {
        posts: {
            type: Object,
            required: true,
        },
    },
    components: { SinglePost },
    setup() {},
};
</script>

<style></style>
