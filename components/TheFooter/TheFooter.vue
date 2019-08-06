<template>
  <footer>
    <section id="copyright">
      <p>&copy; 2019 All Rights Reserved | KOFI OBRASI OCRAN</p>
    </section>
    <section id="social">
      <ul class="author--social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/kofiobrasiocran"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/linkedin.png" alt="linkedin-link"
          /></a>
        </li>
        <li>
          <a
            href="https://github.com/Mupati"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/github.png" alt="github-link"
          /></a>
        </li>
        <li>
          <a
            href="https://mupati.devcodes.co"
            target="_blank"
            rel="noreferrer noopener"
            ><img src="/domain.png" alt="website-link"
          /></a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/kofi_mupati"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/twitter.png" alt="twitter-link"
          /></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/brakroxeffectx"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/facebook.png" alt="facebook-link"
          /></a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  margin-top: 5em;
  padding: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  background: #022d30;
  color: #fff;
}
#copyright {
  margin-left: 5em;
}
#social {
  margin-left: auto;
  margin-right: 1em;
  padding-top: 0.5em;
}
ul {
  display: flex;
  list-style: none;
}
li {
  margin-right: 1em;
}
@media (max-width: 480px) {
  #copyright {
    margin-left: 0;
  }
}
</style>
