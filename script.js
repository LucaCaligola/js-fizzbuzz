//  Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//  per i multipli di 3 stampi “Fizz” al posto del numero
//  per i multipli di 5 stampi “Buzz” al posto del numero
//  per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione appendChild()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.







const wrapper = document.querySelector ('div.wrapper')


for (let i = 1; i < 101; i++) {

    const cardElement = document.createElement ('p');
    cardElement.className = 'card';
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ('FizzBuzz')
        cardElement.append('FizzBuzz')
        cardElement.className += ' red'
        console.log (cardElement.className)
        
    }

    else if (i % 3 == 0) {
        console.log ('Fizz')
        cardElement.append('Fizz')
        cardElement.className += " green"
    }

    else if (i % 5 == 0) {
        console.log ('Buzz')
        cardElement.append('Buzz')
        cardElement.className += " yellow"
    }

    else {
        console.log (i)
        cardElement.append(i)
        cardElement.className += " blue"
        
        
    }



    wrapper.appendChild (cardElement)
}
    


