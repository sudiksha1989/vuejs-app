import Vue from 'vue';
import App from './App.vue';
//import { createProvider } from './vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueWorker from 'vue-worker'

import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;
Vue.use(VueWorker)

const httpLink = new HttpLink({
  uri: 'https://sn-vuejs-app.herokuapp.com/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
