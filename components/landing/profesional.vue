<template>
    <div
        class="profissional"
        data-aos="fade-up"
    >
        <div class="row justify-content-center align-items-center">
            <div class="col-sm-4 mb-3">
                <NuxtPicture
                    :src="'/img/landing/professionals/' + slug + '.png'"
                    format="webp"
                    loading="lazy"
                />
            </div>
            <div class="col-sm-8">
                <h3 class="">{{ name }}</h3>
                <p>{{ bio }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["name", "bio"]);

const slug = computed(() => {
    return props.name.replace(/[^\w-]+/g, "-").toLowerCase();
});
</script>

<style>
#autoridade img {
    width: 100%;
}
</style>
