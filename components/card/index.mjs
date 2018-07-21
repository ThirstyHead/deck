'use strict';

window.customElements.define('ttyw-card',
  class TtywCard extends HTMLElement{
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
        .card{
          border: 1px solid black;
          padding: 0.5em;
          width: 5em;
          background-color: white;
          margin: 0 auto;
        }

        .card > header{
          font-size: 1em;
          width: 1em;
        }

        .card > .card-center{
          font-size: 3em;
        }

        .card > footer{
          font-size: 1em;
          width: 1em;
          padding-right: 4em;
          transform: scale(-1, -1);
        }

        /*********** HEARTS ***********/
        .hearts{
          color: red;
        }

        .hearts > header::after{
          /* content: '&hearts;'; */
          content: '\\A\\2665';
        }

        .hearts > .card-center::after{
          content: '\\2665';
        }

        .hearts > footer::after{
          content: '\\A\\2665';
        }

        /*********** SPADES ***********/
        .spades{
          color: black;
        }

        .spades > header::after{
          /* content: '&spades;'; */
          content: '\\A\\2660';
        }

        .spades > .card-center::after{
          content: '\\2660';
        }

        .spades > footer::after{
          content: '\\A\\2660';
        }

        /*********** CLUBS ***********/
        .clubs{
          color: black;
        }

        .clubs > header::after{
          /* content: '&clubs;'; */
          content: '\\A\\2663';
        }

        .clubs > .card-center::after{
          content: '\\2663';
        }

        .clubs > footer::after{
          content: '\\A\\2663';
        }

        /*********** DIAMONDS ***********/
        .diamonds{
          color: red;
        }

        .diamonds > header::after{
          /* content: '&diamonds;'; */
          content: '\\A\\2666';
        }

        .diamonds > .card-center::after{
          content: '\\2666';
        }

        .diamonds > footer::after{
          content: '\\A\\2666';
        }
      `;

      return styleBlock;
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('div');
      bodyBlock.classList.add('card');
      bodyBlock.classList.add(this.suite.toLowerCase());
      bodyBlock.innerHTML = `
        <header>${this.rank}</header>
        <div class="card-center"></div>
        <footer>${this.rank}</footer>
      `;

      return bodyBlock;
    }

    get suite(){
      return this.getAttribute('suite');
    }

    set suite(value){
      this.setAttribute('suite', value);
    }

    get rank(){
      return this.getAttribute('rank');
    }

    set rank(value){
      this.setAttribute('rank', value);
    }

  });
