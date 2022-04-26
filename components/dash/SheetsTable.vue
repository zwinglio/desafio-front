<template>
  <table class="table table-borderless bg-light rounded mt-4">
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
</template>

<script>
export default {
  props: {
    sheets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sheets: [],
    };
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

<style></style>
