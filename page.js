class PageA4 extends HTMLElement {
    
    static observedAttributes = ["title", "subtitle", "footer", "link"];
    static title = undefined;
    static subtitle = undefined;
    static footer = undefined;
    static link = undefined;

    static pageNumberCounter = 0;

    static pageNumber() {
        this.pageNumberCounter += 1;
        return this.pageNumberCounter;
    }

    constructor() {
       super();
    }

    connectedCallback() {

        if(PageA4.title===undefined && this.hasAttribute("title")){
            PageA4.title = this.getAttribute("title");
        }

        if(PageA4.subtitle===undefined && this.hasAttribute("subtitle")){
            PageA4.subtitle = this.getAttribute("subtitle");
        }

        if(PageA4.footer===undefined && this.hasAttribute("footer")){
            PageA4.footer = this.getAttribute("footer");
        }

        if(PageA4.link===undefined && this.hasAttribute("link")){
            PageA4.link = this.getAttribute("link");
        }
        
        const currentPage = PageA4.pageNumber();
        
        window.setTimeout(() => {
            const totalPages = PageA4.pageNumberCounter;
            const inner_header = `
            <div class='page'>
            <div class='content'>
            <div class='header'>
                <div class='header_left'><p class='header'><b>${PageA4.title}</b></p></div>
                <div class='header_center'>
                    <p class='header_center'>${PageA4.subtitle}</9>
                    <p class='header_center'>Page ${currentPage} of ${totalPages}</p>
                </div>
                <div class='header_right'><img class='header' src='logo.png' alt='logo'></div>
            </div>
            <div class='pagecontent'>
            `;
            const inner_footer = `
            </div>
                <div class='footer'>
                    <a href="${PageA4.link}">
                    <p class="footer"><b>${PageA4.footer}</b></p>
                    </a>
                </div>
            </div> 
            </div>
            `;

            this.innerHTML = inner_header+this.innerHTML+inner_footer;
        }, 0);
    }
}
customElements.define('document-page', PageA4);
