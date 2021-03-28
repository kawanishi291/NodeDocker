document.addEventListener("DOMContentLoaded", function(event) {
new Vue({
    el: "#app",
    data: {
        myNumber: 0,
        tweenedNumber: 0
    },
    watch: {
        // myNumberを監視し、値が変化したら実行
        myNumber: function(){
            TweenMax.to(this.$data, 1, {tweenedNumber: this.myNumber})
        }
    },
    computed: {
        animeNumber: function(){
            return this.tweenedNumber.toFixed(0);
        }
    }
})
});