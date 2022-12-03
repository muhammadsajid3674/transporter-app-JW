function SetDate(dt) {
  return `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`
}

function SetTime(dt) {
  return `${dt.getHours()}:${dt.getMinutes()}`
}

export { SetDate, SetTime }