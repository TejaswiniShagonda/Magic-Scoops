let is_shop_opened = true

let btnOpen = document.getElementById('btnOpen')
let btnClose = document.getElementById('btnClose')
let imgOpenClose = document.getElementById('imgOpenClose')
let msgOpenClose = document.getElementById('msgOpenClose')
let onGoingTask = document.getElementById('onGoingTask')

let imgCustomer = document.getElementById('imgCustomer')
imgCustomer.style.display = 'none'

let imgChef = document.getElementById('imgChef')
imgChef.style.display = 'none'

let imgFruits = document.getElementById('imgFruits')
imgFruits.style.display = 'none'

let imgLiquids = document.getElementById('imgLiquids')
imgLiquids.style.display = 'none'

let imgContainer = document.getElementById('imgContainer')
imgContainer.style.display = 'none'

let imgToppings = document.getElementById('imgToppings')
imgToppings.style.display = 'none'

let imgIceCream = document.getElementById('imgIceCream')
imgIceCream.style.display = 'none'

btnClose.style.display = 'none'

function delay(ms) {
    return new Promise((resolve, reject)=> {
        if(is_shop_opened) {
            setTimeout(resolve, ms)
        } else {
            reject()
        }
    })
}


async function handleOpenClose() {
    if(is_shop_opened) {    
        btnClose.style.display = 'block'
        btnOpen.style.display = 'none'
        imgOpenClose.src = './images/shop_opened.png'
        msgOpenClose.innerHTML = 'Shop is opened, do you want to close?'

        onGoingTask.classList.remove('text-danger')
        onGoingTask.classList.add('text-success')
        onGoingTask.innerHTML = 'Magic Ice Cream, Welcomes You!!!'

        imgCustomer.style.display = 'block'

        const order = async () => {
            onGoingTask.innerHTML = 'Customer is ordering....'
            await delay(3000);
            onGoingTask.innerHTML = 'Order received, starting production...'
        }

        const production = async () => {
            imgChef.style.display = 'block'
            imgCustomer.style.display = 'none'
            await delay(3000);
            onGoingTask.innerHTML = 'Fruits are being chopped...'
            imgFruits.style.display = 'block'
            await delay(5000);
            onGoingTask.innerHTML = 'Adding water and ice...'
            imgFruits.style.display = 'none'
            imgLiquids.style.display = 'block'
            await delay(2000);
            onGoingTask.innerHTML = 'Starting machine...'
            imgLiquids.style.display = 'none'
            await delay(3000);
            onGoingTask.innerHTML = 'Placing ice-cream on container...'
            imgContainer.style.display = 'block'
            await delay(3000);
            onGoingTask.innerHTML = 'Adding toppings...'
            imgContainer.style.display = 'none'
            imgToppings.style.display = 'block'
            await delay(5000);
            onGoingTask.innerHTML = 'Serve Ice-cream!!!'
            imgToppings.style.display = 'none'
            imgChef.style.display = 'none'
            imgIceCream.style.display = 'block'
            await delay(5000);
            onGoingTask.innerHTML = 'Next order, please!!!'
            imgIceCream.style.display = 'none'
            imgChef.style.display = 'block'
        }

        await order();
        await production();

        is_shop_opened = false

    } else {    
        btnClose.style.display = 'none'
        btnOpen.style.display = 'block'
        is_shop_opened = true
        imgOpenClose.src = './images/shop_closed.png'
        msgOpenClose.innerHTML = 'Shop is closed, do you want to open?'

        onGoingTask.classList.remove('text-success')
        onGoingTask.classList.add('text-danger')
        onGoingTask.innerHTML = 'Shop is closed! Please visit again!!!'

        imgCustomer.style.display = 'none'
        imgChef.style.display = 'none'
        imgIceCream.style.display = 'none'
    }
}
