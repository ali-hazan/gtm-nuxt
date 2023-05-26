<template>
    <div>
        <h1>Contact Us</h1>
        <form @submit.prevent="submit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br />
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const submit = (event: any) => {
            event.preventDefault(); // Prevent the form from submitting normally

            // Access form data from event.target
            const name = event.target.elements.name.value;
            const email = event.target.elements.email.value;
            const message = event.target.elements.message.value;

            // Perform any actions with the form data
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Reset the form after submission
            event.target.reset();

        }
        return {
            submit
        }
    }

})
</script>