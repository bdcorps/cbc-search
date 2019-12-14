/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'dev_CBC',
  searchClient: algoliasearch('DJUD639EST', 'e81be89324b9016c60d53030c61ad990'),
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
        <img class="thumbnail" src=\'{{thumbnail}}\'></img>
          <h2>{{title}}</h2>
          <p>{{description}}</p>
          <p>{{timesPassed}} days ago</p>
        </div>
      `,
    },
  })
);

search.start();
