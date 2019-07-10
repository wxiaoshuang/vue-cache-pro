const mutations = {
  addExcludeComponent (state, excludeComponent) {
    let excludeComponents = state.excludeComponents
    if (Array.isArray(excludeComponent)) {
      state.excludeComponents = [...new Set([...excludeComponents, ...excludeComponent])]
    } else {
      state.excludeComponents = [...new Set([...excludeComponents, excludeComponent])]
    }
  },
  removeExcludeComponent (state, excludeComponent) {
    let excludeComponents = state.excludeComponents
    if (Array.isArray(excludeComponent)) {
      for (let i = 0; i < excludeComponent.length; i++) {
        let index = excludeComponents.findIndex(v => v === excludeComponent[i])
        if (index > -1) {
          excludeComponents.splice(index, 1)
        }
      }
    } else {
      for (let i = 0, len = excludeComponents.length; i < len; i++) {
        if (excludeComponents[i] === excludeComponent) {
          excludeComponents.splice(i, 1)
          break
        }
      }
    }
    state.excludeComponents = excludeComponents
  }
}
export default mutations
