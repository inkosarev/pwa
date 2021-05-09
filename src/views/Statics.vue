<template>
    <div>
        <div id="header">
            <span>Доход: <br> {{ incoming }}</span>
            <span>Расход: <br> {{ spending }}</span>
            <span>Итог: <br> {{ total }}</span>
        </div>
        <transaction-preview
            v-for="transaction in $store.state.transactions"
            :key="transaction.id"
            :transaction="transaction"
        />
        <button class="btn" @click="addHandler">Add</button>
    </div>
</template>

<script>
import Transaction from '../model/Transaction'
import TransactionPreview from '../components/TransactionPreview'

export default {
    name: 'Statistic',

    components: {
        TransactionPreview
    },

    computed: {
        incoming() {
            return Object.values(this.$store.state.transactions)
                .filter(t => t.type === false)
                .map(t => Number(t.sum))
                .reduce((a, v) => { return a + v }, 0)
        },

        spending() {
            return Object.values(this.$store.state.transactions)
                .filter(t => t.type === true)
                .map(t => Number(t.sum))
                .reduce((a, v) => { return a + v }, 0)
        },

        total() {
            return this.incoming - this.spending
        }
    },

    methods: {
        async addHandler() {
            const transaction = new Transaction()
            await this.$store.dispatch('addTransaction', transaction)
            this.$router.push(`/transaction/${transaction.id}`)
        }
    },
}
</script>
<style lang="scss">
    #header {
        span {
            display: inline-block;
            width: 32%;
            text-align: center;
        }
    }

    .btn {
        margin: 20px 0;
        height: 50px;
        width: 100%;
    }
</style>
