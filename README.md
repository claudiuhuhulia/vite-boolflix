# Boolflix

--

- Installo con il terminale le varie librerie che utlizzero durante il progetto.
- Creo un foulder _data_ che conterrà il file store.js che sarà il db relativo ai dati che ricevo dalle chiamate API.
- Creo il componente **SearchForm** e lo importo in **App.vue**.
  - All'interno di **SearchForm** creo l'input text, utlizzo il _v-model_ e lo associo al data _searchTerm_ che terrà monitorato il termine all'interno.
  - Utilizzando l'event handling _@keyup_ con all'interno il _custom event_ **$emit** facciamo in modo che il testo scritto all'interno del input text arrivi al padre **App.vue**.
- All'interno di **App.vue** creo una function **onTermChange** che tiene traccia del testo.
- Dentro il form creo un _@submit.prevent_ e con un _$emit_ lo collego al padre.
- Usando il metodo **searchSub** creo la stringa che utilizzerò successivamente quando farò le chiamate api.
- Creo il metodo **fetchMovies** che avrà come paramentro la stringa precedentemente creata e usango axios faccio la relavita chiamata api e con il _destructuring_ estrapolo i dati che mi servono dal db.
