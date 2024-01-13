export function setUid() {
  // keys/pk are just numbers incremented
  function getLatestId() {
    const keys = Object.keys(localStorage)

    if (keys.length === 0) {
      // No keys in localStorage
      return 0
    }

    // Convert keys to numbers and find the maximum
    const maxKey = Math.max(...keys.map(Number))

    return maxKey
  }

  function incrementLatestId() {
    // to set a unique id for the task
    let id = getLatestId()
    return ++id
  }

  return incrementLatestId()
}
