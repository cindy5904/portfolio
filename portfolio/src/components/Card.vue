<script setup>

</script>

<template>
 <section class="section-card" id="cards">
        <h3>Laissez-vous guider...</h3>
        <hr>
    <div class="container-card">

        <div class="card">
            <h4>Projets</h4>
            <span>Lorem</span>
            <p>✔️ Lorem, ipsum dolor</p>
            <p>✔️ Lorem ipsum dolor sit</p>
            <p>✔️ Lorem ipsum dolor sit</p>
            <p>❌ Lorem ipsum dolor sit amet</p>
            <p>❌ Lorem ipsum dolor sit amet consec</p>
            <p>❌ Lorem ipsum dolor sit amet</p>
   
            <a href="#contact">Voir le contenu</a>
   
        </div>

        <div class="card">
            <h4>Expérience</h4>
            <span>Lorem</span>
            <p>✔️ Lorem ipsum dolor sit amet</p>
            <p>✔️ Lorem ipsum dolor sit</p>
            <p>✔️ Lorem ipsum dolor sit</p>
            <p>✔️ Lorem ipsum dolor sit amet conse</p>
            <p>❌ Lorem ipsum dolor sit amet cons</p>
            <p>❌ Lorem ipsum dolor sit amet conse</p>

            <a href="#contact">Voir le contenu</a>

        </div>


        <div class="card">
            <h4>Technologie</h4>
            <span>Lorem</span>
            <p>✔️ Lorem, ipsum dolor</p>
            <p>✔️ Lorem ipsum dolor sit amet</p>
            <p>✔️ Lorem ipsum dolor sit amet</p>
            <p>✔️ Lorem, ipsum dolor</p>
            <p>✔️ Lorem ipsum dolor sit amet consect</p>
            <p>✔️ Lorem ipsum dolor sit amet consec</p>

            <a href="#contact">Voir le contenu</a>
     
        </div>



    </div>

    </section> 

</template>

<style scoped>
.section-card {
    padding-bottom: 150px;
    border-bottom: 1px dashed #333;
  }
  .section-card h3 {
    text-align: center;
    font-size: 45px;
    margin: 120px 0 20px;
    padding: 0 30px;
  }
  .section-card hr {
    width: 200px;
    margin: 20px auto 100px;
  }
  .section-card .container-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .section-card .container-card .card {
    width: 350px;
    height: auto;
    border-radius: 5px;
    margin: 15px 15px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    position: relative;
  }
  .section-card .container-card .card:hover {
    transform: translateY(-5px);
  }
  .section-card .container-card h4 {
    text-align: center;
    padding: 25px 20px;
    font-size: 35px;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0 100%);
    background: #ffafbf;
  }
  .section-card .container-card span {
    display: block;
    text-align: center;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
  }
  .section-card .container-card p {
    font-size: 18px;
    padding: 20px 10px;
    border-top: 1px solid rgb(194, 197, 194);
  }
  .section-card .container-card p:last-of-type {
    border-bottom: 1px solid rgb(194, 197, 194);
  }
  .section-card .container-card p:nth-child(odd) {
    background: rgba(195, 195, 195, 0.219);
  }
  .section-card .container-card a {
    display: block;
    text-decoration: none;
    border: 1px solid #333;
    text-align: center;
    width: 200px;
    height: 50px;
    border-radius: 9999px;
    color: #333;
    font-size: 18px;
    line-height: 50px;
    margin: 20px auto;
    transition: all 0.2s ease-in-out;
  }
  .section-card .container-card a:hover {
    background: #333;
    color: #f1f1f1;
  }
  
</style>