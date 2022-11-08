import Notiflix from 'notiflix';

    
export function success(total_results) {
    Notiflix.Notify.success(`За вашим запитом ми знайшли ${total_results} зображень`);
}
export function info() {
    Notiflix.Notify.info(
        'Фільм додано до черги перегляду',
        'Фільм додано до переглянутих'
    );
}
export function failure() {
    Notiflix.Notify.failure('За вашим запитом фільмів не знайдено');
}
export function Loading() {
    Notiflix.Loading.dots('Зачекайте...');
}  