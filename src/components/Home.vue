<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Welcome Home!</h1>
                <list></list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './lists/List.vue';

    export default {
        components: {
            list: List
        },
        data() {

        },
        methods: {

        }
    }
</script>