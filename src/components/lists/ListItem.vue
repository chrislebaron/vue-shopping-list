<template>
    <tr>
        <td>{{ groceryItem.name }}</td>
        <td>{{ groceryItem.price }}</td>
        <td>{{ groceryItem.quantity }}</td>
        <td>{{ groceryItem.price * groceryItem.quantity | currency }}</td>
    </tr>
</template>

<script>
    export default {
        props: ['groceryItem']
    }
</script>