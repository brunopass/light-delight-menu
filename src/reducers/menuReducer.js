import Cafe from '../assets/icons8-coffee-96.png'
import Pasteleria from '../assets/icons8-cake-96.png'
import Veggie from '../assets/icons8-no-pork-96.png'
import Sandwich from '../assets/icons8-sandwich-96.png'
import Drink from '../assets/icons8-soda-bottle-96.png'
import TACC from '../assets/icons8-no-gluten-96.png'
import Rolls from '../assets/icons8-cinnamon-roll-96.png'
import Burger from '../assets/icons8-hamburger-96.png'

const INITIAL_STATE = {
    opciones:[
        {
        title: 'Cafetería',
        link: '/cafeteria',
        img: Cafe
    },
    {
        title: 'Pastelería',
        link: '/pasteleria',
        img: Pasteleria
    },
    {
        title: 'Veggie',
        link: '/veggie',
        img: Veggie
    },
    {
        title: 'Sandwiches',
        link: '/sandwiches',
        img: Sandwich
    },
    {
        title: 'Drinks',
        link: '/drinks',
        img: Drink
    },
    {
        title: 'Burgers',
        link: '/burgers',
        img: Burger
    },
    {
        title: 'Sin TACC',
        link: '/sin-tacc',
        img: TACC
    },
    {
        title: 'Rolls',
        link: '/rolls',
        img: Rolls
    }
]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'traer_opciones':
            return {...state, opciones: action.payload}
        
        default:
            return state
    }
}