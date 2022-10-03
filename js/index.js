function tabs() {
   document.addEventListener("click", (event) => {
      if (event.target.closest("[data-btn]")) {
         const att = event.target.getAttribute("data-btn")
         const modernAtt = `[data-tab="${att}"]`

         event.target.closest("[data-main]").querySelector(`${modernAtt}`).classList.add("_active")

         const tabs = event.target.closest("[data-main]").querySelectorAll("[data-tab]")
         tabs.forEach((tab) => {
            if (tab.getAttribute("data-tab") === att) {
            } else {
               tab.classList.remove("_active")
            }
         })
      }
   })
}
tabs()

