<template>
    <div id="preview-container">
        <hr>
        <h2>{{transaction.type ? '-' : '+'}} {{ transaction.sum }}</h2> <h4>{{transaction.category}}</h4>
        <p>{{ transaction.description}}</p>
<!--        <span>{{ new Date(transaction.created).toLocaleString() }}</span>-->
        <div class="btn-container">
            <router-link :to='`/transaction/${transaction.id}`'>Изменить</router-link>
            <a @click="deleteHandler">Удалить</a>
        </div>
    </div>
</template>

<script>
import Transaction from '../model/Transaction'

export default {
    name: "transaction-preview",
    props: ['transaction'],
    data() {
        return { Transaction }
    },
    methods: {
        deleteHandler() {
            this.$store.dispatch('deleteTransaction', this.transaction.id)
        }
    }
}
</script>

<style lang="scss">
    .btn-container {
        display: flex;
        * {
            width: 50%;
            height: 30px;
            border: none;
            background-color: #999;
            text-align: center;
            padding: 0;
            line-height: 30px;
            text-decoration: none;
            color: black;
            border: 1px solid white;
        }
    }


    #preview-container {
        h2, h4 {
            display: inline-block;
            margin: 0;
        }

        p {
            margin-bottom: 15px;
        }
    }
</style>
