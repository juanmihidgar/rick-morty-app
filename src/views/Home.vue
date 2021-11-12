<template>
  <section class="home">
    <CharacterList :characterList="characterList" />
  </section>
</template>

<script>
import { ref } from "vue";
import charactersService from "../services/CharactersService.js";

import CharacterList from "@/components/CharacterList";

export default {
  name: "Home",
  setup() {
    let characterList = ref({});

    charactersService.get().then(({ data }) => {
      characterList.value = data.results;
    });

    return { characterList };
  },
  components: {
    CharacterList,
  },
};
</script>
