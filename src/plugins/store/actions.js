export default {
  async loadHeroes ({ commit }) {
    const raw = await fetch('https://swapi.dev/api/people/')
    const { results } = await raw.json()
    commit('saveHeroes', results)
  },
  async loadPlanets ({ commit }) {
    const raw = await fetch('https://swapi.dev/api/planets/')
    const { results } = await raw.json()
    commit('savePlanets', results)
  }
}
