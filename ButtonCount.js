class ButtonCount extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
  
      // Create a button element and set its initial text content
      const button = document.createElement("button");
      button.textContent = "Times Clicked: 0";
  
      // Define a click event listener to update the text content
      let count = 0;
      button.addEventListener("click", () => {
        count++;
        button.textContent = `Times Clicked: ${count}`;
      });
  
      // Add the button element to the shadow root
      shadow.appendChild(button);
    }
  }
  
  // Define the element in the custom elements registry
  customElements.define("button-count", ButtonCount);
  