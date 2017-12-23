<template>
    <div class="card" style="width:100%">
        <div class="card-body text-center">
            <h4 class="card-title">Costco List</h4>
            <h6 class="card-subtitle mb-2 text-muted">A list of stuff to buy at Costco</h6>
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover" style="margin:auto">
                    <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <app-item v-for="groceryItem in items" :groceryItem="groceryItem"></app-item>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    export default {
        data() {
            return {
                items: [
                    {name: 'tomato', price: 12.02, quantity: 5},
                    {name: 'avacodo', price: 1, quantity: 3},
                    {name: 'diapers', price: 40, quantity: 2},
                    {name: 'milk', price: 3, quantity: 1}
                ]
            }
        },
        components: {
            appItem: ListItem
        }
    }
</script>

<style>

</style>