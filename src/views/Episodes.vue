<template>
  <section>
    <ul>
      <li v-for="episode in episodesList" :key="episode.name">
        {{ episode.name }}
      </li>
    </ul>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import EpisodesService from "../services/EpisodesService.js";

export default {
  name: "Character",
  setup() {
    let episodesList = ref({});

    EpisodesService.get().then(
      ({ data }) => (episodesList.value = data.results)
    );

    onMounted(() => {
      console.log(episodesList);
    });

    return { episodesList };
  },
};
</script>
