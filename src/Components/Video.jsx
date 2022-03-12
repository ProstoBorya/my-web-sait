import React from 'react';

function video() {
  return (
    <>
    <section class="video" id="video">
        <div class="container">
            <div class="video-content">
                <h1>Как я работаю</h1>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
                <iframe src="https://www.youtube.com/embed/9Wi4UA549A8" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </section>
    </>
  );
}
export default video