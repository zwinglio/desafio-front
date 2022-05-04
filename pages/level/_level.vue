<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- <h3>Lista de treinos</h3>
        <h4>{{ level }}</h4>
        <hr /> -->

        <h3>Treinos por Semana</h3>
        <h4>{{ this.$route.params.level }}</h4>
        <hr />

        <!-- for every week a card -->
        <div v-for="(week, index) in weeks" class="card text-dark mt-4">
          <div class="card-header">
            <h4>Semana 0{{ index + 1 }}</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <ul class="list-group">
                  <li
                    v-for="sheet in week.sheets"
                    :key="sheet.id"
                    class="list-group-item d-flex align-items-center"
                  >
                    <div>
                      <b-badge variant="danger">{{ sheet.place }}</b-badge>
                      <br />
                      <p class="m-0">{{ sheet.title }}</p>
                    </div>
                    <div class="ml-auto">
                      <NuxtLink
                        :to="{
                          name: 'sheet-sheet',
                          params: {
                            sheet: sheet.id,
                          },
                        }"
                        class="btn btn-lg btn-outline-danger btn-sm h-100"
                      >
                        <i class="bi bi-caret-right-fill"></i>
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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

        <div v-if="sheets.length == 0 && !$fetchState.pending">
          Não encontrei os treinos 😱
        </div>

        <!-- <div v-for="sheet in sheets">
          <div class="card mt-4">
            <div class="card-body">
              <div class="card-title">
                <div>
                  <h5 class="text-dark">{{ sheet.title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ sheet.place }} - {{ sheet.week }}ª semana
                  </h6>
                </div>
                <div class="text-right">
                  <NuxtLink
                    :to="{
                      name: 'sheet-sheet',
                      params: {
                        sheet: sheet.id,
                      },
                    }"
                    class="btn btn-sm btn-danger py-2 mt-2 w-100"
                  >
                    Ver treino >>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <NuxtLink
          class="btn btn-secondary w-100 mt-5 py-3"
          :to="{ name: 'index' }"
        >
          👈 Voltar
        </NuxtLink>
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
      level: "",
      response: [],
      sheets: [],
      sheetsByWeek: [],
      weeks: [],
    };
  },
  async fetch() {
    // get the sheets
    const response = await this.$axios.get("/sheets", {
      params: {
        sheet_level: this.$route.params.level,
      },
    });

    this.response = response.data;
    this.sheets = response.data.data;

    // get the sheets by week
    this.sheetsByWeek = this.sheets.reduce((acc, sheet) => {
      const week = sheet.week;
      if (!acc[week - 1]) {
        acc[week - 1] = [];
      }
      acc[week - 1].push(sheet);
      return acc;
    }, []);

    // aggregate per week
    this.weeks = this.sheetsByWeek.map((week, index) => {
      return {
        week: index + 1,
        sheets: week,
        series: week.reduce((acc, sheet) => {
          sheet.series.forEach((serie) => {
            if (!acc[serie.id]) {
              acc[serie.id] = serie;
            }
          });
          return acc;
        }, {}),
      };
    });
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
