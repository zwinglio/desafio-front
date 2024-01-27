<template>
    <section id="promessa">
        <div class="container">
            <div class="row align-items-center justify-content-center gap-5">
                <div class="col-lg-6">
                    <div
                        data-aos="fade-down-right"
                        data-aos-delay="200"
                    >
                        <p class="mb-0 text-uppercase">Por: Carina Rosin, Sabrina Viana e Maria Letícia</p>
                        <hr class="mt-0">
                    </div>
                    <h1 data-aos="fade-up-right"><span class="desafiode">Desafio de</span><br>
                        <span class="logo40">30</span> <span class="logoDias">dias</span>
                    </h1>
                    <div
                        class="mt-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <p class="fw-bold text-uppercase">
                            30 dias para recuperar sua autoestima, perder peso e ganhar massa magra com um desafio que
                            qualquer pessoa pode fazer!
                        </p>
                        <p>
                            Você pode atingir seus objetivos através de dieta e exercícios físicos, contando com um
                            suporte e conteúdos diários diretamente no seu WhatsApp. O desafio já foi testado, aprovado e
                            agora
                            você poderá fazer parte desse grupo de pessoas que fizeram as pazes com o próprio corpo e
                            conseguiram melhorar a saúde e autoestima.
                        </p>
                    </div>
                    <a
                        type="button"
                        href="#modalCheckout"
                        class="btn btn-lg btn-danger w-100 py-3 mt-4 position-relative"
                        data-bs-toggle="modal"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        Quero fazer parte!
                    </a>

                </div>
                <div class="col-lg-4 mt-0">
                    <NuxtPicture
                        src="/img/landing/carina-sabrina-maria.png"
                        alt=""
                        :imgAttrs="{ class: 'w-100' }"
                        data-aos="zoom-in" data-aos-delay="400"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css">
#promessa {
    background-color: #100e0f;
    padding: 60px 0;
}

#promessa h1 {
    margin-top: -30px;
    margin-bottom: 50px;
    letter-spacing: -9px;
    font-size: 8rem;
}

.logo40 {
    text-shadow: 3px 3px 0 var(--main-color);
}

.desafiode {
    font-size: 3.3rem;
    letter-spacing: 1px;
}</style>