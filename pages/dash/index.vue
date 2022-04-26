<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-between">
          <h2 class="m-0">Lista de treinos</h2>
          <NuxtLink
            :to="{
              name: 'dash-sheet-create',
            }"
            class="btn btn-success"
          >
            <i class="bi bi-plus-lg"></i>
          </NuxtLink>
        </div>

        <div v-if="$fetchState.pending">
          <b-spinner
            label="Carregando treinos..."
            variant="danger"
            type="grow"
            class="mt-3"
          ></b-spinner>
        </div>
        <LazyDashSheetsTable :sheets="sheets" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashPage",
  transition: "fade",
  data() {
    return {
      sheets: [],
    };
  },
  async fetch() {
    this.response = await this.$axios.get(
      "https://apidesafio.voceemforma.net/api/sheets"
    );
    this.sheets = this.response.data.data;
  },
  methods: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
