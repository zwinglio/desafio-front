<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-left align-items-center">
          <NuxtLink to="/dash" class="btn btn-secondary">Voltar</NuxtLink>
          <h3 class="ml-3">{{ sheet.title }}</h3>
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
                        name: 'dash-sheet-exercise-create',
                        params: { serie: serie },
                      }"
                      class="btn btn-primary mt-2"
                    >
                      Adicionar Exercício
                    </NuxtLink>
                    <button
                      @click="destroySerie(serie.id)"
                      class="btn btn-sm btn-outline-danger mt-2"
                    >
                      Deletar Serie
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
                        name: 'dash-sheet-exercise-edit',
                        params: { exercise: exercise },
                      }"
                      class="btn btn-sm btn-outline-primary"
                    >
                      Editar
                    </NuxtLink>
                    <button
                      @click="destroyExercise(exercise.id)"
                      class="btn btn-sm btn-outline-danger"
                    >
                      Excluir
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
              name: 'dash-sheet-serie-create',
              params: {
                sheet: sheet,
              },
            }"
            class="btn btn-lg btn-primary w-100 my-3"
          >
            Adicionar Série
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
    const series = await this.$axios.get(
      `https://apidesafio.voceemforma.net/api/series?sheet_id=${this.$route.params.sheet}`
    );

    const sheet = await this.$axios.get(
      `https://apidesafio.voceemforma.net/api/sheets/${this.$route.params.sheet}`
    );

    this.series = series.data.data;
    this.sheet = sheet.data.sheet;
  },
  methods: {
    destroyExercise(exercise) {
      if (confirm("Deseja realmente excluir o exercício?")) {
        this.$axios
          .delete(
            `https://apidesafio.voceemforma.net/api/exercises/${exercise}`
          )
          .then(() => {
            this.$nuxt.refresh();
          });
      }
    },
    destroySerie(serie) {
      if (confirm("Deseja realmente excluir a série?")) {
        this.$axios
          .delete(`https://apidesafio.voceemforma.net/api/series/${serie}`)
          .then(() => {
            this.$nuxt.refresh();
          });
      }
    },
  },
};
</script>

<style></style>
