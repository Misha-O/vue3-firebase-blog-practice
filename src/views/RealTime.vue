<template>
    <h1>RealTime</h1>
    <div v-for="post in posts" :key="post.id"></div>
    <div>{{ post.title }}</div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
export default {
    setup() {
        const posts = ref([]);

        projectFirestore
            .collection("posts")
            .orderBy("createdAt", "desc")
            .onSnapshot(snap => {
                console.log("snapshot: ", snap);
                let docs = snap.docs.map(doc => {
                    return { ...doc.data, id: doc.id };
                });
                console.log("documents: ", docs);
                posts.value = docs;
            });

        return { posts };
    },
};
</script>

<style></style>
