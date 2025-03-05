const testimonials = [
  {
    name: "Chuck D",
    photoURL: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequuntur officiis sunt ex assumenda enim doloribus dolorem ipsam. Pariatur quasi velit laborum quod temporibus illo deleniti cum modi deserunt voluptate.",
  },
  {
    name: "Rose B",
    photoURL: "https://images.unsplash.com/photo-1595565312451-23051ab0666c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhY2V8ZW58MHwxfDB8fHww",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequuntur officiis sunt ex assumenda enim doloribus dolorem ipsam. Pariatur quasi velit laborum quod temporibus illo deleniti cum modi deserunt voluptate.",
  },
  {
    name: "Bobby J",
    photoURL: "https://images.unsplash.com/photo-1587064712555-6e206484699b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhY2V8ZW58MHwxfDB8fHww",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequuntur officiis sunt ex assumenda enim doloribus dolorem ipsam. Pariatur quasi velit laborum quod temporibus illo deleniti cum modi deserunt voluptate.",
  },
  {
    name: "Susan M",
    photoURL: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHwxfDB8fHww",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequuntur officiis sunt ex assumenda enim doloribus dolorem ipsam. Pariatur quasi velit laborum quod temporibus illo deleniti cum modi deserunt voluptate.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoURL, text } = testimonials[idx];
  imgEl.src = photoURL;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 3000);
}
