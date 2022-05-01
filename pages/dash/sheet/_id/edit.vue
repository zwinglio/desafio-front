<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="d-flex justify-content-between">
          <h2 class="m-0">Editar lista de treinos 📋</h2>
        </div>
        <form class="mt-4">
          <div class="form-group">
            <label for="title">Título</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="title"
              id="title"
              v-model="sheet.title"
            />
          </div>

          <div class="form-group">
            <label for="instructions">Instruções</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="instructions"
              id="instructions"
              v-model="sheet.instructions"
            />
          </div>

          <div class="form-group">
            <label for="week">Semana</label>
            <input
              type="number"
              class="form-control form-control-lg"
              name="week"
              id="week"
              v-model="sheet.week"
            />
          </div>

          <div class="form-group">
            <label for="place">Local</label>
            <select
              class="form-control form-control-lg"
              name="place"
              id="place"
              v-model="sheet.place"
            >
              <option value="Casa">Casa</option>
              <option value="Academia">Academia</option>
            </select>
          </div>

          <div class="form-group">
            <label for="level">Nível</label>
            <select
              class="form-control form-control-lg"
              name="level"
              id="level"
              v-model="sheet.level_id"
            >
              <option v-for="level in levels" :value="level.id" :key="level.id">
                {{ level.name }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            @click.prevent="updateSheet"
            class="btn btn-success btn-lg my-3 w-100"
          >
            Salvar Modificações
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashCreatePage",
  transition: "fade",
  data() {
    return {
      sheet: {
        id: this.$route.params.sheet.id,
        title: this.$route.params.sheet.title,
        instructions: this.$route.params.sheet.instructions,
        week: this.$route.params.sheet.week,
        place: this.$route.params.sheet.place,
        level_id: this.$route.params.sheet.level.id,
      },
      levels: [
        {
          id: 1,
          name: "Iniciante",
        },
        {
          id: 2,
          name: "Intermediário/Avançado",
        },
      ],
    };
  },
  methods: {
    updateSheet() {
      this.$axios
        .post("/sheets/" + this.sheet.id, this.sheet, {
          params: {
            _method: "PUT",
          },
        })
        .then((response) => {
          this.$router.push({
            name: "dash",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    levelId() {
      return this.sheet.level.id;
    },
  },
};
</script>

<style></style>
