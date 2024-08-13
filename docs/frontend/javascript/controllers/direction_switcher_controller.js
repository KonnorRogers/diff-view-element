import { Controller } from "@hotwired/stimulus";

export default class DirectionSwitcher extends Controller {
  initialize () {
    this.handleDirectionChange = this.handleDirectionChange.bind(this)
    this.element.addEventListener("change", this.handleDirectionChange)
  }

  connect () {
    this.setInitialDirection()
  }

  setInitialDirection () {
    this.element.checked ? this.changeDirection("rtl") : this.changeDirection("ltr")
  }

  handleDirectionChange () {
    this.changeDirection()
  }

  changeDirection (direction) {
    const lightPreview = this.element.closest("light-preview")
    customElements.whenDefined("light-preview").then(() => {
      setTimeout(() => {
        const preview = lightPreview.shadowRoot?.querySelector("[part~='start-panel']")

        if (!preview) { return }

        if (direction) {
          preview.dir = direction
          return
        }

        const isRTL = preview.matches(":dir(rtl)")

        isRTL ? preview.dir = "ltr" : preview.dir = "rtl"
      })
    })
  }
}
