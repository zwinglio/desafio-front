<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-between">
          <h2 class="m-0">Criar nova série</h2>
        </div>
        <pre class="text-light mt-3">
            {{ serie }}
          </pre
        >
        <form class="mt-4">
          <div class="form-group">
            <label for="title">Título</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="title"
              id="title"
              v-model="serie.title"
            />
          </div>

          <div class="form-group">
            <label for="instructions">Instruções</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="instructions"
              id="instructions"
              v-model="serie.instructions"
            />
          </div>

          <div class="form-group">
            <label for="repetitions">Repetições</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="repetitions"
              id="repetitions"
              v-model="serie.repetitions"
            />
          </div>

          <div class="form-group">
            <label for="sheet_id">Nível</label>
            <select
              class="form-control form-control-lg"
              name="sheet_id"
              id="sheet_id"
              disabled
              v-model="serie.sheet_id"
            >
              <option :value="sheet.id">
                {{ sheet.title }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            @click.prevent="createSerie"
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
  name: "SerieCreatePage",
  transition: "fade",
  data() {
    return {
      serie: {
        title: "",
        instructions: "",
        repetitions: "",
        sheet_id: this.$route.params.sheet.id,
      },
      sheet: this.$route.params.sheet,
    };
  },
  methods: {
    createSerie() {
      this.$axios
        .post("/series", this.serie)
        .then((response) => {
          this.$router.push({
            name: "dash-sheet-sheet",
            params: {
              sheet: this.serie.sheet_id,
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
