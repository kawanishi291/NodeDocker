document.addEventListener("DOMContentLoaded", function(event) {
new Vue({
    el:'#app',
    data: {
        pass: '',
        pass2: '',
        passMsg: "",
        email: '',
        email2: '',
        emailMsg: "",
        submit: false
    },
    methods: {
        checkpass: function(){
            if (this.pass == this.pass2){
                this.passMsg = "";
                if(this.email == this.email2 && this.email != '' && this.email2 != ''){
                    this.submit = true;
                }
            }else{
                this.passMsg = "同じパスワードを入力してください。";
                this.submit = false;
            }
        },
        checkeemail: function(){
            if (this.email == this.email2){
                this.emailMsg = "";
                if(this.pass == this.pass2 && this.pass != '' && this.pass2 != ''){
                    this.submit = true;
                }
            }else{
                this.emailMsg = "同じメールアドレスを入力してください。";
                this.submit = false;
            }
        }
    }
})
});