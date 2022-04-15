import { ADD_TO_CART, REMOVE } from ".././action-types";

const initialState = {
  products: [
    {
      name: "Sleepy Chihuahua",
      img: "https://images.unsplash.com/photo-1563743107569-a811ccb98cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1676&q=80",
      price: 30,
    },
    {
      name: "Hammer",
      img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 5,
    },
    {
      name: "Bundle of Lychee",
      img: "https://images.unsplash.com/photo-1591600986686-bf5f872d2e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: 7,
    },
    {
      name: "Francisco's Birth Certificate",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/California_informational-only_long-form_birth_certificate.jpg/800px-California_informational-only_long-form_birth_certificate.jpg",
      price: 50,
    },
    {
      name: "Gargoyle",
      img: "https://images.unsplash.com/photo-1586275857380-e5da180ea8b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80",
      price: 90,
    },
    {
      name: "Balut",
      img: "https://vnd.vietnamdrive.com/wp-content/uploads/2022/01/vietnamese-balut-duck-egg.jpg",
      price: 5,
    },
    {
      name: "Cursed Medallion",
      img: "https://images.unsplash.com/photo-1633785584922-503ad0e982f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      price: 70,
    },
    {
      name: "Sailboat",
      img: "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      price: 100,
    },
    {
      name: "Expired German Driver's License",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/DE_Licence_2013_Front.jpg/1920px-DE_Licence_2013_Front.jpg",
      price: 2,
    },
    {
      name: "Buttery NFT",
      img: "https://i.imgur.com/v5cZgrS.png",
      price: 5000,
    },
    {
      name: "Partially Eaten Bar of Soap",
      img: "https://images.unsplash.com/photo-1607006555968-e3f9b4d2304a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 1,
    },
    {
      name: "Cup of Coffee",
      img: "https://images.unsplash.com/photo-1649860364142-15dc070439d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 4,
    },
  ],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}
export default rootReducer;
