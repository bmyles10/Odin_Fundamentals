/*
You are probably wondering what "this" is. The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead? As you'll see in the Object-oriented JavaScript for beginners article, when we start creating constructors and so on, this is very useful — it will always ensure that the correct values are used when a member's context changes (e.g. two different person object instances may have different names, but will want to use their own name when saying their greeting).
*/

let person1 = {
    name: 'Chris',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }
  
  let person2 = {
    name: 'Brian',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }

  /*In this case, person1.greeting() will output "Hi! I'm Chris."; person2.greeting() on the other hand will output "Hi! I'm Brian.", even though the method's code is exactly the same in each case. As we said earlier, this is equal to the object the code is inside — this isn't hugely useful when you are writing out object literals by hand, but it really comes into its own when you are dynamically generating objects (for example using constructors). It will all become clearer later on.
   */