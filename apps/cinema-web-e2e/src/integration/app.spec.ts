import {
  checkMoviesList,
  getCinemaActionButton,
  getGreeting,
  getLogoutButton,
  getMovieFromMoviesList,
  getToolBarSection
} from '../support/app.po';

describe('cinema-web', () => {
  before(() => cy.visit('/'));

  it('should display logo app', () => {
    getGreeting().contains('bienvenido a tu cine favorito!');
  });

  it('should do login and access to Movies List section', () => {
    cy.login('bruce@mail.com', '123456');
    cy.wait(2000, { timeout: 2000 });
    getToolBarSection().contains('Películas');
    checkMoviesList().find('cinema-card-movie').should('have.length', 10);
  });

  it('on click new movie should show a new movie form', () => {
    getCinemaActionButton().click();
    cy.wait(2000, { timeout: 2000 });
    getToolBarSection().contains('Nueva película');
  });

  it('on click go back button in new movie it shoud come back to movies list', () => {
    getCinemaActionButton().click();
    cy.wait(2000, { timeout: 2000 });
    getToolBarSection().contains('Películas');
    checkMoviesList().find('cinema-card-movie').should('have.length', 10);
  });

  it('on dblclick on first movie should show the movie profile', () => {
    getMovieFromMoviesList().dblclick({ timeout: 1000 });
    cy.wait(2000, { timeout: 2000 });
    getToolBarSection().contains('Dancing Lady');
  });

  it('on click go back button in movie profile it shoud come back to movies list', () => {
    getCinemaActionButton().first().click();
    cy.wait(2000, { timeout: 2000 });
    getToolBarSection().contains('Películas');
    checkMoviesList().find('cinema-card-movie').should('have.length', 10);
  });

  it('on click logout it should load home screen', () => {
    getLogoutButton().click();
    cy.wait(2000, { timeout: 2000 });
    getGreeting().contains('bienvenido a tu cine favorito!');
  });
});
