<template>
    <section id="progressao">
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-lg-6 text-center">
                    <NuxtPicture src="/img/landing/comece-do-zero.png"
                    :imgAttrs="{}"
                    />
                </div>
                <div class="col-lg-6">
                    <h2 class="mt-2">Comece de onde faz sentido pra você!</h2>
                    <hr>
                    <p>
                        Tudo foi pensado considerando o seu ponto de partida. E não poderia ser diferente, esse desafio é
                        dinâmico e considera suas limitações. É por isso que é tão eficiente. Não importa se você é
                        iniciante, se já pratica exercícios a algum tempo ou se já é popular na academia. Você receberá o
                        treino direcionado para você diretamente no seu celular.
                    </p>
                </div>
            </div>

            <div class="row mt-5 justify-content-center">

                <div class="col-lg-4" data-aos="flip-left">
                    <div class="box position-relative mt-5 w-100">
                        <div
                            class="box-icon position-absolute top-0 translate-middle badge rounded-3 ms-4 align-items-center p-3">
                            <p class="align-items-center mb-0">
                                <Twemoji emoji="🐣" class="fs-2"/>
                            </p>
                        </div>
                        <div class="body">
                            <p class="text-uppercase fw-bold">Iniciante</p>
                            <p>Para você que não tem hábito de fazer exercícios, mas quer começar a busca pelo seu corpo
                                ideal.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="flip-left" data-aos-delay="100">
                    <div class="box position-relative mt-5 w-100">
                        <div
                            class="box-icon position-absolute top-0 translate-middle badge rounded-3 ms-4 align-items-center p-3">
                            <p class="align-items-center mb-0">
                                <Twemoji emoji="🏃🏽" class="fs-2"/>
                            </p>
                        </div>
                        <div class="body">
                            <p class="text-uppercase fw-bold">Intermediário</p>
                            <p>Para quem já faz exercício algumas vezes na semana e quer dar o próximo passo rumo aos
                                resultados duradouros.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="flip-left" data-aos-delay="200">
                    <div class="box position-relative mt-5 w-100">
                        <div
                            class="box-icon position-absolute top-0 translate-middle badge rounded-3 ms-4 align-items-center p-3">
                            <p class="align-items-center mb-0">
                                <Twemoji emoji="🔥" class="fs-2"/>
                            </p>
                        </div>
                        <div class="body">
                            <p class="text-uppercase fw-bold">Avançado</p>
                            <p>Para aquelas que já praticam exercício regularmente e não sabem como evoluir na busca por
                                aquele corpo impecável.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css">
#progressao {
    background-color: #100e0f;
}

#progressao .box {
    width: 80%;
    background-color: #060201;
    padding: 50px;
    border-radius: 15px;
}

#progressao .box-icon:nth-of-type(1) {
    background-color: #ee0255;
}

#progressao .box-icon:nth-of-type(2) {
    background-color: #02ee3c;
}

#progressao .box-icon:nth-of-type(3) {
    background-color: #ffbc02;
}

/* Mdia query if mobile picture width 100% */
@media (max-width: 768px) {
    #progressao img {
        width: 100%;
    }
}
</style>
