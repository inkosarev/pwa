import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: {}
  },

  mutations: {
    LOAD_TRANSACTIONS(state, transactions) {
      state.transactions = transactions
    },

    ADD_TRANSACTION(state, transaction) {
      state.transactions[transaction.id] = transaction
    },

    DELETE_TRANSACTION(state, id) {
      Vue.delete(state.transactions, id)
    },
  },

  actions: {
    // Инициализирует транзакции, загружая их из хранилища
    loadTransactions(context) {
      try {
        let transactions = localStorage.getItem('transactions')
        transactions = JSON.parse(transactions) || {}
        context.commit('LOAD_TRANSACTIONS', transactions)
      } catch (e) {
        console.error(e)
        localStorage.setItem('transactions', '{}')
        context.state.transactions = {}
      }
    },

    // Сохраняет транзакции в хранилище
    saveTransactions(context) {
      const transactions = JSON.stringify(context.state.transactions)
      localStorage.setItem('transactions', transactions)
    },

    // Записывает переданную транзакцию по ее ключу
    addTransaction(context, transactions) {
      context.commit('ADD_TRANSACTION', transactions)
    },

    // Удаляет транзакцию
    deleteTransaction(context, id) {
      context.commit('DELETE_TRANSACTION', id)
      context.dispatch('saveTransactions')
    }
  },
})
