const faqs = document.querySelectorAll('.faq__accordion');

if(faqs) {

  faqs.forEach(faq => {
    const question = faq.querySelector('.faq__question');
    const answer = faq.querySelector('.faq__answer');

    question.addEventListener('click', () => {
      if (faq.classList.contains('open')) {
        faq.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        // Open blocks closing
        faqs.forEach(otherBlocks => {
          if (otherBlocks.classList.contains('open')) {
            otherBlocks.classList.remove('open');
            otherBlocks.querySelector('.faq__answer').style.maxHeight = null;
          }
        });

        faq.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });


  if(faqs[0]) {
    window.addEventListener("load", () => {
      const answerEl = document.querySelectorAll('.faq__answer');    
      faqs[0].classList.add('open');
      answerEl[0].style.maxHeight = answerEl[0].scrollHeight + 'px';
    });
  }

}


