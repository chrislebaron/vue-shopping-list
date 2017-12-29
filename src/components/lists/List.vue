<template>
    <div class="card" style="width:100%">
        <div class="card-body text-center">
            <a class="rnd-btn" @click="showNewItem = !showNewItem"><i class="far fa-plus-circle"></i> New Item</a>
            <h4 class="card-title">Costco List</h4>
            <h6 class="card-subtitle mb-2 text-muted">A list of stuff to buy at Costco</h6>
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-hover" style="margin:auto">
                    <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Item Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <app-item v-for="groceryItem in items" :groceryItem="groceryItem"></app-item>

                    <tr v-if="showNewItem">
                        <td>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="newItem.name"
                            >
                        </td>
                        <td>
                            <select
                                    class="form-control"
                                    name="category"
                                    v-model="newItem.category"
                                    id="category"
                            >
                                <option disabled value="">Category</option>
                                <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                            </select>
                        </td>
                        <td>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="newItem.price">
                        </td>
                        <td>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="newItem.quantity">
                        </td>
                        <td>
                            {{ newItem.price * newItem.quantity | currency }}
                        </td>

                        <td>
                            <button class="btn btn-success" @click="submitItem">Submit</button>
                        </td>

                    </tr>
                    </tbody>

                </table>

            </div>
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    import {mapGetters} from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                items: 'getFullList',
                categories: 'getCategories',
                getNextId: 'getNextId'
            })
        },
        data() {
            return {
                newItem: {
                    name: '',
                    category: '',
                    price: null,
                    quantity: 1
                },
                showNewItem: false
            }
        },
        components: {
            appItem: ListItem
        },
        methods: {
            ...mapMutations([
                'addItem'
            ]),
            submitItem() {
                this.newItem['id'] = this.getNextId;
                console.log(this.newItem);
                this.addItem(this.newItem);
                this.resetNewItem();
            },
            resetNewItem() {
                this.newItem = {
                    name: '',
                    category: '',
                    price: null,
                    quantity: 1
                }
            }
        }
    }
</script>

<style>
    .rnd-btn {
        float: right;
        cursor: pointer;
    }
    .rnd-btn:hover {
        color: #eeeeee;
    }
</style>