<template>
  <table class="table table-borderless bg-light rounded mt-4">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nível</th>
        <th scope="col">Título</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sheet in sheets">
        <th scope="row">{{ sheet.id }}</th>
        <td>{{ sheet.level.name }}</td>
        <td>
          {{ sheet.title }}
          <b-badge variant="danger">Semana {{ sheet.week }}</b-badge>
          <b-badge variant="primary">{{ sheet.place }}</b-badge>
        </td>
        <td class="text-right">
          <NuxtLink
            :to="{
              name: 'dash-sheet-id',
              params: {
                id: sheet.id,
                sheet: sheet,
              },
            }"
            class="btn btn-sm btn-info mt-2"
          >
            <i class="bi bi-search"></i>
          </NuxtLink>
          <NuxtLink
            :to="{
              name: 'dash-sheet-id-edit',
              params: {
                id: sheet.id,
                sheet: sheet,
              },
            }"
            class="btn btn-sm btn-primary mt-2"
          >
            <i class="bi bi-pencil-square"></i>
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
  methods: {
    destroySheet(id) {
      //alert user
      if (confirm("Deseja realmente excluir?")) {
        this.$axios.delete(`/sheets/${id}`).then((response) => {
          this.$nuxt.refresh();
        });
      }
    },
  },
};
</script>

<style></style>
