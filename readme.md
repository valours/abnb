

## Feature:
 - Creation d'un compte utilisateur
 - Creation d'un compte loueur
  - Création d'un bien à louer.

## Models:
  - utilisateurs (loueur, utilisateur)
  - Bien ()
  - Location (rentals) (période, valider par l'utilisateur)

## server-api
start with nest 
simple api pousser par express et exposant avec graphql les models du domaine.

*** notes: ***
- Controllers are responsible for handling incoming requests and returning responses to the client.

stacks: express, express-graphql, lodash

## web-client

stacks: react, lodash