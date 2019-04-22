<template>
  <div id="home">
    <section class="landing--image">
      <img
        src="https://res.cloudinary.com/mupati/image/upload/v1555886823/koc.jpg"
        alt="Kofi Obrasi Ocran"
      />
    </section>
    <section class="landing--msg">
      <h1>Hi, WELCOME</h1>
      <p>
        I am Kofi Obrasi Ocran but I go by different aliases which reflect my
        personality and interests in different settings.
        <strong>
          Bra Krox Effectx, Bra Blood-Bought, Kofi Mupati, TheWannabeeWordsmith,
        </strong>
        just to name a few, are names one may call me by. <br />
        Well, I digressed. I am a
        <a
          href="https://mupati.devcodes.co"
          target="_blank"
          rel="noreferrer noopener"
          >Software Developer
        </a>
        at
        <a
          href="https://ek-brandconsult.com"
          target="_blank"
          rel="noreferrer noopener"
          >Ek-brandconsult.com
        </a>
        by Profession and found myself enjoying writing of articles and short
        pieces; I guess you might consider me a writer by Passion.
      </p>
      <p>
        I chose to express and share my thoughts via my blog as it has proved to
        be the best way to broaden my scope of thinking as I expose my ideas to
        critique by everyone.
      </p>
      <dl>
        <dt>CROSSLINES</dt>
        <dd>
          For sharing my thoughts about life from the Chrisitian perspective
        </dd>
        <dt>WORDSMITH</dt>
        <dd>
          Where I try to impress my audience with a level of literature prowess
          through poetry, satire, sarcasm and any mean I deem appropriate to
          talk about contemporary issues of interest.
        </dd>
        <dt>TECH</dt>
        <dd>
          As the name implies, I share anything about technology especially
          Software Development. I seek to share what I've been able to learn and
          hopefully offer some guidance to aspiring Software Developers.
        </dd>
      </dl>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  /* height: calc(100vh - 4.5rem); */
  background-color: #eff1f5;
}
.landing--image {
  text-align: center;
  padding: 2.5%;
}

.landing--msg {
  text-align: left;
  padding: 2.5%;
}
.landing--msg h1 {
  text-align: center;
}

@media (max-width: 850px) {
  #home {
    flex-direction: column;
  }
}
</style>
