import { codesNAF1993 } from './codes-NAF-1993';
import { codesNAFRev1 } from './codes-NAF-rev-1';
import { codesNAFRev2 } from './codes-NAF-rev-2';
import { codesNAP } from './codes-NAP';
import { departements } from './departements';

/**
 * Normalize string and remove special chars & diacritics before using a term in search
 */
export const removeSpecialChars = (term = '') => {
  return term
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+$/, '')
    .replace(/^\s+/, '');
};

/**
 * Replace every chars that are not letters or numbers with -
 * @param term
 * @returns
 */
export const escapeString = (term = '') => {
  return removeSpecialChars(term).replaceAll(/[^a-zA-Z0-9]/g, '-');
};

export const getUrlFromDepartement = (dep: string) => {
  // departement label without special char
  const labelDep = escapeString(libelleFromDepartement(dep, false));
  return `${dep}-${labelDep.replaceAll(' ', '').toLocaleLowerCase()}`;
};

export const getDepartementFromCodePostal = (codePostal: string) => {
  if (!codePostal || codePostal.length !== 5 || codePostal.startsWith('00')) {
    return null;
  }

  // dom
  if (codePostal.startsWith('97') || codePostal.startsWith('98')) {
    return codePostal.slice(0, 3);
  }
  //corse
  if (codePostal.startsWith('20')) {
    if (codePostal.startsWith('200') || codePostal.startsWith('201')) {
      return '2A';
    }
    if (codePostal.startsWith('202') || codePostal.startsWith('206')) {
      return '2B';
    }
  }

  return codePostal.slice(0, 2);
};

export const libelleFromDepartement = (
  codeDepartement: string,
  addCode = true
) => {
  //@ts-ignore
  const label = departements[codeDepartement];

  if (label) {
    const code = addCode ? ` (${codeDepartement})` : '';
    return `${label}${code}`;
  }
  return 'Département inconnu';
};

export const libelleFromCodeNAFWithoutNomenclature = (
  code = '',
  addCode = true
) => {
  for (let nomenclature of [
    codesNAFRev2,
    codesNAFRev1,
    codesNAF1993,
    codesNAP,
  ]) {
    //@ts-ignore
    const label = nomenclature[code];
    if (label) {
      return addCode && code ? `${label} (${code})` : label;
    }
  }
  return 'Activité inconnue';
};
