import * as http from './fetchWrapper';

const baseUrl = 'http://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0001';
const newBorn = 'BE0001D';
const everyone = 'BE0001G';

const top100newbornPerYear = 'BE0001T05AR';
const atLeast2namedPerYear = 'BE0001T04BAr';
const atLeast10namedPerYear = 'BE0001T04Ar';

/**
 * BE0001T05AR
 * Nyfödda, de 10 och 100 vanligaste tilltalsnamnen efter namngivningsår. År 1998 - 2018
 *
 * BE0001T04BAr
 * Nyfödda, tilltalsnamn med minst 2 namngivna efter namngivningsår. År 2004 - 2018
 *
 * BE0001T04Ar
 * Nyfödda, tilltalsnamn med minst 10 namngivna efter namngivningsår. År 1998 - 2018
 */
export function getTopNewbornNames() {
  return http
    .get(`${baseUrl}/${newBorn}/${top100newbornPerYear}`)
    .then(http.getBody);
}
