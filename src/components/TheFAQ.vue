<template>
  <h2 class="heading">Best wel vaak gestelde vragen</h2>
  <FAQItem
    v-for="faqItem of faqItems"
    :key="faqItem"
    :question="faqItem.question"
    :answer="faqItem.answer"
  />
</template>

<script>
import FAQItem from "./FAQItem.vue"
export default {
  components: { FAQItem },
  data() {
    return {
      faqItems: [
        {
          question: "Waarom is het op zondagmiddag en niet op zaterdagavond?",
          answer: "Omdat dat zo uitkwam. Lekker gek",
        },
        {
          question: "Zijn jullie echt getrouwd?",
          answer: "Ja! Een beetje in het geniep, maar toch",
        },
        {
          question: "Wat zijn dit voor kleuren mijn ogen doen pijn",
          answer: "deeppink, #ffbe0b, #3a86ff, yellow, black en white",
        },
        {
          question: "Wordt er wel gedanst?",
          answer: "Zeker! Er is een DJ en een dansvloer",
        },
        {
          question: "Willen jullie een cadeau?",
          answer:
            "Liever ervaringen dan spullen, of een bijdrage voor het feest",
        },
        {
          question: "Mag mijn +1 ook mee?",
          answer: "Waarschijnlijk wel",
        },
        {
          question: "Waar ligt Culemborg helemaal?",
          answer: `<a class="link" href="https://letmegooglethat.com/?q=culemborg">Hier</a>`,
        },
        {
          question: "Is er eten?",
          answer:
            "Ja, ook al is het precies tussen lunch en diner. Er zijn veganistische hapjes voor de lekker",
        },
        {
          question: "Is er ook nog iets leuks te doen?",
          answer:
            "Neem je polaroid skills mee, maar we zeggen nog niet wat we gaan doen",
        },
        {
          question: "Mag ik ook zo'n mooie website voor mijn feest?",
          answer: "Misschien",
        },
        {
          question: "Worden deze vragen echt allemaal gesteld?",
          answer: "absoluut niet",
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.heading {
  margin-top: 5rem;
  margin-bottom: 2rem;
}
</style>
