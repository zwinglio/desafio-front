<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <div v-if="$fetchState.pending">
          <b-spinner
            label="Carregando treinos..."
            variant="danger"
            type="grow"
          ></b-spinner>
        </div>

        <div v-if="!$fetchState.pending">
          <h3>Selecione o seu nível!</h3>
          <div v-for="level in levels">
            <NuxtLink
              :to="{
                name: 'sheets-level',
                params: { level: level.name.toLowerCase() },
              }"
              class="btn btn btn-danger w-100 mt-3 py-3 font-weight-bold"
            >
              {{ level.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  data() {
    return {
      levels: [],
      response: [],
    };
  },
  async fetch() {
    this.response = await this.$axios.$get(
      "https://desafio.voceemforma.net/api/sheet_levels"
    );
    this.levels = this.response.sheetLevels;
  },
};
</script>
