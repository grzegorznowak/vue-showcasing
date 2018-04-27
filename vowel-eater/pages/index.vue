<template>
  <section class="container">

    <search-form v-on:letter-sent="processALetter"/>

    <div>
      <span v-for="letterPassed in lettersPassed" class="user">
        {{letterPassed}}
      </span>
    </div>

    <div>
      <span v-for="letterProcessed in lettersProcessed" class="user">
        {{letterProcessed}}
      </span>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
import SearchForm from '~/components/search/Form.vue'

export default {
  components: {
    SearchForm
  },
  data: () => ({
    lettersPassed: [],
    lettersProcessed: []
  }),
  head () {
    return {
      title: 'Eat Them Vowels'
    }
  },
  methods: {
    processALetter (letter) {
      this.lettersPassed.push(letter)

      axios.get(`/api/yumyum?letter=${letter}`)
        .then(res => {
          this.lettersProcessed.push(res.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>