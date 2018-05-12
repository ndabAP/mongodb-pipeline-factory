import Triplet from './../types/Triplet'

/**
 * @param {Triplet} triplet
 * @param {string} identifier
 *
 * @returns {any}
 */
export default (triplet: Triplet, identifier: string): any => ({[identifier]: triplet})