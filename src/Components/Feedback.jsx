import React from 'react';

function feedback() {
  return (
    <>
    <section class="feedback" id="feedBack">
        <div class="container">
            <div class="feedback-content">
                <h1>Хотите веб-сайт?</h1>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
                <form action="">
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="email" placeholder="Ваш e-mail"/>
                    <textarea  placeholder="Ваше сообщение"></textarea>
                    <button>ОТПРАВИТЬ</button>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}
export default feedback