# Boolflix

--

- Installo con il terminale le varie librerie che utlizzero durante il progetto.
- Creo un foulder _data_ che conterrà il file store.js che sarà il db relativo ai dati che ricevo dalle chiamate API.
- Creo il componente **SearchForm** e lo importo in **App.vue**.
  - All'interno di **SearchForm** creo l'input text, utlizzo il _v-model_ e lo associo al data _searchTerm_ che terrà monitorato il termine all'interno.
  - Utilizzando l'event handling _@keyup_ con all'interno il _custom event_ **$emit** facciamo in modo che il testo scritto all'interno del input text arrivi al padre **App.vue**.
- All'interno di **App.vue** creo una function **onTermChange** che tiene traccia del testo.
- Dentro il form creo un _@submit.prevent_ e con un _$emit_ lo collego al padre.
- Usando il metodo **searchSub** che si occuperà di fare le chiamate api.
- Creo il componente **AppCard.vue** che stamperà in pagina la lista dei film usando il _v-for_.
  - Inserisco un tag img dinamico che inserirà la bandiera della nazione al posto della lingua.
    - Creo un metodo **getImagePath** che avrà come parametro la lingua e si occuperò di ricavare l'url generale dell'img.
- Creo le computed _title_ e _originalTitle_, essendo diverse le chiavi del titolo tra serie a film, le accetto entrambe con un _or_.
- Creo la computed **setVote** che cambi la scala dei voti da 1 a 10, rendendola da 1 a 5 e con la formula _Math.ceil_ arrotondo per eccesso.
- installo e importo le icone della stella da fontawesome.
- Inserisco le icone e usando il _v-if_ / _v-else_ le renderizzo a seconda di **setVote**.
