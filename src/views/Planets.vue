<template>
 <v-row>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="planets"
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
  name: 'Planets',

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
          text: 'Climate',
          align: 'start',
          sortable: true,
          value: 'climate'
        },
        {
          text: 'Terrain',
          align: 'start',
          sortable: true,
          value: 'terrain'
        }
      ]
    }
  },

  computed: {
    ...mapGetters(['planets'])
  },

  methods: {
    ...mapActions(['loadPlanets'])
  },

  async created () {
    this.isLoading = true
    await this.loadPlanets()
    this.isLoading = false
  }
}
</script>
