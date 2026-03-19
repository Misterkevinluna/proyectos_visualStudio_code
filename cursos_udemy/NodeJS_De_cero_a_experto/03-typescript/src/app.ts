import { findHeroById } from "./services/hero.service.js";

const hero = findHeroById( 1 );
console.log(hero?.name ?? 'No hero found');