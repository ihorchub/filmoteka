import { Notify } from "notiflix";
import { Loading } from 'notiflix';

function onSearch(e) {
    e.preventDefault();
    
Notify.success(
    `За вашим запитом ми знайшли ${total_results} зображень`);

    Notify.info(
        'Фільм додано до черги перегляду');
    Notify.info(
        'Фыльм додано до переглянутих'
    );

}

function onError(err) {
    Notify.failure(
        'За вашим запитом фільмів не знайдено');
}

// function () {
//     Loading.dots(
//         'Зачекайте, будь ласка'
//     );
// }