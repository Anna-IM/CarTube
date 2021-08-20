import authService from "./../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";

async function submitHandler(context, e) {
    e.preventDefault();
    try{
        let form = e.target;
        let formData = new FormData(form);
        let user = {
            username: formData.get("username"),
            password: formData.get("password")
        }
       
        if (user.username === "" || user.password === ""){
            window.alert("All fields are required!");
        } else {
            let loginResponse = await authService.login(user);
            console.log(user)
            context.page.redirect('/all-cars');
        }
    } catch(err) {
        window.alert(err);
    }
    
}

async function getView(context) {
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = loginTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView,
    submitHandler
}