<template>
<div>
    <div class="carousel bg-white m-auto">
    
        <div class="carousel-inner relative overflow-hidden w-full">
            <!--Slide 1-->
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
            <div class="carousel-item absolute opacity-0" style="height: 85vh">
                <div class="block h-full w-full">
                    <img src="../image/2.png" />
                </div>
            </div>
            <label for="carousel-2" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -left-1 my-80">
                <svg viewBox="0 0 129 129" class="w-5 h-5 transform rotate-90">
                    <path
                        d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z">
                    </path>
                </svg>
            </label>
            <label for="carousel-1" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -right-3 my-80">
                <svg viewBox="0 0 129 129" class="w-5 h-5 transform -rotate-90">
                    <path
                        d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z">
                    </path>
                </svg>
            </label>

            <!--Slide 2-->
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
            <div class="carousel-item absolute opacity-0" style="height: 85vh">
                <div class="block h-full w-full">
                    <img src="../image/3.png" />
                </div>
            </div>
            <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -left-1 my-80">
                <svg viewBox="0 0 129 129" class="w-5 h-5 transform rotate-90">
                    <path
                        d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z">
                    </path>
                </svg>
            </label>
            <label for="carousel-2" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -right-3 my-80">
                <svg viewBox="0 0 129 129" class="w-5 h-5 transform -rotate-90">
                    <path
                        d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z">
                    </path>
                </svg>
            </label>

            <!-- Add additional indicators for each slide-->
            <ol class="carousel-indicators">
                <li class="inline-block">
                    <label for="carousel-1" class="carousel-bullet cursor-pointer block text-6xl text-white">•</label>
                </li>
                <li class="inline-block">
                    <label for="carousel-2" class="carousel-bullet cursor-pointer block text-6xl text-white">•</label>
                </li>
            </ol>
        </div>
    </div>

        <div><router-link to="/gameregistration">
        <a class="button-parallelogram border-b border-l border-t border-r border-red-700 hover:text-white hover:bg-red-600" >
            <span class="parallelogram-info pl-2">
                <span class="material-icons" style="position: absolute; top: 22%; right: 145%">sports_esports</span> สั่งซื้อเกมตอนนี้
            <span class="material-icons" style="position: absolute; top: 22%; left: 145%">play_circle_outline</span>
            </span>
        </a></router-link>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    msg: String
  }
}
</script>

<style scoped>
li:hover {
    color: aliceblue;
}

.example {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.img-rov {
    width: 100%;
    height: auto;
}


.carousel-open:checked+.carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 48%;
    top: 88%;
    text-align: end;
    z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet {
    color: red;
    /* transform: scale(1.5); */
}
.button-parallelogram {
    text-decoration: none;
    background: black;
    position: absolute;
    top: 70%;
    left: 72%;
    display: inline-block;
    padding: 0.9em 7em;
    transform: skew(-20deg);
    color: red;
    transition: width 2s;
}

.parallelogram-info {
    display: inline-block;
    font-size: 1.4em;
    transform: skew(20deg);
}
</style>
