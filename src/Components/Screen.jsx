import React from 'react';
import Screen from "./img/screen.png"

function screen() {
  return (
    <>
    <section class="screen" id="screen">
        <div class="container">
            <div class="screen-content">
                <div class="left">
                    <img src={Screen} alt=""/>
                </div>
                <div class="right">
                    <h1>Дизайн и верстка</h1>
                    <p>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной "рыбой" для текстов на латинице с начала XVI века.
                    </p>
                    <button>НАПИСАТЬ МНЕ</button>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default screen