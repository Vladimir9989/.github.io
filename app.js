// Плавный скролл
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//     anchor.addEventListener('click', (e)=> {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })
//     })
// };
"use strict";
"use strict";

var vacancyItem = document.querySelectorAll('.vacancy__item');
var vacancyPrice = document.querySelector('.vacancy__price');
vacancyItem.forEach(function (item) {
  item.addEventListener('click', function () {
    var self = item.querySelector('.vacancy__text');
    var arrow = item.querySelector('.vacancy__price');
    self.classList.toggle('vacancy__text--active');
    arrow.classList.toggle('vacancy__price--active');
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMxLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJ2YWNhbmN5SXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInZhY2FuY3lQcmljZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxmIiwiYXJyb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FDWkEsSUFBTUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0FBQy9ELElBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7QUFFOURKLFdBQVcsQ0FBQ0ssT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztFQUMxQkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztJQUNoQyxJQUFJQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0YsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLElBQUlLLEtBQUssR0FBR0gsSUFBSSxDQUFDRixhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDakRJLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDOUNGLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7RUFDcEQsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xyXG4vLyBjb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1cIiNcIl0nKTtcclxuXHJcbi8vIGZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XHJcbi8vICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignJyArIGJsb2NrSUQpLnNjcm9sbEludG9WaWV3KHtcclxuLy8gICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbi8vICAgICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCJcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfSlcclxuLy8gfTsiLCJjb25zdCB2YWNhbmN5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWNhbmN5X19pdGVtJyk7XHJcbmNvbnN0IHZhY2FuY3lQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWNhbmN5X19wcmljZScpO1xyXG5cclxudmFjYW5jeUl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGxldCBzZWxmID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudmFjYW5jeV9fdGV4dCcpO1xyXG4gICAgICAgIGxldCBhcnJvdyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnZhY2FuY3lfX3ByaWNlJylcclxuICAgICAgICBzZWxmLmNsYXNzTGlzdC50b2dnbGUoJ3ZhY2FuY3lfX3RleHQtLWFjdGl2ZScpO1xyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC50b2dnbGUoJ3ZhY2FuY3lfX3ByaWNlLS1hY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
