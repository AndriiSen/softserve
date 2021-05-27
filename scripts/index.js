document.querySelectorAll('.accordion-item__trigger').forEach((item) => 
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      parent.classList.toggle('accordion-item--activated')
    })
)

document.querySelectorAll('.read-more-btn').forEach((item) => 
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      parent.classList.toggle('read-more-active')
    })
)