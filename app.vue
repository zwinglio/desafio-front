<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Inter:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Poppins:ital,wght@0,300;0,900;1,300;1,900&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

:root {
  --main-color: #ee0255;
  --second-color: #b3004d;
  background-color: #100e0f;
}

body {
    background-color: #100e0f;
    color: white;
    font-family: "Poppins", sans-serif;
}

h1,
h2,
h3 {
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
}

h1 {
  font-size: 4.5rem;
  font-style: italic;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
  font-style: italic;
}

h4 {
  font-family: "Poppins", sans-serif;
  font-weight: light;
  text-transform: uppercase;
}

p {
  font-weight: light;
}

section {
  padding-top: 45px;
  padding-bottom: 45px;
}

hr {
  width: 50%;
  border-color: var(--main-color);
  background-color: var(--main-color);
  height: 1px !important;
  opacity: 1;
}

.btn-danger {
  padding: 15px 0;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  background-color: var(--main-color);
  border-radius: 15px;
  box-shadow: 0 0 10px var(--second-color);
}

.btn-danger:hover {
  background-color: var(--main-color);
  box-shadow: 0 0 20px var(--second-color);
}


#modalCheckout .btn {
  border-radius: 20px;
  font-family: "Inter", sans-serif;

}

#obrigado {
  background-color: #060201;
}

.modal-content {
  border-radius: 20px;
}

.nPlausabilidade {
  font-size: 5rem;
  font-family: "Inter", sans-serif;
  font-style: italic;
}

.logoDias {
  color: var(--main-color);
}
</style>