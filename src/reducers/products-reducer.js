//создаем свой стейт для products
export const initialProductsState = [];

//создаем свой редюсер. Задаем состояние по умолчанию, а action здесь и не нужен. Конечно можно придумать какие-то операции с товаром, но здесь мы не будем это делать
export const productsReducer = (state = initialProductsState) => state;
