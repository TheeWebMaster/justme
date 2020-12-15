class FadeCardsInOnWaypoint {
  constructor() {
    this.cards = document.querySelectorAll('.card');

    this.performAction(this.setInitialClass);
    this.performAction(this.setWaypoints);
  }

  performAction(action) {
    this.cards.forEach(action);
  }

  setInitialClass(card) {
    card.classList.add('fade-in-on-scroll');
  }

  setWaypoints(card) {
    const { Waypoint } = window;

    new Waypoint({
      offset: '70%',
      element: card,
      handler() {
        card.classList.add('fade-in-on-scroll--is-active');
      },
    });
  }
}

export default FadeCardsInOnWaypoint;
