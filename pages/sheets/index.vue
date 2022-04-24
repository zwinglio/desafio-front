<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Spínner -->
        <div class="text-center">
          <div v-if="$fetchState.pending">
            <b-spinner
              label="Carregando treinos..."
              variant="danger"
              type="grow"
            ></b-spinner>
          </div>
        </div>

        <!-- Conteúdo -->
        <div v-if="!$fetchState.pending">
          <h3>Lista de treinos</h3>
          <h4>{{ levelName }}</h4>
          <hr />

          <div v-for="sheet in sheets">
            <div class="card mt-4">
              <div class="card-body">
                <div class="card-title">
                  <h5 class="text-dark">{{ sheet.title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ sheet.place }}
                  </h6>
                  <div class="text-right">
                    <NuxtLink
                      :to="{
                        name: 'series',
                        params: {
                          sheet: sheet,
                        },
                      }"
                      class="btn btn-sm btn-danger"
                      >Ver treino >></NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink
            class="btn btn-secondary w-100 mt-3"
            :to="{ name: 'index' }"
          >
            Voltar
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SheetsPage",
  transition: "fade",
  data() {
    return {
      levelName: this.$route.params.levelName,
      response: [],
      sheets: [],
    };
  },
  async fetch() {
    this.response = await this.$axios.get(
      "https://desafio.voceemforma.net/api/sheets"
    );
    this.sheets = this.response.data.data.filter(
      (sheet) => sheet.sheet_level.id === this.$route.params.level
    );
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
