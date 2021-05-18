import * as emailjs from 'emailjs-com';

form = document.getElementsByTagName('form')

submitButton = form[0].getElementsByTagName('ul')
submitButton = submitButton[0].getElementsByTagName('li')
submitButton = submitButton[0].getElementsByTagName('a')[0]

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    emailjs.sendForm('service_2lfe7oa','template_rrdx9ab',e.target,'user_BlYjfJhltcpY8fc1D6ftY')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                }, (error) => {
                    console.log(error.text)
                });
})