<template>
 <div id="menubar" class=" p-3 pb-4 border-red-600 border-b-2">
        <!-- Box alignment -->
        <nav class="flex justify-between" style="font-size: 120%">
          
            <ul class="flex flex-row">
                <!-- Spacing -->
                <!-- Typography-->
                <li class="pr-20 pl-52 border-gray-500 border-r">
                    <button class="font-light">
                       <router-link to="/">Home</router-link> 
                    </button>
                </li>
                <li class="pl-20 border-gray-500 border-r pr-20">
                    <button class="font-light">
                       <router-link to="/gameregistration">สั่งซื้อเกม</router-link>
                    </button>
                </li>

                <li class="pl-20  pr-20">
                    <button class="font-light">
                       <router-link to="/basket">Basket</router-link>
                    </button>
                </li>

            </ul>
            <div class="pr-40">
                <ul class="flex flex-row font-light">
                    <li class="pr-2 pl-5 border-gray-500 border-r">
                         
                        <button class="font-light">
                            สมัครสมาชิก 
                            <span class="material-icons">how_to_reg</span>
                        </button>
                   
                    </li>

                    <li class="pr-2 pl-5">
                        <button class="font-light">
                            ล็อกอิน <span class="material-icons">login</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Nevbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
li:hover {
    color: aliceblue;
}

#menubar {
    background-color: rgba(14, 14, 14, 1);
    color: gray;
}


</style>
