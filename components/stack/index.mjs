
class TtywStack extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    let shadowRoot = this.attachShadow({mode:'open'});
    shadowRoot.appendChild(this.styleBlock);
    shadowRoot.appendChild(this.bodyBlock);
  }

  get styleBlock(){
    let styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
      .stack li{
        list-style-type: none;
        display: inline-block;
        margin-left: -6em;
      }
    `;

    return styleBlock;
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('div');
    bodyBlock.classList.add('stack');
    let ul = document.createElement('ul');
    bodyBlock.appendChild(ul);
    for(let i=0; i < this.size; i++){
      let li = document.createElement('li');
      li.innerHTML = '<ttyw-card side="back"></ttyw-card>';
      ul.appendChild(li);
    }

    return bodyBlock;
  }

  get size(){
    return this.getAttribute('size');
  }

  set size(value){
    this.setAttribute('size', value);
  }
}

window.customElements.define('ttyw-stack', TtywStack);
