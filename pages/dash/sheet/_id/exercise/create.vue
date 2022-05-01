<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-between">
          <h2 class="m-0">Criar novo exercício 💪</h2>
        </div>
        <form class="mt-4">
          <div class="form-group">
            <label for="title">Título</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="title"
              id="title"
              v-model="exercise.title"
            />
          </div>

          <div class="form-group">
            <label for="instructions">Instruções</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="instructions"
              id="instructions"
              v-model="exercise.instructions"
            />
          </div>

          <div class="form-group">
            <label for="repetitions">Repetições</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="repetitions"
              id="repetitions"
              v-model="exercise.repetitions"
            />
          </div>

          <div class="form-group">
            <label for="sheet_id">Nível</label>
            <select
              class="form-control form-control-lg"
              name="sheet_id"
              id="sheet_id"
              disabled
              v-model="exercise.serie_id"
            >
              <option :value="serie.id">
                {{ serie.title }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            @click.prevent="createExercise"
            class="btn btn-success btn-lg my-3 w-100"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseCreatePage",
  transition: "fade",
  data() {
    return {
      exercise: {
        title: "",
        instructions: "",
        repetitions: "",
        serie_id: this.$route.params.serie.id,
      },
      serie: this.$route.params.serie,
    };
  },
  methods: {
    createExercise() {
      this.$axios
        .post(
          `/sheets/${this.$route.params.id}/series/${this.serie.id}/exercises  `,
          this.exercise
        )
        .then((response) => {
          this.$router.push({
            name: "dash-sheet-id",
            params: {
              id: this.$route.params.id,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
