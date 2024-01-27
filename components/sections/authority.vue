<template>
    <section id="autoridade">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2>Conheça as mulheres que vão te ajudar a perder peso!</h2>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-8">
                    <LandingProfesional v-for="professional in professionals" :name="professional.name" :bio="professional.bio" :key="professional.name" class="mb-5" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const professionals = [
    {
        name: 'Carina Rosin',
        bio: 'Traçou uma trajetória notável. Inicialmente atleta desde jovem, ela cursou Direito, mas sua verdadeira paixão se revelou na promoção da saúde por meio da atividade física. Graduada pela USP e detentora de diversos cursos e pós-graduações, Carina consolidou-se como uma especialista no campo. Além de sua sólida formação acadêmica, ela deixou sua marca como autora de dois livros significativos. Como a visionária por trás da plataforma "Você em Forma", Carina é reconhecida como idealizadora do desafio que inspira e transforma vidas, impulsionando uma abordagem holística para o bem-estar.'
    },
    {
        name: 'Sabrina Viana',
        bio: 'Aos 20 anos, é uma influenciadora apaixonada por moda, beleza e treino. Iniciando 2024 com determinação, ela se desafia a transformar sua vida, acreditando que a maior mudança começa com foco e força de vontade, guiada por sua inspiradora personal, Carina. Sabrina Viana, a influenciadora de 20 anos, tem como missão guiar seus seguidores pelo caminho da autenticidade e superação. Compartilhando sua jornada de moda, beleza e treino, ela inspira outros a abraçarem mudanças positivas. Sua conexão com a personal Carina reflete a crença de Sabrina de que o foco e a força de vontade são a chave para alcançar metas, e ela motiva seus seguidores a trilharem esse mesmo caminho de autodescoberta e realização.'
    },
    {
        name: 'Maria Letícia',
        bio: 'Nutricionista com 18 anos de experiência, dedica-se à transformação efetiva de hábitos alimentares. Superou desafios pessoais com a balança, construindo uma relação mais saudável com a comida. Especializada em nutrição clínica, funcional e esportiva, promove uma abordagem integrada para a saúde e bem-estar, considerando pilares fundamentais além da alimentação, como atividade física, mentalidade e comportamento. Já impactou diversas pessoas ao longo de sua carreira, respeitando sempre a individualidade para resultados mais duradouros, realizando mudanças com leveza e sem o peso de dietas restritivas.'
    },
]
</script>

<style lang="css">
#autoridade {
    background-color: #060201;
}
</style>