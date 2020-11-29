<template>
  <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="heroes"
        :items-per-page="10"
        :loading="isLoading"
        class="elevation-2"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Heroes',

  data () {
    return {
      isLoading: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Gender',
          align: 'start',
          sortable: true,
          value: 'gender'
        },
        {
          text: 'Birth year',
          align: 'start',
          sortable: true,
          value: 'birth year'
        }
      ]
    }
  },

  computed: {
    ...mapGetters(['heroes'])
  },

  methods: {
    ...mapActions(['loadHeroes'])
  },

  async created () {
    this.isLoading = true
    await this.loadHeroes()
    this.isLoading = false
  }
}
</script>
