export const getGreeting = () => cy.get('h3');

export const getToolBarSection = () => cy.get('span');

export const checkMoviesList = () => cy.get('cinema-list-movies');

export const getCinemaActionButton = () => cy.get('.float-button');

export const getMovieFromMoviesList = () => cy.get('cinema-card-movie').first();

export const getLogoutButton = () => cy.get('button').contains('logout')


