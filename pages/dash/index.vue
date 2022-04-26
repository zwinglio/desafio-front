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

        <hr />

        <table class="table table-borderless bg-light rounded">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nível</th>
              <th scope="col">Treino</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sheet in sheets">
              <th scope="row">{{ sheet.id }}</th>
              <td>{{ sheet.sheet_level.name }}</td>
              <td>{{ sheet.title }}</td>
              <td class="text-right">
                <NuxtLink
                  :to="{
                    name: 'dash-sheet-sheet',
                    params: {
                      sheet: sheet.id,
                    },
                  }"
                  class="btn btn-sm btn-info mt-2"
                >
                  <i class="bi bi-search"></i>
                </NuxtLink>
                <button
                  @click="destroySheet(sheet.id)"
                  class="btn btn-sm btn-danger mt-2"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
  methods: {
    destroySheet(id) {
      //alert user
      if (confirm("Deseja realmente excluir?")) {
        this.$axios
          .delete(`https://apidesafio.voceemforma.net/api/sheets/${id}`)
          .then((response) => {
            this.$nuxt.refresh();
          });
      }
    },
  },
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
