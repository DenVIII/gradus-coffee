<template>
  <Html>
    <Head>
      <Link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin:boolean
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sofia+Sans+Extra+Condensed:ital,wght@0,1..1000;1,1..1000&display=swap"
        rel="stylesheet"
      />
    </Head>
  </Html>
  <main class="content">
    <NuxtPage />
  </main>
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
