<template>
  <section>
    <h1 class="text-2xl text-white text-center font-bold uppercase">
      {{ character.name }}
    </h1>
    <img :src="character.image" :alt="character.name" />
    <div>
      <p class="text-white">{{ character.status }}</p>
      <p class="text-white">{{ character.type }}</p>
      <p class="text-white">{{ character.species }}</p>
      <p class="text-white">{{ character.gender }}</p>
      <p class="text-white">Origin: {{ character.origin.name }}</p>
    </div>
  </section>
</template>

<script>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import charactersService from "../services/CharactersService.js";

const getCharacter = (id, $character) => {
  charactersService
    .getCharacterInfo(id)
    .then(({ data }) => ($character.value = data));
};

export default {
  name: "Character",
  setup() {
    let character = ref({});

    const route = useRoute();

    getCharacter(route.params.id, character);

    // You could use computed property which re-evaluates on route name updates
    // const routeName = computed(() => route.name);

    // You can watch the property for triggering some other action on change
    watch(
      () => route.name,
      () => {
        // Do something here...
        getCharacter(route.params.id);
        // Optionally you can set immediate: true config for the watcher to run on init
        //}, { immediate: true });
      }
    );

    return { character, route };
  },
};
</script>
