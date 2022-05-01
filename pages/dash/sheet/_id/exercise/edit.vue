<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-between align-items-center">
          <!-- <NuxtLink :to="'/dash/sheet/' + sheet.id" class="btn btn-secondary">
            <i class="bi bi-arrow-left"></i>
          </NuxtLink> -->
          <h2 class="m-0">Editar Exercício 💪</h2>
          <p class="small">{{ exercise.title }}</p>
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
            <label for="sheet_id">Série</label>
            <select
              class="form-control form-control-lg"
              name="sheet_id"
              id="sheet_id"
              disabled
              v-model="exercise.serie_id"
            >
              <option :value="exercise.serie_id">
                {{ serie.title }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            @click.prevent="updateExercise"
            class="btn btn-success btn-lg my-3 w-100"
          >
            Atualizar exercício
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseUpdatePage",
  transition: "fade",
  data() {
    return {
      exercise: {
        id: this.$route.params.exercise.id,
        title: this.$route.params.exercise.title,
        instructions: this.$route.params.exercise.instructions,
        repetitions: this.$route.params.exercise.repetitions,
        serie_id: this.$route.params.serie.id,
      },
      serie: {
        id: this.$route.params.serie.id,
        title: this.$route.params.serie.title,
      },
    };
  },
  methods: {
    updateExercise() {
      this.$axios
        .post(
          `sheets/${this.$route.params.id}/series/${this.serie.id}/exercises/${this.exercise.id}`,
          this.exercise,
          {
            params: {
              _method: "PUT",
            },
          }
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

      //   console.log("createSheet");
      // this.$store.dispatch("createSheet", {
      //   title: this.sheet.title,
      //   instructions: this.sheet.instructions,
      //   place: this.sheet.place,
      //   level: this.sheet.level,
      // });
    },
  },
};
</script>

<style></style>
