<script setup>
const pdfPath = `${import.meta.env.BASE_URL}CV_TelmonCindy.pdf`;

</script>

<template>
    <h1>Mon CV</h1>
    <iframe :src="pdfPath" type="application/pdf" style="width: 100%; height: 900px;"></iframe>

</template>

<style scoped>
iframe {
    margin-top: 20px;
}
</style>