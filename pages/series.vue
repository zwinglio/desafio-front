<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <p>
          Você está vendo:<br />
          <span class="small">
            {{ sheet.title }} | {{ sheet.place }} |
            {{ sheet.sheet_level.name }}
          </span>
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="alert alert-info">
          <p class="font-weight-bold">Instruções:</p>
          {{ sheet.instructions }}
        </div>
      </div>
    </div>
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

        <div v-for="serie in series">
          <div class="card mt-4">
            <div class="card-body">
              <div class="card-title">
                <h5 class="text-dark">
                  {{ serie.title }}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ serie.instructions }}<br />
                  Repetições: {{ serie.repetitions }}
                </h6>
              </div>
              <ul v-for="exercise in serie.exercises" class="text-dark">
                <li>
                  <p class="mb-0 text-uppercase font-weight-bold">
                    {{ exercise.title }}
                  </p>
                  <p v-if="exercise.instructions" class="m-0">
                    <strong>Obs:</strong> {{ exercise.instructions }}
                  </p>
                  <p v-if="exercise.repetitions" class="m-0">
                    <strong>Repetições:</strong> {{ exercise.repetitions }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
  name: "SeriesPage",
  transition: "fade",
  data() {
    return {
      response: [],
      sheet: this.$route.params.sheet,
      series: [],
    };
  },
  async fetch() {
    this.response = await this.$axios.$get(
      "https://desafio.voceemforma.net/api/series"
    );
    this.series = this.response.data.filter(
      (series) => series.sheet.id === this.$route.params.sheet.id
    );
  },
};
</script>

<style></style>
