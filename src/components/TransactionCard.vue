<template>
    <div class="transaction-card">
        <span>Дата: {{ new Date(transaction.created).toLocaleString() }} </span>

        <label>Расход: <input type="checkbox" v-model="transaction.type"/></label>

        <label>Сумма: <input type="number" min="0" v-model="transaction.sum" autofocus/></label>

        <label>Категория: <input class="title" type="text" v-model="transaction.category"/></label>

        <textarea v-model="transaction.description" rows="20"/>

        <button class="btn" @click="saveButtonHandler">Сохранить</button>
        <button class="btn" @click="deleteButtonHandler">Удалить</button>
    </div>
</template>

<script>
import Transaction from '../model/Transaction'

export default {
    name: 'task-card',

    data() {
        return {
            // Копирование что бы не изменять хранилище в обход мутаций
            transaction: {...this.$store.state.transactions[this.$route.params.id]},
            Transaction
        }
    },

    methods: {
        // Сохранение редактируемой транзакции
        async saveButtonHandler() {
            await this.$store.dispatch('addTransaction', this.transaction)
            await this.$store.dispatch('saveTransactions')
            this.$router.push('/')
        },

        // Удаление редактируемой транзакции
        async deleteButtonHandler() {
            await this.$store.dispatch('deleteTransaction', this.transaction.id)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .transaction-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;
    }
</style>
