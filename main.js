// Declaración de un custom element que hereda de HTMLElement
class PopUpInfo extends HTMLElement {
    constructor() {
        // Siempre debe llamarse primero al constructor padre
        super();

        // Se crea el shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Creamos estructura
        // Create wrapper
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");

        // Create spans
        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        // Take attribute content and put it inside the info span
        var text = this.getAttribute("text");
        info.textContent = text;

        // Insert icon con imagen default
        let imgUrl;
        if (this.hasAttribute("img")) {
        imgUrl = this.getAttribute("img");
        } else {
        imgUrl =
            "data:image/png;base64,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";
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        console.log(style.isConnected);

        style.textContent = `
        .wrapper {
            position: relative;
        }
        .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 50px;
            left: 10px;
            z-index: 3;
        }
        img {
            height: 50px;
        }
        .icon {
            cursor: pointer;
            display: block;
            height: 50px;
            width: 50px;
        }
        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }
        `;

        // Adjuntamos el elemento creado al Shadow DOM
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}
// Definimos el nuevo elemento para usar Template
customElements.define("popup-info", PopUpInfo);

// Ejemplo de Custom Element con Template y Slot
// Declaración de un custom element que hereda de HTMLElement
class MyParagraph extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("my-paragraph");
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
            templateContent.cloneNode(true)
        );
    }
}
// Definimos el elemento
customElements.define("my-paragraph", MyParagraph);