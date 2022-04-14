import storage from "redux-persist/lib/storage";
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
      name: "Gargoyle",
      img: "https://images.unsplash.com/photo-1586275857380-e5da180ea8b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80",
      price: 7,
    },
    {
      name: "Balut",
      img: "https://vnd.vietnamdrive.com/wp-content/uploads/2022/01/vietnamese-balut-duck-egg.jpg",
      price: 7,
    },
    {
      name: "Cursed Medallion",
      img: "https://images.unsplash.com/photo-1633785584922-503ad0e982f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      price: 7,
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
  ],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "RESET":
      storage.removeItem("persist:root");
      return {
        ...initialState,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}
export default rootReducer;
