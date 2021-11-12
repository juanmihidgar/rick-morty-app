<template>
  <div>
    <h1 class="text-2xl text-white text-center font-bold uppercase">
      Rick & Morty Character list
    </h1>
    <ul class="flex flex-wrap gap-4 justify-center | mt-4 | p-4">
      <li
        class="
          bg-purple-200
          |
          rounded-lg
          |
          shadow-md
          |
          w-full
          sm:w-1/3
          lg:w-1/5
        "
        v-for="character in characterList"
        :key="`${character.name}_${character.id}`"
      >
        <router-link
          :to="{ name: 'character', params: { id: character.id } }"
          >{{ character.name }}</router-link
        >
        <div class="flex flex-col items-center gap-4 | p-5">
          <img class="w-32 h-32 | rounded-full" :src="character.image" />
          <div>{{ character.name }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";

export default {
  name: "HelloWorld",
  Setup(props) {
    onMounted(() => {
      console.log("Montado");

      console.log(props.characterList);
    });
  },
  props: {
    characterList: {
      type: Object,
      required: true,
    },
  },
};
</script>
