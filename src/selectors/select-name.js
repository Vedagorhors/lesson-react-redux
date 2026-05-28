// Это вариант когда всё в одном стейте user
// export const selectName = (state) => state.user.name;

// Переписываем под созданный редюсер именно для пользователя user
export const selectName = (state) => state.userState.name;
