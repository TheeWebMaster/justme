class RevealContentOnClick {
  constructor() {
    this.button = document.querySelector('#toggle-view-button');

    this.setEvent();
  }

  setEvent() {
    this.button.addEventListener('click', this.animate);
  }

  animate = () => {
    document.body.classList.toggle('content-shown');
  };
}

export default RevealContentOnClick;
