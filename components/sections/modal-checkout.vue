<template>
    <div
        class="modal fade"
        id="modalCheckout"
        tabindex="-1"
        aria-labelledby="modalCheckout"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header align-items-center">
                    <span class="fs-3">🔥 </span>
                    <h3
                        class="modal-title text-dark text-uppercase fs-5"
                        id="modalLabel"
                    >Falta pouco!</h3>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body text-dark">
                    <div v-if="!isTimeToShowForm">
                        <p>Você chegou cedo!</p>
                        <p>As inscrições começam dia 14/02 (amanhã) as 8h da manhã ☀️</p>
                    </div>
                    <form
                        id="formModal"
                        @submit.prevent="submit"
                        v-if="isTimeToShowForm"
                    >
                        <label
                            for="name"
                            class="mt-3"
                        >Nome:</label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            name="name"
                            v-model="name"
                        >
                        <label
                            for="name"
                            class="mt-3"
                        >E-mail principal:</label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            name="email"
                            v-model="email"
                        >
                        <label
                            for="name"
                            class="mt-3"
                        >Número do WhatsApp:</label>
                        <input
                            type="text"
                            class="form-control form-control-lg"
                            name="phone"
                            v-model="phone"
                        >
                        <button
                            type="submit"
                            class="btn btn-success w-100 fw-bold text-uppercase py-3 btn-send mt-4"
                        >Continuar para
                            o Desafio!</button>
                    </form>
                </div>
                <div
                    class="modal-footer"
                    v-if="isTimeToShowForm"
                >
                    <p class="text-right text-muted small"><span>Se preferir, <a
                                class="text-muted"
                                :href="checkoutUrl"
                                target="_blank"
                            >clique
                                aqui</a>.</span></p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

const checkoutUrl = 'https://pay.hotmart.com/C68476388Q?off=9kxkrmd2'

const name = ref("")
const email = ref("")
const phone = ref("")

const submit = () => {

    const checkoutUrl = `https://pay.hotmart.com/C68476388Q?off=9kxkrmd2&name=${name.value}&email=${email.value}&phone=${phone.value}`

    window.open(checkoutUrl, '_blank')
}

const isTimeToShowForm = computed(() => {
    const targetDateTime = new Date('2024-02-14T08:00:00');
    const now = new Date();

    // Check if the current date is February  14,  2024, and the time is  08:00 AM
    return now > targetDateTime;
});
</script>