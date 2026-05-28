// export const selectAge = (state) => state.user.age;

// Переписываем под созданный редюсер именно для пользователя user
export const selectAge = (state) => state.userState.age;
