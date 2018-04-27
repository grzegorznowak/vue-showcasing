<template>
    <div class="container">
        <form @submit.prevent="submit" @keydown="keyHandler">
            <input v-model="search" :placeholder="$route.params.query"
                   autofocus />
        </form>
    </div>
</template>

<script>
export default {
  data: () => ({
    search: ''
  }),
  methods: {
    keyHandler (event) {
      this.$emit('letter-sent', event.key)
    },
    submit (event) {
    }
  }
}
</script>