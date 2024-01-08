# Annuaire des Entreprises - SEO

Ce dépôt ne contient que les fichiers consacré aux actions SEO (génération de la sitemap et mapping entre les pages). 

## Dépôts liés 🏗

Ce dépôt fait partie d'un ensemble de dépôts qui constituent l'[Annuaire des Entreprises](https://annuaire-entreprises.data.gouv.fr) :

| Description                         | Accès                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------- |
| Le site Web                         | [par ici 👉](https://github.com/etalab/annuaire-entreprises-site)           |
| Les actions SEO                     | [par ici 👉](https://github.com/etalab/annuaire-entreprises-seo)            |
| L’API du Moteur de recherche        | [par ici 👉](https://github.com/etalab/annuaire-entreprises-search-api)     |
| Pipeline ETL                        | [par ici 👉](https://github.com/etalab/annuaire-entreprises-search-infra)   |
| Le proxy API du site                | [par ici 👉](https://github.com/etalab/annuaire-entreprises-api-proxy)      |
| Tests de pertinence de la recherche | [par ici 👉](https://github.com/etalab/annuaire-entreprises-search-testing) |

### Installation

Le projet nécessite node > 18

- [Installer Node](https://nodejs.org/en/download/package-manager)

```bash
# Installation
npm i

# Copier le fichier .env
cp .env.dev .env

# Builder les fichiers SEO
npm run build
```
