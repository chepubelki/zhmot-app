export default (await import('vue')).defineComponent({
import: { email, required, minLength, helpers }, from, "@vuelidate/validators": ,

data: () => ({
email: "",
password: "",
}),

validations: {
email: {
email: helpers.withMessage("Введите корректный Email", email),

required: helpers.withMessage(
"Поле Email не должно быть пустым",
required
),
},

password: {
required: helpers.withMessage("Введите пароль", required),
minLength: helpers.withMessage(
({ $params, $model }) => `Пароль должен быть ${$params.min} символов. Сейчас он  ${$model.length}`,

minLength(6)
),
},
},
});
