// getElementById()

const getElementById = document.getElementById('blog-title')
console.log(getElementById)

// getElementsByClassName()

const getElementsByClassName = document.getElementsByClassName('one')
console.log(getElementsByClassName)

// getElementsByTagName()

let getElementsByTagName = document.getElementsByTagName('head')
console.log(getElementsByTagName)

getElementsByTagName = document.getElementsByTagName('h1')
console.log(getElementsByTagName)

// querySelector()

const querySelector = document.querySelector('.one')
console.log(querySelector)

//  querySelectorAll()
//  Diferença entre querySelectorAll e getElementsByClassName, o querySelecto retorna um nodeList que possibilita usar o forEach e o elementsByClass retorna um HTMLColection que nao possibilita usar o forEach

const querySelectorAll = document.querySelectorAll('.one')
console.log(querySelectorAll)
