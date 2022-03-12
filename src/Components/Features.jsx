import React from 'react';
import one from "./img/one.png"
import five from "../five.png"
import two from "./img/two.png"
import three from "./img/three.png"
import four from "./img/four.png"
import six from "./img/six.png"
function features() {
  return (
    <>
    <section class="features" id="features">
        <div class="container">
            <div class="features-content">
                <div class="feature">
                    <img src={one}/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
                <div class="feature">
                    <img src={two} alt=""/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
                <div class="feature">
                    <img src={three} alt=""/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
                <div class="feature">
                    <img src={four} alt=""/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
                <div class="feature">
                    <img src={five} alt=""/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
                <div class="feature">
                    <img src={six} alt=""/>
                    <div class="text">
                        <h3>40+</h3>
                        <span>проектов</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default features