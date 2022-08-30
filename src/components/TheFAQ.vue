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
          question: "Leuk! Ik ben erbij! Wat moet ik nu doen?",
          answer:
            "Even een berichtje sturen naar Gwendolyn of Joran dat je erbij bent. Het liefst voor 6 september",
        },
        {
          question: "Mag mijn +1 ook mee?",
          answer: "Waarschijnlijk wel. Laat het even weten aan ons",
        },
        {
          question: "Ik kan helaas niet, Wat moet ik nu doen?",
          answer:
            "Ook graag even doorgeven, dan weten we dat er meer sla en wortels voor ons overblijft",
        },
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
          answer: "deeppink, #ffbe0b, #3a86ff, black en white",
        },
        {
          question: "Wordt er wel gedanst?",
          answer: "Zeker! Er is een DJ en een dansvloer",
        },
        {
          question: "Willen jullie een cadeau?",
          answer:
            "We zijn natuurlijk al superblij als je erbij bent! Wil je toch iets geven, dan liever ervaringen dan spullen, of een bijdrage voor het feest",
        },
        {
          question: "Waar ligt Culemborg helemaal?",
          answer: `<a class="link" href="https://letmegooglethat.com/?q=culemborg">Hier</a>`,
        },
        {
          question: "Is er eten?",
          answer:
            "Ja, ook al is het precies tussen lunch en diner, dus verwacht geen uitgebreid buffet. Er zijn veganistische hapjes voor de lekker. Konijnenvooeeeeer heujjjj!",
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
