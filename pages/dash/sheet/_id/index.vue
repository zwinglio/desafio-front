<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-left align-items-center">
          <NuxtLink to="/dash" class="btn btn-secondary">
            <i class="bi bi-arrow-left"></i>
          </NuxtLink>
          <div class="">
            <h3 class="ml-3">
              {{ sheet.title }}
              / Semana {{ sheet.week }}
            </h3>
          </div>
        </div>

        <div v-if="$fetchState.pending">
          <b-spinner
            label="Carregando treinos..."
            variant="danger"
            type="grow"
            class="mt-3"
          ></b-spinner>
        </div>

        <div
          v-if="
            series.length == 0 && !$fetchState.pending && !$fetchState.error
          "
          class="mt-4"
        >
          Não encontramos nenhuma série nesse treino...
        </div>

        <div v-if="$fetchState.error" class="mt-4">
          Esse treino não existe...
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div v-for="serie in series">
          <div class="card mt-4">
            <div class="card-body">
              <div class="card-title">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="text-dark">
                      {{ serie.title }}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {{ serie.instructions }}<br />
                      Repetições: {{ serie.repetitions }}
                    </h6>
                  </div>
                  <div>
                    <NuxtLink
                      :to="{
                        name: 'dash-sheet-id-exercise-create',
                        params: { id: sheet.id, serie: serie },
                      }"
                      class="btn btn-primary mt-2"
                    >
                      <i class="bi bi-plus-lg"></i> Exercício
                    </NuxtLink>
                    <button
                      @click="destroySerie(sheet.id, serie.id)"
                      class="btn btn btn-outline-danger mt-2"
                    >
                      <i class="bi bi-trash3"></i> Serie
                    </button>
                  </div>
                </div>
              </div>
              <ul v-for="exercise in serie.exercises" class="text-dark">
                <li>
                  <div>
                    <p class="mb-0 text-uppercase font-weight-bold">
                      {{ exercise.title }}
                    </p>
                    <p v-if="exercise.instructions" class="m-0">
                      <strong>Obs:</strong> {{ exercise.instructions }}
                    </p>
                    <p v-if="exercise.repetitions" class="m-0">
                      <strong>Repetições:</strong> {{ exercise.repetitions }}
                    </p>
                  </div>
                  <div>
                    <NuxtLink
                      :to="{
                        name: 'dash-sheet-id-exercise-edit',
                        params: {
                          id: sheet.id,
                          exercise: exercise,
                          serie: serie,
                        },
                      }"
                      class="btn btn-sm btn-outline-primary"
                    >
                      <i class="bi bi-pencil-square"></i>
                    </NuxtLink>
                    <button
                      @click="destroyExercise(sheet.id, serie.id, exercise.id)"
                      class="btn btn-sm btn-outline-danger"
                    >
                      <i class="bi bi-trash3"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="!$fetchState.pending && !$fetchState.error">
          <NuxtLink
            :to="{
              name: 'dash-sheet-id-serie-create',
              params: {
                id: sheet.id,
                sheet: sheet,
              },
            }"
            class="btn btn-lg py-3 btn-primary w-100 my-3"
          >
            <i class="bi bi-plus-lg"></i> Série
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashPageSeries",
  data() {
    return {
      series: [],
      sheet: {},
      noSheet: false,
    };
  },
  async fetch() {
    const sheet = await this.$axios.get(`/sheets/${this.$route.params.id}`);

    this.series = sheet.data.sheet.series;
    this.sheet = sheet.data.sheet;
  },
  methods: {
    destroyExercise(sheet, serie, exercise) {
      if (confirm("Deseja realmente excluir o exercício?")) {
        this.$axios
          .delete(`/sheets/${sheet}/series/${serie}/exercises/${exercise}`)
          .then(() => {
            this.$nuxt.refresh();
          });
      }
    },
    destroySerie(sheet, serie) {
      if (confirm("Deseja realmente excluir a série?")) {
        this.$axios.delete(`/sheets/${sheet}/series/${serie}`).then(() => {
          this.$nuxt.refresh();
        });
      }
    },
  },
};
</script>

<style></style>
