const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1999000,
    productDesc: "Nike Air Force 1 Mid '07 adalah sepatu ikonik yang memadukan desain klasik dengan kenyamanan modern. Awalnya dirancang untuk permainan basket, sepatu ini kini menjadi pilihan populer untuk penggunaan sehari-hari.",
    colors: [
      {
        code: "black",
        img: "assets/images/air.png",
      },
      {
        code: "darkgreen",
        img: "assets/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 2499000,
    productDesc: "Nike Air Jordan 1 High OG adalah sepatu legendaris yang memadukan warisan sejarah dengan gaya modern. Awalnya diperkenalkan pada tahun 1985, sepatu ini menjadi simbol ikonik dalam dunia basket dan streetwear, membawa pengaruh besar dalam budaya sneaker hingga saat ini.",
    colors: [
      {
        code: "lightgray",
        img: "assets/images/jordan.png",
      },
      {
        code: "green",
        img: "assets/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 1799000,
    productDesc: "Nike Blazer Mid '77 Vintage adalah sepatu yang memadukan desain retro klasik dengan sentuhan modern. Awalnya dirilis pada tahun 1970-an sebagai sepatu basket, Nike Blazer kini menjadi ikon dalam dunia streetwear, dikenal karena siluet clean dan kesan vintage yang timeless.",
    colors: [
      {
        code: "lightgray",
        img: "assets/images/blazer.png",
      },
      {
        code: "green",
        img: "assets/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2199000,
    productDesc: "Nike Crater Impact adalah sepatu sneaker yang dirancang dengan misi untuk memadukan gaya modern, kenyamanan, dan keberlanjutan. Bagian dari upaya Nike dalam mengurangi limbah, sepatu ini dibuat dengan menggunakan bahan daur ulang, menjadikannya pilihan ideal bagi mereka yang peduli terhadap lingkungan tanpa mengorbankan performa atau estetika.",
    colors: [
      {
        code: "black",
        img: "assets/images/crater.png",
      },
      {
        code: "lightgray",
        img: "assets/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 1699000,
    productDesc: "Nike Space Hippie 01 adalah sepatu revolusioner yang memadukan gaya futuristik dengan komitmen terhadap keberlanjutan. Sebagai bagian dari koleksi \"Space Hippie, sepatu ini dirancang untuk mengurangi dampak lingkungan dengan menggunakan bahan daur ulang dalam setiap aspeknya. Dengan tampilan yang modern dan unik, Nike Space Hippie 01 memberikan pengalaman yang ringan, nyaman, dan ramah lingkungan.",
    colors: [
      {
        code: "gray",
        img: "assets/images/hippie.png",
      },
      {
        code: "black",
        img: "assets/images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

// Inisialisasi saat web pertama kali dimuat
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const cureentProductDesc = document.querySelector(".productDesc")
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Fungsi untuk menyinkronkan data produk ke elemen
function updateProductDisplay(product) {
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "Rp" + product.price.toLocaleString("id-ID");
  cureentProductDesc.textContent= product.productDesc;
  currentProductImg.src = product.colors[0].img;

  // Set warna produk ke elemen warna
  currentProductColors.forEach((color, index) => {
    if (product.colors[index]) {
      color.style.backgroundColor = product.colors[index].code;
    } else {
      color.style.backgroundColor = "transparent"; // Jika tidak ada warna
    }
  });
}

// Inisialisasi tampilan produk awal
updateProductDisplay(choosenProduct);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Ubah slide saat menu diklik
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Perbarui produk yang dipilih
    choosenProduct = products[index];

    // Perbarui tampilan produk
    updateProductDisplay(choosenProduct);
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
    }
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

document.getElementById("checkoutButton").addEventListener("click", function() {
  alert("Pesanan anda berhasil dibuat");
  window.location.href = "index.html";
});