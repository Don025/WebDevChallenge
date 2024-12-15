function signin(event) {
    event.preventDefault();
    document.getElementById('si').blur();
    let segment_1 = document.getElementById("signIn");
    segment_1.classList.toggle("signin");
    let segment_2=document.getElementById("signUp-form")
    segment_2.classList.toggle('signInForm')
    let new_segment_2=document.getElementById("signUp")
    new_segment_2.classList.toggle("SignUpNote")
    let new_segment_1=document.getElementById("signIn-form")
    new_segment_1.classList.toggle("SignImForm")
    return 0;
}
function signup(event){
    event.preventDefault();
    document.getElementById('su').blur();
    let segment_1 = document.getElementById("signIn");
    segment_1.classList.toggle("signim");
    let segment_2=document.getElementById("signUp-form")
    segment_2.classList.toggle('signInForn')
    let new_segment_2=document.getElementById("signUp")
    new_segment_2.classList.toggle("SignUpNot")
    let new_segment_1=document.getElementById("signIn-form")
    new_segment_1.classList.toggle("SignImFor")
    return 0;
}

