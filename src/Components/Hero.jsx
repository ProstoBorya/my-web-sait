import React from 'react';
import I from "./img/I.png"

function hero() {
  return (
    <>
    <section class="hero" id="hero">
        <div class="container">
            <div class="hero-content">
                <div class="left">
                    <h2>Верстальщик</h2>
                    <h1>Тиль Швайгер</h1>
                    <p>
                        Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку
                        небольшого сайта или интернет-магазина
                    </p>
                    <button>НАПИСАТЬ МНЕ</button>
                </div>
                <div class="right">
                    <img src={I} alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default hero