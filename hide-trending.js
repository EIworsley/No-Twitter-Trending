// debugger;
let intervalId = setInterval(
  () => {
    let el = document.querySelector("div[aria-label='Timeline: Trending now']")
    if (el) {
      el.setAttribute("style", "display: none;")
      clearInterval(intervalId)
    }
  },
  100
)


