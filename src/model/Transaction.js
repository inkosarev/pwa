import { v4 as uuid } from 'uuid'

/**
 * @class
 * @classdesc Класс представляет транзакцию
 */
export default class Transaction {
    /**
     * Категории
     * @type {Object}
     */
    static category = {
        default: 'default',
    }

    /**
     * Уникальный иденификатор задачи
     * @type {number}
     */
    id

    /**
     * Сумма
     * @type {number}
     */
    sum

    /**
     * Категория
     * @type {string}
     */
    category

    /**
     * Описание
     * @type {string}
     */
    description

    /**
     * Статус транзацкии (активна или нет)
     * @type {boolean}
     */
    status

    /**
     * Тип транзацкии
     * @type {boolean}
     */
    type

    /**
     * Время создания
     * @type {number}
     */
    created

    /**
     * Создает объект задачи
     * @return {Task}
     */
    constructor() {
        this.id = uuid()
        this.category = Transaction.category.default
        this.sum = 0
        this.description = ''
        this.status = true
        this.type = true
        this.created = Date.now()
    }
}
