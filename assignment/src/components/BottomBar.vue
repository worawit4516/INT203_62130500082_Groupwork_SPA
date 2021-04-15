<template>
 <div>


    <div id="bottom-info" class=" flex font-sans -mt-6">
        <div>
            <p class="pl-44 p-5 pr-10" style="color: gray; font-size: 78%">
                Copyright © Garena Online. Trademarks belong to their respective owners. All rights reserved.
            </p>
        </div>
        <div id="Terms_of_Service">
            <button>
                <!-- Effects-->
                <p class="p-5 px-14 border-black border-r-2 hover:text-white" style="font-size: 90%">
                    Terms of Service
                </p>
            </button>
        </div>
        <div id="Privacy_Policy">
            <button>
                <p class="p-5 px-14 hover:text-white" style="font-size: 90%">
                    Privacy Policy
                </p>
            </button>
        </div>
        <div>
            <select class="mt-5 ml-2 bg-black border-b border-l border-t border-r border-gray-600" style="font-size: 90%">
                <option>Thailand (ราชอาณาจักรไทย)</option>
                <option>Indonesia</option>
                <option>Vietnam (Việt Nam)</option>
                <option>Malaysia</option>
                <option>Garena Group</option>
            </select>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'BottomBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
li:hover {
    color: aliceblue;
}


#bottom-info {
    background-color: rgba(14, 14, 14, 1);
    color: gray;
}

#Terms_of_Service {
    background-color: rgba(19, 19, 19, 1);
    color: gray;
}

#Privacy_Policy {
    background-color: rgba(19, 19, 19, 1);
    color: gray;
}

#Terms_of_Service:hover {
    background-color: rgba(29, 29, 29, 1);
}

#Privacy_Policy:hover {
    background-color: rgba(29, 29, 29, 1);
}


</style>
