<template>
    <tr>
        <td>{{ groceryItem.name }}</td>
        <td>{{ showCategoryName(groceryItem.category) }}</td>
        <td>{{ groceryItem.price | currency }}</td>
        <td>{{ groceryItem.quantity }}</td>
        <td>{{ groceryItem.price * groceryItem.quantity | currency }}</td>
        <td>
            <a href="#">
                <i class="far fa-edit" style="color:cornflowerblue"></i>
            </a>&nbsp;
            <a href="#">
                <i class="far fa-check" style="color:forestgreen"></i>&nbsp;
            </a>
            <a href="#">
                <i class="fal fa-trash" style="color:red"></i>
            </a>
        </td>
    </tr>
</template>

<script>
    import { mapState } from 'vuex'
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'getCategories'
            ]),
        },
        methods: {
            showCategoryName(value) {
                if(!value) return '';
                const categories = this.$store.state.groceryList.categories;
                const category = categories.find(function (obj) { return obj.id === parseInt(value); });
                return category.name;
            }
        },
        props: ['groceryItem']
    }
</script>